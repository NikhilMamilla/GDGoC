import React from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { formatDate, getDaysUntilEvent } from '../utils/eventUtils';
import type { EventData } from '../utils/types';

interface EventCardProps {
  event: EventData;
  theme: 'dark' | 'light';
}

const EventCard: React.FC<EventCardProps> = ({ event, theme }) => {
  const daysUntil = getDaysUntilEvent(event.startDate);
  const isWithinWeek = daysUntil <= 7 && daysUntil > 0;
  
  return (
    <div
      className={`group border rounded-2xl p-5 relative overflow-hidden transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-[#0f0f0f] border-white/10 hover:border-white/30 hover:shadow-xl'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl'
      }`}
    >
      {/* IMAGE */}
      <div className="aspect-video rounded-xl overflow-hidden mb-4">
        {event.poster ? (
          <img
            src={event.poster}
            alt={event.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
          }`}>
            <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              No Image
            </span>
          </div>
        )}
      </div>

      {/* STATUS BADGE */}
      <span
        className={`text-xs px-3 py-1 font-bold rounded-full ${
          event.status.toLowerCase() === 'ongoing'
            ? 'bg-yellow-400 text-black'
            : event.status.toLowerCase() === 'upcoming'
            ? 'bg-green-400 text-black'
            : 'bg-gray-400 text-black'
        }`}
      >
        {event.status.toUpperCase()}
      </span>

      {/* Days Until Event Badge (for upcoming events within a week) */}
      {isWithinWeek && (
        <span className="ml-2 text-xs px-3 py-1 font-bold rounded-full bg-blue-400 text-black">
          {daysUntil} days left!
        </span>
      )}

      <h3 className="text-xl font-semibold mt-3">{event.title}</h3>

      <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
        📅 {formatDate(event.startDate)}
        {event.endDate && event.endDate !== event.startDate && ` - ${formatDate(event.endDate)}`}
      </p>
      <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
        📍 {event.venue}
      </p>
      <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-600'}`}>
        🌐 Mode: {event.mode}
      </p>

      <p className={`text-sm mt-4 ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-700'}`}>
        {event.description}
      </p>

      {/* Category badge */}
      <div className="mt-3">
        <span className={`text-xs px-2 py-1 rounded-full ${
          theme === 'dark' ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'
        }`}>
          {event.category}
        </span>
      </div>

      {/* Register button */}
      {event.registrationLink && (
        <div className="flex justify-center mt-5">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            onClick={() => window.open(event.registrationLink, '_blank')}
            className={`px-6 py-2.5 font-semibold cursor-pointer ${
              theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
            }`}
          >
            Register Now 🚀
          </HoverBorderGradient>
        </div>
      )}
    </div>
  );
};

export default EventCard;