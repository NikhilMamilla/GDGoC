import React, { useState, useEffect } from 'react';
import GoogleDevLogo from './GoogleDevLogo';
import { useTheme } from '../context/ThemeContext';

const Loader = ({ onLoadingComplete }) => {
    const { theme } = useTheme();
    const [displayText, setDisplayText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    const phrases = ['Loading innovation...', 'Learn • Connect • Grow....'];

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        let timeout;

        if (isTyping) {
            // Typing phase
            if (displayText.length < currentPhrase.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentPhrase.slice(0, displayText.length + 1));
                }, 100); // Type one character every 100ms
            } else {
                // Finished typing current phrase
                const isLastPhrase = phraseIndex === phrases.length - 1;

                if (isLastPhrase) {
                    // Last phrase - wait briefly then redirect directly (no fade)
                    timeout = setTimeout(() => {
                        onLoadingComplete();
                    }, 500); // Brief pause before transitioning
                } else {
                    // Not last phrase - start backspacing after a pause
                    timeout = setTimeout(() => {
                        setIsTyping(false);
                    }, 1000);
                }
            }
        } else {
            // Backspacing phase
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50); // Backspace faster than typing
            } else {
                // Finished backspacing, move to next phrase
                setPhraseIndex(phraseIndex + 1);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, phraseIndex, isTyping, onLoadingComplete]);

    return (
        <div
            style={{
                width: '100vw',
                height: '100dvh', // Modern mobile viewport fix
                backgroundColor: theme === 'dark' ? '#000000' : '#F7F3E9',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
                transition: 'background-color 0.3s ease'
            }}
        >
            <GoogleDevLogo size={200} />

            <h1 style={{
                color: theme === 'dark' ? '#F9FAFB' : '#1A1A1A',
                fontFamily: 'Poppins, sans-serif',
                marginTop: '20px',
                fontSize: '1.5rem',
                fontWeight: '600',
                minHeight: '2rem',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.3s ease'
            }}>
                {displayText}
                <span style={{
                    animation: 'blink 1s infinite',
                    marginLeft: '2px'
                }}>|</span>
            </h1>

            <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default Loader;
