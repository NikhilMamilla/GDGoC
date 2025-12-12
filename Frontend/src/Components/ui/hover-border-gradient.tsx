"use client";
import React from "react";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}: {
    children: React.ReactNode;
    containerClassName?: string;
    className?: string;
    as?: React.ElementType;
    duration?: number;
    clockwise?: boolean;
} & React.HTMLAttributes<HTMLElement>) {
    return (
        <Tag
            className={`relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none ${containerClassName}`}
            {...props}
        >
            <span
                className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4285F4_0%,#0F9D58_50%,#F4B400_100%)]`}
            />
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 py-3 text-sm font-semibold backdrop-blur-3xl transition-all duration-300 ${className}`}
            >
                {children}
            </span>
        </Tag>
    );
}
