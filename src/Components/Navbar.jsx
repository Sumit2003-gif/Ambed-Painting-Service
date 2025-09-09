import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// Nav items
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky w-full top-0 z-50 backdrop-blur-lg ${
        isScrolled ? "bg-[#2e2824]/95 shadow-lg" : "bg-[#2e2824]/80"
      } transition-all duration-300 py-[1.5%] text-white font-medium`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://bracketweb.com/ambedwp/wp-content/uploads/2022/04/logo-light.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex items-center space-x-8 ml-10 text-sm uppercase tracking-wide"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={item.path}
                    className={`group relative flex items-center px-3 py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-[#A47C68] font-semibold"
                        : "text-gray-300 hover:text-[#A47C68]"
                    }`}
                  >
                    {/* Decorative Bars */}
                    <span
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-between h-5"
                      aria-hidden="true"
                    >
                      <span
                        className={`block w-1 h-3 rounded-sm ${
                          isActive
                            ? "bg-[#A47C68]"
                            : "bg-transparent group-hover:bg-[#A47C68]"
                        }`}
                      ></span>
                      <span
                        className={`block w-1 h-3 rounded-sm ${
                          isActive
                            ? "bg-[#A47C68]"
                            : "bg-transparent group-hover:bg-[#A47C68]"
                        }`}
                      ></span>
                    </span>
                    <span className="ml-4">{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Search Icon */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="h-6 border-l border-gray-600"></div>
            <button className="text-white hover:text-[#A47C68] transition">
              <FaSearch />
            </button>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 space-y-3 bg-[#2e2824] text-sm overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block relative py-2 border-b border-gray-700 transition-colors duration-300 ${
                    isActive
                      ? "text-[#A47C68] font-semibold"
                      : "text-gray-300 hover:text-[#A47C68]"
                  }`}
                >
                  {/* Double bars for mobile */}
                  <span
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col justify-between h-5`}
                    aria-hidden="true"
                  >
                    <span
                      className={`block w-1 h-3 rounded-sm ${
                        isActive
                          ? "bg-[#A47C68]"
                          : "bg-transparent group-hover:bg-[#A47C68]"
                      }`}
                    ></span>
                    <span
                      className={`block w-1 h-3 rounded-sm ${
                        isActive
                          ? "bg-[#A47C68]"
                          : "bg-transparent group-hover:bg-[#A47C68]"
                      }`}
                    ></span>
                  </span>
                  <span className="ml-4">{item.name}</span>
                </Link>
              );
            })}

            {/* Search (mobile) */}
            <div className="pt-3 border-t border-gray-600 flex items-center justify-between">
              <span className="text-gray-400">Search</span>
              <button className="text-white hover:text-[#A47C68]">
                <FaSearch />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
