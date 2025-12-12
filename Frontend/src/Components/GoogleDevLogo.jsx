import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const GoogleDevLogo = ({ size = 120 }) => {
    const { theme } = useTheme();
    const borderColor = theme === 'dark' ? '#1a1a1a' : '#F7F3E9';

    const colors = {
        red: "#EA4335",
        blue: "#4285F4",
        green: "#34A853",
        yellow: "#FBBC04",
    };

    // --- STYLES (Kept exactly as requested) ---
    const strokeProps = {
        strokeWidth: "16",
        strokeLinecap: "round",
        fill: "transparent",
    };

    const borderProps = {
        strokeWidth: "22",
        strokeLinecap: "round",
        fill: "transparent",
        stroke: borderColor
    };

    // --- ANIMATION CONFIGURATION ---
    const transition = {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.5
    };

    // --- VARIANTS ---

    // GROUP 1: BLUE & GREEN
    // Sequence: Draw First -> Hold -> Erase First
    const group1Variants = {
        animate: {
            pathLength: [0, 1, 1, 1, 0, 0],
            pathOffset: [0, 0, 0, 0, 1, 1],
            opacity: [0, 1, 1, 1, 0, 0], // 0 at start/end to hide dots
            transition: {
                ...transition,
                // 0.00 -> 0.15: Draw In
                // 0.15 -> 0.70: Hold (Waiting for G2 to draw & hold)
                // 0.70 -> 0.85: Erase Out
                // 0.85 -> 1.00: Wait (Waiting for G2 to erase)
                times: [0, 0.15, 0.3, 0.7, 0.85, 1]
            }
        }
    };

    // GROUP 2: RED & YELLOW
    // Sequence: Wait -> Draw Second -> Hold -> Wait -> Erase Second
    const group2Variants = {
        animate: {
            pathLength: [0, 0, 1, 1, 1, 0],
            pathOffset: [0, 0, 0, 0, 0, 1],
            opacity: [0, 0, 1, 1, 1, 0], // 0 at start/end to hide dots
            transition: {
                ...transition,
                // 0.00 -> 0.15: Wait (G1 drawing)
                // 0.15 -> 0.30: Draw In
                // 0.30 -> 0.70: Hold
                // 0.70 -> 0.85: Wait (G1 erasing)
                // 0.85 -> 1.00: Erase Out
                times: [0, 0.15, 0.3, 0.7, 0.85, 1]
            }
        }
    };

    // --- PATHS (Kept exactly as requested) ---
    const paths = {
        blue: "M 38 72 L 10 52",
        red: "M 10 48 L 38 28",
        green: "M 62 28 L 88 48",
        yellow: "M 88 52 L 62 72"
    };

    return (
        <motion.div
            style={{
                width: size,
                height: size,
                cursor: 'pointer',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }}
            >

                {/* --- LAYER 1: BOTTOM Z-INDEX --- */}

                {/* RED (Group 2) */}
                <motion.path
                    d={paths.red}
                    stroke={colors.red}
                    {...strokeProps}
                    variants={group2Variants}
                    animate="animate"
                />

                {/* YELLOW (Group 2) */}
                <motion.path
                    d={paths.yellow}
                    stroke={colors.yellow}
                    {...strokeProps}
                    variants={group2Variants}
                    animate="animate"
                />


                {/* --- LAYER 2: TOP Z-INDEX (With Borders) --- */}

                {/* BLUE (Group 1) */}
                <motion.path
                    d={paths.blue}
                    {...borderProps}
                    variants={group1Variants}
                    animate="animate"
                />
                <motion.path
                    d={paths.blue}
                    stroke={colors.blue}
                    {...strokeProps}
                    variants={group1Variants}
                    animate="animate"
                />

                {/* GREEN (Group 1) */}
                <motion.path
                    d={paths.green}
                    {...borderProps}
                    variants={group1Variants}
                    animate="animate"
                />
                <motion.path
                    d={paths.green}
                    stroke={colors.green}
                    {...strokeProps}
                    variants={group1Variants}
                    animate="animate"
                />

            </svg>
        </motion.div>
    );
};

export default GoogleDevLogo;
