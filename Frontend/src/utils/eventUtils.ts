import type { EventData } from './types';

/**
 * Fetches events from Google Sheets
 * @returns {Promise<Array>} Array of event objects
 */
export async function fetchEventsFromSheet(): Promise<EventData[]> {
  const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || 'https://docs.google.com/spreadsheets/d/1r9n0_CEiEWHzUi4D4Q8SL5nJLbxgYkFbaht7DIuBod4/gviz/tq?tqx=out:json&sheet=events';
  
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    
    // Google Sheets returns data wrapped in a callback, we need to extract JSON
    // Try different patterns to handle variations in the response format
    let jsonString = text;
    
    // Pattern 1: Standard google.visualization.Query.setResponse() format
    let jsonMatch = text.match(/google\\.visualization\\.Query\\.setResponse\\((.*)\\);/s);
    if (jsonMatch) {
      jsonString = jsonMatch[1];
    } else {
      // Pattern 2: Try to extract JSON object directly
      const objMatch = text.match(/({.*})/s);
      if (objMatch) {
        jsonString = objMatch[1];
      } else {
        // Pattern 3: Remove common prefixes/suffixes
        jsonString = text
          .replace(/^[^\{]*/, '') // Remove everything before first '{'
          .replace(/[^}]*$/, ''); // Remove everything after last '}'
      }
    }
    
    if (!jsonString || jsonString.trim() === '') {
      throw new Error("Invalid response format from Google Sheets - no JSON data found");
    }
    
    const data = JSON.parse(jsonString);
    
    // Extract column headers from data.table.cols
    const headers = data.table.cols.map((col: any) => {
      const label = col.label || "";
      const value = String(label).toLowerCase().trim();
      return value;
    });
    
    // Map all rows to objects
    const events = data.table.rows
      .map((row: any) => {
        if (!row || !row.c) {
          return null;
        }
        
        const event: any = {};
        row.c.forEach((cell: any, cellIndex: number) => {
          const header = headers[cellIndex];
          if (header && cell && cell.v !== null && cell.v !== undefined) {
            event[header] = cell.v;
          }
        });
        
        // Normalize field names (Google Sheets may have different casing)
        const normalizedEvent: EventData = {
          id: event.id || event.Id || event.ID || "",
          title: event.title || event.Title || "",
          category: event.category || event.Category || "",
          status: event.status || event.Status || "",
          startDate: event.startdate || event.startDate || event.StartDate || "",
          endDate: event.enddate || event.endDate || event.EndDate || "",
          venue: event.venue || event.Venue || "",
          mode: event.mode || event.Mode || "",
          description: event.description || event.Description || "",
          detailedDescription: event.detaileddescription || event.detailedDescription || event.DetailedDescription || "",
          registrationLink: event.registrationlink || event.registrationLink || event.RegistrationLink || undefined,
          poster: event.poster || event.Poster || undefined,
          logo: event.logo || event.Logo || undefined,
          brochureLink: event.brochurelink || event.brochureLink || event.BrochureLink || undefined,
          priority: parseInt(event.priority || event.Priority || "0") || 0,
          parentEventId: event.parenteventid || event.parentEventId || event.ParentEventId || undefined,
          theme: event.theme || event.Theme || undefined,
          prizeInfo: event.prizeinfo || event.prizeInfo || event.PrizeInfo || undefined,
          problemStatementLink: event.problemstatementlink || event.problemStatementLink || event.ProblemStatementLink || undefined,
          stages: event.stages || event.Stages || undefined,
        };
        
        // Only return events with required fields
        if (normalizedEvent.id && normalizedEvent.title && normalizedEvent.startDate) {
          return normalizedEvent;
        }
        return null;
      })
      .filter((event: any) => event !== null);
    
    // Sort events by priority
    events.sort((a: EventData, b: EventData) => b.priority - a.priority);
    
    return events;
  } catch (error) {
    console.error("Error fetching events from Google Sheets:", error);
    throw error;
  }
};

/**
 * Classifies events into featured, other upcoming, ongoing, and past
 * @param {Array} events - Array of event objects
 * @returns {Object} Object with featured, otherUpcoming, ongoing, and past arrays
 */
