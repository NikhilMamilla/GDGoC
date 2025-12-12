import { cn } from "../ui/utils";
import React from "react";

interface BackgroundGradientProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function BackgroundGradient({
  children,
  className,
  containerClassName,
}: BackgroundGradientProps) {
  return (
    <div className={cn("relative p-[1px] w-full rounded-2xl", containerClassName)}>
      {/* Outer gradient ring */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-70 
      bg-gradient-to-tr from-blue-500 via-green-500 to-red-500"
      />

      {/* Inner Card */}
      <div
        className={cn(
          "relative rounded-2xl h-full w-full bg-black/40 backdrop-blur-xl border border-white/10 p-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
