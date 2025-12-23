import HeadingNText from "../Components/HeadingNText";
import { useTheme } from "../context/ThemeContext";
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";
import CountdownTimer from "../Components/CountdownTimer";
import { fetchEventsFromSheet, classifyEvents, formatDate } from "../utils/eventUtils";
import type { EventData } from "../utils/types";
import { useEffect, useState } from "react";

export default function Events() {
  const { theme } = useTheme();
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const fetchedEvents = await fetchEventsFromSheet();
        setEvents(fetchedEvents);
        setError(null);
      } catch (err) {
        console.error("Error loading events:", err);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const { upcoming, ongoing, past } = classifyEvents(events);

  const convertGoogleDriveUrl = (url: string): string => {
    if (!url) return url;
    
    // Handle different Google Drive URL formats
    if (url.startsWith('https://drive.google.com/file/d/')) {
      // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
      const match = url.match(/\/file\/d\/([^\/]+)\/view/);
      if (match && match[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
      }
    } else if (url.startsWith('https://drive.google.com/uc?export=view&id=')) {
      // Already in the correct format, return as is
      return url;
    } else if (url.startsWith('https://drive.google.com/open?id=')) {
      // Format: https://drive.google.com/open?id=FILE_ID
      return url.replace('https://drive.google.com/open?id=', 'https://drive.google.com/uc?export=view&id=');
    } else if (url.includes('drive.google.com') && url.includes('/d/')) {
      // Format: https://drive.google.com/drive/folders/.../FILE_ID
      const match = url.match(/\/d\/([^\/]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/uc?export=view&id=${match[1]}`;
      }
    }
    
    // Return original URL if not a Google Drive URL
    return url;
  };

  const renderBigCenteredCard = (
    event: EventData,
    badgeBg: string,
    badgeText: string
  ) => {
    const isCompleted =
      event.status.toLowerCase() === "past" ||
      event.status.toLowerCase() === "completed";

    return (
      <div className="w-full flex justify-center mt-10">
        <div
          className={`max-w-5xl w-full border rounded-2xl overflow-hidden shadow-lg p-6 md:p-10 text-center transition-colors ${
            theme === "dark"
              ? "bg-[#121212] border-white/10"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Big Banner - Hidden on mobile */}
          <div className="w-full h-80 rounded-xl overflow-hidden mb-8 hidden md:block">
            {event.poster ? (
              <img
                src={convertGoogleDriveUrl(event.poster)}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full flex items-center justify-center ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <span
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  No Image
                </span>
              </div>
            )}
          </div>

          {/* Badge */}
          <span
            className={`text-xs px-4 py-1 text-black font-semibold rounded-full ${badgeBg}`}
          >
            {badgeText.toUpperCase()} EVENT
          </span>

          {/* Title */}
          <h2 className="text-3xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {event.title}
          </h2>

          {/* Date & Venue */}
          <p
            className={`mt-2 text-lg ${
              theme === "dark" ? "text-neutral-400" : "text-gray-600"
            }`}
          >
            📅 {formatDate(event.startDate)} &nbsp;&nbsp; | &nbsp;&nbsp; 📍{" "}
            {event.venue}
          </p>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-neutral-400" : "text-gray-600"
            }`}
          >
            ⏰{" "}
            {event.startDate === event.endDate
              ? formatDate(event.startDate)
              : `${formatDate(event.startDate)} – ${formatDate(event.endDate)}`}
          </p>

          {/* Description */}
          <p
            className={`mt-6 leading-relaxed max-w-3xl mx-auto text-lg ${
              theme === "dark" ? "text-neutral-300" : "text-gray-700"
            }`}
          >
            {event.detailedDescription || event.description}
          </p>

          {/* Register button for non‑completed */}
          {!isCompleted && event.registrationLink && (
            <div className="flex justify-center mt-6">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={() => window.open(event.registrationLink, "_blank")}
                className={`px-6 py-2.5 font-semibold cursor-pointer ${
                  theme === "dark" ? "bg-black text-white" : "bg-white text-gray-900"
                }`}
              >
                Register Now 🚀
              </HoverBorderGradient>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPastEventCard = (event: EventData) => {
    return (
      <div
        className={`max-w-5xl w-full border rounded-2xl overflow-hidden shadow-lg mt-10 p-6 md:p-10 text-center transition-colors ${
          theme === "dark"
            ? "bg-[#121212] border-white/10"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="w-full h-80 rounded-xl overflow-hidden mb-8">
          {event.poster ? (
            <img
              src={convertGoogleDriveUrl(event.poster)}
              alt={event.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center ${
                theme === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <span
                className={
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }
              >
                No Image
              </span>
            </div>
          )}
        </div>

        <span className="text-xs px-4 py-1 bg-gray-400/80 text-black font-semibold rounded-full">
          COMPLETED EVENT
        </span>

        <h2 className="text-3xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {event.title}
        </h2>

        <p
          className={`mt-2 text-lg ${
            theme === "dark" ? "text-neutral-400" : "text-gray-600"
          }`}
        >
          📅 {formatDate(event.startDate)} &nbsp;&nbsp; | &nbsp;&nbsp; 📍 {event.venue}
        </p>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-neutral-400" : "text-gray-600"
          }`}
        >
          ⏰ {event.startDate === event.endDate ? formatDate(event.startDate) : `${formatDate(event.startDate)} – ${formatDate(event.endDate)}`}
        </p>

        <p
          className={`mt-6 leading-relaxed max-w-3xl mx-auto text-lg ${
            theme === "dark" ? "text-neutral-300" : "text-gray-700"
          }`}
          >{event.detailedDescription || event.description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
          <img src="pe1.jpg" alt="Event 1" className="rounded-lg object-cover h-36 w-full" />
          <img src="pe2.jpeg" alt="Event 2" className="rounded-lg object-cover h-36 w-full" />
          <img src="pe3.jpg" alt="Event 3" className="rounded-lg object-cover h-36 w-full" />
          <img src="pe4.jpg" alt="Event 4" className="rounded-lg object-cover h-36 w-full" />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-[#F7F3E9] text-gray-900"
      }`}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 -z-10 [background-size:40px_40px]"
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)"
              : "linear-gradient(to_right,#e8e4d9_1px,transparent_1px),linear-gradient(to_bottom,#e8e4d9_1px,transparent_1px)",
        }}
      />

      {/* Radial Mask */}
      <div
        className={`absolute inset-0 -z-10 ${
          theme === "dark" ? "bg-black" : "bg-[#F7F3E9]"
        }`}
        style={{
          maskImage: "radial-gradient(700px_400px_at_center,transparent_20%,black)",
          WebkitMaskImage:
            "radial-gradient(700px_400px_at_center,transparent_20%,black)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center py-16 px-6">
        {loading && (
          <div className="flex justify-center items-center h-64 w-full">
            <div className="text-2xl font-bold">Loading events...</div>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-64 w-full">
            <div className="text-2xl font-bold text-red-500">{error}</div>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* UPCOMING */}
            <HeadingNText title="Upcoming Events" />

            {upcoming.length > 0 ? (
              <>
                {renderBigCenteredCard(upcoming[0], "bg-green-400", "Upcoming")}

                {/* Countdown below card */}
                <div className="mt-12 w-full max-w-4xl">
                  <HeadingNText title="Countdown to Next Event" />
                  <CountdownTimer targetDate={upcoming[0].startDate} theme={theme} />
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p
                  className={`text-xl ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  No upcoming events scheduled. Check back soon!
                </p>
              </div>
            )}

            {/* ONGOING */}
            <div className="w-full flex flex-col items-center mt-16">
              <HeadingNText title="Ongoing Events" />

              {ongoing.length > 0 ? (
                renderBigCenteredCard(ongoing[0], "bg-yellow-400", "Ongoing")
              ) : (
                <div className="text-center py-12 w-full">
                  <p
                    className={`text-xl ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    No ongoing events at the moment. Check back soon!
                  </p>
                </div>
              )}
            </div>

            {/* PAST */}
            <div
              id="past-events-section"
              className="w-full flex flex-col items-center mt-24"
            >
              <HeadingNText title="Past Events" />

              {past.length > 0 ? (
                renderPastEventCard(past[0])
              ) : (
                // your static mock as fallback
                <div
                  className={`max-w-5xl w-full border rounded-2xl overflow-hidden shadow-lg mt-10 p-6 md:p-10 text-center transition-colors ${
                    theme === "dark"
                      ? "bg-[#121212] border-white/10"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="w-full h-80 rounded-xl overflow-hidden mb-8">
                    <img
                      src="pe5.jpeg"
                      alt="Past Event"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-xs px-4 py-1 bg-gray-400/80 text-black font-semibold rounded-full">
                    COMPLETED EVENT
                  </span>

                  <h2 className="text-3xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    AI Workshop – Launch of GDG On Campus BVRIT
                  </h2>

                  <p
                    className={`mt-2 text-lg ${
                      theme === "dark" ? "text-neutral-400" : "text-gray-600"
                    }`}
                  >
                    📅 October 10, 2025 &nbsp;&nbsp; | &nbsp;&nbsp; 📍 Chemical
                    Seminar Hall
                  </p>
                  <p
                    className={`text-lg ${
                      theme === "dark" ? "text-neutral-400" : "text-gray-600"
                    }`}
                  >
                    ⏰ 02:00 PM – 03:30 PM
                  </p>

                  <p
                    className={`mt-6 leading-relaxed max-w-3xl mx-auto text-lg ${
                      theme === "dark" ? "text-neutral-300" : "text-gray-700"
                    }`}
                  >
                    The first-ever GDG On Campus event by BVRIT! 🎉 Speakers{" "}
                    <b>Ashutosh Bhakare</b> &amp; <b>Rachana Bhakare</b> delivered a
                    powerful hands-on AI workshop introducing cutting-edge ML and
                    real-world AI applications.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
                    <img
                      src="pe1.jpg"
                      alt="Event 1"
                      className="rounded-lg object-cover h-36 w-full"
                    />
                    <img
                      src="pe2.jpeg"
                      alt="Event 2"
                      className="rounded-lg object-cover h-36 w-full"
                    />
                    <img
                      src="pe3.jpg"
                      alt="Event 3"
                      className="rounded-lg object-cover h-36 w-full"
                    />
                    <img
                      src="pe4.jpg"
                      alt="Event 4"
                      className="rounded-lg object-cover h-36 w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
