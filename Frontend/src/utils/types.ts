// Event data type based on the Google Sheets structure
export interface EventData {
  id: string;
  title: string;
  category: string;
  status: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  venue: string;
  mode: string; // online, offline, hybrid
  description: string;
  detailedDescription: string;
  registrationLink?: string;
  poster?: string;
  logo?: string;
  brochureLink?: string;
  priority: number;
  parentEventId?: string;
  theme?: string;
  prizeInfo?: string;
  problemStatementLink?: string;
  stages?: string;
}