export function classifyEvents(events: EventData[]) {
  const now = new Date();
  const ongoing: EventData[] = [];
  const upcoming: EventData[] = [];
  const past: EventData[] = [];
  
  events.forEach(event => {
    try {
      // Ensure startDate and endDate are strings before parsing
      let startDateStr = String(event.startDate || "").trim();
      let endDateStr = String(event.endDate || "").trim();
      
      if (!startDateStr || !endDateStr) {
        return;
      }
      
      // Handle the case where dates are stored as Date constructor strings like "Date(2025,11,5)"
      // Convert "Date(2025,11,5)" to proper date format "2025-12-05" (note: JS months are 0-indexed)
      if (startDateStr.startsWith('Date(') && startDateStr.endsWith(')')) {
        const dateParts = startDateStr.slice(5, -1).split(','); // Remove 'Date(' and ')' and split
        if (dateParts.length >= 3) {
          const year = parseInt(dateParts[0]);
          const month = parseInt(dateParts[1]); // JS months are 0-indexed
          const day = parseInt(dateParts[2]);
          startDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
      }
      
      if (endDateStr.startsWith('Date(') && endDateStr.endsWith(')')) {
        const dateParts = endDateStr.slice(5, -1).split(','); // Remove 'Date(' and ')' and split
        if (dateParts.length >= 3) {
          const year = parseInt(dateParts[0]);
          const month = parseInt(dateParts[1]); // JS months are 0-indexed
          const day = parseInt(dateParts[2]);
          endDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
      }
      
      const startDate = new Date(startDateStr);
      const endDate = new Date(endDateStr);
      
      // Skip if dates are invalid
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return;
      }
      
      // Normalize status to lowercase for comparison
      const status = String(event.status || "").toLowerCase().trim();
      
      // Ongoing: now >= startDate && now <= endDate
      if (now >= startDate && now <= endDate) {
        ongoing.push(event);
      }
      // Upcoming: status === "upcoming" && startDate > now
      else if (status === "upcoming" && startDate > now) {
        // Only include events within 7 days (1 week)
        const daysUntilEvent = (startDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
        if (daysUntilEvent <= 7) {
          upcoming.push(event);
        }
      }
      // Past: endDate < now
      else if (endDate < now) {
        past.push(event);
      }
      
      // Additional debug logs removed
    } catch (error) {
      console.error("Error processing event:", event.id, error);
    }
  });
  
  // Sort ongoing by endDate (earliest first)
  ongoing.sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());
  
  // Sort upcoming by priority (ascending), then startDate (ascending)
  upcoming.sort((a, b) => {
    const priorityA = parseInt(String(a.priority)) || 999;
    const priorityB = parseInt(String(b.priority)) || 999;
    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });
  
  // Sort past by endDate (most recent first)
  past.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
  
  return {
    upcoming,
    ongoing,
    past,
  };
};

// Function to get events by category
export const getEventsByCategory = (events: EventData[], category: string) => {
  return events.filter(event => event.category.toLowerCase() === category.toLowerCase());
};

// Function to get events by status
export const getEventsByStatus = (events: EventData[], status: string) => {
  return events.filter(event => event.status.toLowerCase() === status.toLowerCase());
};

// Function to format date
export const formatDate = (dateString: string) => {
  // Handle the case where dates are stored as Date constructor strings like "Date(2025,11,5)"
  let processedDateString = dateString;
  if (dateString.startsWith('Date(') && dateString.endsWith(')')) {
    const dateParts = dateString.slice(5, -1).split(','); // Remove 'Date(' and ')' and split
    if (dateParts.length >= 3) {
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]); // JS months are 0-indexed
      const day = parseInt(dateParts[2]);
      processedDateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
  }
  
  const date = new Date(processedDateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// Function to calculate days remaining until event
export const getDaysUntilEvent = (startDate: string) => {
  // Handle the case where dates are stored as Date constructor strings like "Date(2025,11,5)"
  let processedStartDate = startDate;
  if (startDate.startsWith('Date(') && startDate.endsWith(')')) {
    const dateParts = startDate.slice(5, -1).split(','); // Remove 'Date(' and ')' and split
    if (dateParts.length >= 3) {
      const year = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]); // JS months are 0-indexed
      const day = parseInt(dateParts[2]);
      processedStartDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
  }
  
  const eventDate = new Date(processedStartDate);
  const today = new Date();
  const diffTime = eventDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * Get sub-events for a parent event
 * @param {Array} allEvents - All events from the sheet
 * @param {string} parentEventId - ID of the parent event
 * @returns {Array} Array of sub-events
 */
export function getSubEvents(allEvents: EventData[], parentEventId: string) {
  if (!allEvents || !parentEventId) return [];
  
  return allEvents.filter(event => {
    const eventParentId = String(event.parentEventId || "").trim().toLowerCase();
    const targetParentId = String(parentEventId).trim().toLowerCase();
    return eventParentId === targetParentId;
  });
}

