import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Team", "Events", "Contact Us"];

const PillNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    let mouseTimer: NodeJS.Timeout;
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
        className={`fixed top-5 left-5 z-[70] md:hidden transition-all duration-300 ${
          showNavbar || mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <HamburgerButton open={mobileMenuOpen} setOpen={toggleMobileMenu} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-zinc-950/90 backdrop-blur flex flex-col items-center justify-center md:hidden"
          >
            <ul className="space-y-8 text-2xl text-zinc-100 font-light">
              {navItems.map((label) => {
                const path =
                  label === "Home"
                    ? "/"
                    : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

                return (
                  <li key={label}>
                    <Link
                      to={path}
                      className="hover:text-cyan-400 transition"
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

const HamburgerButton = ({ open, setOpen }) => (
  <button
    aria-label={open ? "Close menu" : "Open menu"}
    className="w-12 h-12 flex flex-col justify-center items-center"
    onClick={setOpen}
  >
    <span
      className={`w-8 h-1 bg-white rounded transition-all ${
        open ? "rotate-45 translate-y-2" : ""
      }`}
    ></span>
    <span
      className={`w-8 h-1 bg-white rounded my-1 transition-all ${
        open ? "opacity-0" : ""
      }`}
    ></span>
    <span
      className={`w-8 h-1 bg-white rounded transition-all ${
        open ? "-rotate-45 -translate-y-2" : ""
      }`}
    ></span>
  </button>
);

const SlideTabs = () => {
  const location = useLocation();
  const tabRefs = useRef([]);
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
    <ul className="relative flex bg-zinc-900/70 backdrop-blur px-2 py-2 rounded-full space-x-1">
      {navItems.map((label, index) => {
        const path =
          label === "Home"
            ? "/"
            : `/${label.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <li
            key={label}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`relative z-10 px-5 uppercase flex items-center h-10 cursor-pointer ${
              activeLabel === label
                ? "text-white font-medium"
                : "text-zinc-400"
            }`}
          >
            <Link to={path}>{label}</Link>
          </li>
        );
      })}
      <Cursor position={position} />
    </ul>
  );
};

const Cursor = ({ position }) => (
  <motion.li
    animate={position}
    className="absolute h-10 bg-zinc-600/70 rounded-full"
  />
);

export default PillNavbar;
