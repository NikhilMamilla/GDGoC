import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const navItems = ["Home", "About", "Team", "Events", "Contact Us"];

const PillNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (mobileMenuOpen) {
        setShowNavbar(true);
        return;
      }

      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  useEffect(() => {
    let mouseTimer: ReturnType<typeof setTimeout>;
    const handleMouseMove = () => {
      if (!mobileMenuOpen) {
        setShowNavbar(true);
        clearTimeout(mouseTimer);
        mouseTimer = setTimeout(() => {
          setShowNavbar(false);
        }, 2000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseTimer);
    };
  }, [mobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setShowNavbar(true);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[70] hidden md:block transition-all duration-300
        ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
      >
        <SlideTabs />
      </div>

      {/* Mobile Hamburger */}
      <div
        className={`fixed top-5 left-5 z-[70] md:hidden transition-all duration-300 ${showNavbar || mobileMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full"
          }`}
      >
        <HamburgerButton open={mobileMenuOpen} setOpen={toggleMobileMenu} theme={theme} />
      </div>

      {/* Mobile Theme Toggle */}
      <div
        className={`fixed top-5 right-5 z-[70] md:hidden transition-all duration-300 ${showNavbar || mobileMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full"
          }`}
      >
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full backdrop-blur transition-all ${theme === 'dark'
            ? 'bg-zinc-900/70 text-yellow-400'
            : 'bg-white/80 text-orange-500 shadow-lg'
            }`}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[60] backdrop-blur flex flex-col items-center justify-center md:hidden ${theme === 'dark' ? 'bg-zinc-950/90' : 'bg-white/95'
              }`}
          >
            <ul className={`space-y-8 text-2xl font-light text-center ${theme === 'dark' ? 'text-zinc-100' : 'text-gray-900'
              }`}>
              {navItems.map((label) => {
                const path =
                  label === "Home"
                    ? "/"
                    : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

                return (
                  <li key={label}>
                    <Link
                      to={path}
                      className={`transition ${theme === 'dark' ? 'hover:text-cyan-400' : 'hover:text-blue-500'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface HamburgerButtonProps {
  open: boolean;
  setOpen: () => void;
  theme: 'light' | 'dark';
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ open, setOpen, theme }) => (
  <button
    aria-label={open ? "Close menu" : "Open menu"}
    className="w-12 h-12 flex flex-col justify-center items-center"
    onClick={setOpen}
  >
    <span
      className={`w-8 h-1 rounded transition-all ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'
        } ${open ? "rotate-45 translate-y-2" : ""}`}
    ></span>
    <span
      className={`w-8 h-1 rounded my-1 transition-all ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'
        } ${open ? "opacity-0" : ""}`}
    ></span>
    <span
      className={`w-8 h-1 rounded transition-all ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'
        } ${open ? "-rotate-45 -translate-y-2" : ""}`}
    ></span>
  </button>
);

const SlideTabs = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const getLabelFromPath = (path: string) => {
    if (path === "/") return "Home";
    return (
      navItems.find(
        (label) => `/${label.toLowerCase().replace(/\s+/g, "-")}` === path
      ) || null
    );
  };

  const activeLabel = getLabelFromPath(location.pathname);

  useEffect(() => {
    const activeIndex = navItems.indexOf(activeLabel || "");
    const activeRef = tabRefs.current[activeIndex];

    if (activeRef) {
      setPosition({
        left: activeRef.offsetLeft,
        width: activeRef.offsetWidth,
        opacity: 1,
      });
    }
  }, [location.pathname, activeLabel]);

  return (
    <div className="flex items-center gap-3">
      <ul className={`relative flex backdrop-blur px-2 py-2 rounded-full space-x-1 transition-colors ${theme === 'dark' ? 'bg-zinc-900/70' : 'bg-white/80 shadow-lg'
        }`}>
        {navItems.map((label, index) => {
          const path =
            label === "Home"
              ? "/"
              : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

          return (
            <li
              key={label}
              ref={(el) => { if (el) tabRefs.current[index] = el }}
              className={`relative z-10 px-5 uppercase flex items-center h-10 cursor-pointer transition-colors ${activeLabel === label
                ? theme === 'dark' ? "text-white font-medium" : "text-gray-900 font-medium"
                : theme === 'dark' ? "text-zinc-400" : "text-gray-500"
                }`}
            >
              <Link to={path}>{label}</Link>
            </li>
          );
        })}
        <Cursor position={position} theme={theme} />
      </ul>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`p-3 rounded-full backdrop-blur transition-all ${theme === 'dark'
          ? 'bg-zinc-900/70 text-yellow-400 hover:bg-zinc-800'
          : 'bg-white/80 text-orange-500 hover:bg-gray-100 shadow-lg'
          }`}
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
      </button>
    </div>
  );
};

interface CursorProps {
  position: { left: number; width: number; opacity: number };
  theme: 'light' | 'dark';
}

const Cursor: React.FC<CursorProps> = ({ position, theme }) => (
  <motion.li
    animate={position}
    className={`absolute h-10 rounded-full transition-colors ${theme === 'dark' ? 'bg-zinc-600/70' : 'bg-blue-500/70'
      }`}
  />
);

export default PillNavbar;
