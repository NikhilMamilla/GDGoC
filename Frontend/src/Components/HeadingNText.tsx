import React from "react";
import { useTheme } from "../context/ThemeContext";

interface HeadingNTextProps {
  title: string;
  children?: React.ReactNode;
}

const HeadingNText: React.FC<HeadingNTextProps> = ({ title, children }) => {
  const { theme } = useTheme();

  return (
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl p-2 m-6 sm:m-10 font-bold tracking-wide bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center leading-tight break-words whitespace-normal">
        {title}
      </h2>
      {children && (
        <div className={`max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-gray-600'
          }`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default HeadingNText;