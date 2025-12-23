import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // Format: YYYY-MM-DD
  theme: 'dark' | 'light';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, theme }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerExpired = timeLeft.days <= 0 && timeLeft.hours <= 0 && 
                       timeLeft.minutes <= 0 && timeLeft.seconds <= 0;

  if (timerExpired) {
    return (
      <div className={`text-center py-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        <h3 className="text-xl font-bold">Event has started!</h3>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} text-center`}>
      <h3 className="text-lg font-semibold mb-4">Time until event:</h3>
      <div className="flex justify-center space-x-4">
        <div className={`flex flex-col items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <div className={`text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            {timeLeft.days}
          </div>
          <span className="text-sm mt-1">Days</span>
        </div>
        <div className={`flex flex-col items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <div className={`text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            {timeLeft.hours}
          </div>
          <span className="text-sm mt-1">Hours</span>
        </div>
        <div className={`flex flex-col items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <div className={`text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            {timeLeft.minutes}
          </div>
          <span className="text-sm mt-1">Mins</span>
        </div>
        <div className={`flex flex-col items-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          <div className={`text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            {timeLeft.seconds}
          </div>
          <span className="text-sm mt-1">Secs</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;