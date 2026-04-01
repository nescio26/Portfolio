// app/page.js
"use client";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  // Set dark mode to true by default and force it
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme - always dark mode
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // Keep dark mode applied if any changes occur
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, [isDarkMode]);

  return (
    <div className="bg-gray-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}
