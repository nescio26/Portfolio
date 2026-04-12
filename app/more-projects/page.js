// app/more-projects/page.js
"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Extended projects data
const moreProjectsData = [
  {
    id: 13,
    title: "NovaPOS - Restaurant POS System",
    category: "Full Stack Development",
    description:
      "A modern, full-stack Restaurant Point of Sale (POS) system designed to streamline restaurant operations, including order management, payment processing, and sales tracking. The system supports real-time order handling for dine-in and takeaway workflows, improving cashier efficiency and reducing operational errors. It also provides an admin dashboard for monitoring sales performance and managing system data.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Stripe",
      "JWT",
      "RESTful APIs",
    ],
    image: "/work-42.png",
    link: "https://nova-pos-delta.vercel.app/",
    github: "https://github.com/nescio26/NovaPos.git",
  },
  {
    id: 14,
    title: "PawCare - Veterinary Clinic Management System",
    category: "Full Stack Development",
    description:
      "A full-stack MERN application for managing veterinary clinic operations including owner and pet management, visit scheduling, medical records, and live queue system. Features role-based authentication, real-time updates using Socket.io, and automated queue handling for improved clinic workflow efficiency. The system also includes an analytics dashboard for visualizing clinic performance and insights.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Socket.io",
      "JWT",
      "RESTful APIs",
    ],
    image: "/work-48.png",
    link: "https://paw-care-sigma.vercel.app/",
    github: "https://github.com/nescio26/PawCare",
  },
  {
    id: 7,
    title: "PriceChecker Application & Web System",
    category: "Full Stack Development",
    description:
      "A mobile and web platform to compare product prices in real-time, featuring barcode scanning, price trend charts, festival price highlights, and an admin panel for product management.",
    technologies: [
      "Android Studio",
      "Java",
      "PHP",
      "JavaScript",
      "Firebase",
      "Firebase Storage",
    ],
    image: "/work-7.png",
    link: "https://github.com/yourusername/ecommerce-platform",
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 8,
    title: "Purchase Requisition System",
    category: "Full Stack Development",
    description:
      "A system to streamline and digitize procurement processes for businesses including Purchase Requisition, Approval Workflows, and Request Tracking.",
    technologies: ["HTML", "Firebase", "JavaScript", "CSS", "PHP"],
    image: "/work-13.png",
    link: "https://github.com/yourusername/task-app",
    github: "https://github.com/yourusername/task-app",
  },
  {
    id: 9,
    title: "Flavorsome - Cooking Assistant",
    category: "UI/UX Design",
    description:
      "A comprehensive mobile app UI/UX design for a cooking assistant that helps users discover recipes, plan meals, manage grocery lists, and order ingredients seamlessly.",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
    ],
    image: "/work-5.png",
    link: "https://www.figma.com/proto/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME",
    github: "https://www.figma.com/file/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME",
  },
  {
    id: 10,
    title: "Wanna Ordering System",
    category: "Full Stack Development",
    description:
      "A web-based ordering system for restaurants, featuring menu browsing, order tracking, and admin management tools.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/work-26.png",
    link: "https://github.com/yourusername/social-analytics",
    github: "https://github.com/yourusername/social-analytics",
  },
  {
    id: 11,
    title: "Portfolio Website",
    category: "Web Design & Development",
    description:
      "Responsive portfolio website with modern design, smooth animations and optimized performance.",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Responsive Design",
    ],
    image: "/work-27.png",
    link: "https://portfolio-muhammad-syahmi.vercel.app/",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 12,
    title: "Production Planning System",
    category: "Full Stack Development",
    description:
      "A comprehensive Manufacturing Execution System designed to optimize production workflows. Includes Material Management, BOM, Load Planning, Work Orders, Production Tracking, Inventory Control, Reporting, and a real-time Dashboard.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "PHP"],
    image: "/work-38.png",
    link: "https://github.com/yourusername/pps-system",
    github: "https://github.com/yourusername/pps-system",
  },
];

export default function MoreProjectsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Full Stack Development",
    "UI/UX Design",
    "Web Design & Development",
  ];

  const filteredProjects =
    filter === "All"
      ? moreProjectsData
      : moreProjectsData.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Projects Section */}
      <section className="w-full px-[6%] md:px-[8%] lg:px-[12%] pt-28 md:pt-32 pb-12 md:pb-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h4
            className="text-blue-400 font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Complete Portfolio
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-Ovo text-white mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            All <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my complete collection of projects showcasing various
            technologies and development approaches. Each project represents
            unique challenges and learning opportunities in my development
            journey.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          className="relative flex flex-col items-center mb-12 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Desktop: Show all buttons / Mobile: Show toggle button */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden w-full max-w-[280px]">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-medium shadow-lg active:scale-95 transition-all"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                {filter === "All" ? "Filter Projects" : filter}
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Mobile Dropdown List */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 5, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute left-0 right-0 mt-2 mx-auto w-full max-w-[280px] bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl z-30"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setFilter(category);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-6 py-4 text-sm transition-colors border-b border-gray-700 last:border-none ${
                        filter === category
                          ? "text-blue-400 bg-gray-700/50 font-bold"
                          : "text-gray-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-700 bg-gray-800 hover:shadow-gray-900/50"
              whileHover={{ y: -4 }}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-52 overflow-hidden bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold font-Ovo mb-3 line-clamp-1 text-white">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4 line-clamp-3 text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex-grow"></div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <Link
                    href={`/gallery/${project.id}`}
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm group/link"
                  >
                    <span>View Details</span>
                    <svg
                      className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors text-gray-400 hover:text-blue-400"
                        title="Live Demo"
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors text-gray-400 hover:text-gray-200"
                        title="Source Code"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
