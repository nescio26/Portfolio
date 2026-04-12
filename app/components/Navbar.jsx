// app/components/Navbar.jsx
"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#top", id: "top" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Project", href: "#work", id: "work" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavigation = (e, item) => {
    e.preventDefault();

    // If we're not on the homepage, navigate to homepage first
    if (pathname !== "/") {
      router.push("/");
      // Store the target section to scroll to after navigation
      sessionStorage.setItem("scrollTo", item.id);
      setIsMenuOpen(false);
      return;
    }

    // If we're on the homepage, scroll to the section
    const element = document.getElementById(item.id);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  // Handle scrolling after navigation to homepage
  useEffect(() => {
    const scrollToId = sessionStorage.getItem("scrollTo");
    if (scrollToId && pathname === "/") {
      const element = document.getElementById(scrollToId);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
      sessionStorage.removeItem("scrollTo");
    }
  }, [pathname]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Resume file path
  const resumePath = "/MuhammadSyahmi_Resume_without reference.pdf";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-[6%] md:px-[8%] lg:px-[12%] py-4 md:py-5">
        <div className="flex justify-between items-center">
          {/* Logo - Text Version */}
          <button
            onClick={handleLogoClick}
            className="group transition-all duration-300 focus:outline-none"
            aria-label="Go to home"
          >
            <div className="flex flex-col group cursor-pointer">
              <div className="flex items-baseline">
                <span
                  className={`text-2xl md:text-3xl font-black tracking-wide transition-all duration-500 ease-in-out group-hover:tracking-normal text-white group-hover:text-blue-400`}
                >
                  Syahmi Manaf
                </span>
                {/* The Signature Red Dot */}
                <span className="ml-1 w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full inline-block animate-pulse"></span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={(e) => handleNavigation(e, item)}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors relative group focus:outline-none"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Resume/CV Button */}
            <a
              href={resumePath}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-gray-200 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-gray-200 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-gray-200 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          ref={menuRef}
          initial={false}
          animate={
            isMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <ul className="flex flex-col gap-4 pt-6 pb-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={(e) => handleNavigation(e, item)}
                  className="block w-full text-left text-gray-300 hover:text-blue-400 font-medium transition-colors py-2"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Resume Button */}
          <div className="pt-2 pb-4">
            <a
              href={resumePath}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
