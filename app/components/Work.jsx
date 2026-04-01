// app/components/Work.jsx
"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3ENo Image%3C/text%3E%3C/svg%3E";

const getSafeSrc = (src) => {
  if (!src || src === "") {
    return PLACEHOLDER_IMAGE;
  }
  return src;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Work = ({ isDarkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const featuredProjects = workData.slice(0, 6);

  return (
    <motion.section
      id="work"
      className="w-full min-h-screen px-[6%] md:px-[8%] lg:px-[12%] py-16 md:py-20 scroll-mt-20 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-4">
            During My Studies
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-Ovo text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          During my studies, I have worked on several projects that allowed me
          to explore web development, mobile applications, and UI/UX design.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id || index}
            variants={cardVariants}
            className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-700"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image Container */}
            <div className="relative h-52 md:h-56 lg:h-60 overflow-hidden bg-gray-700">
              <Image
                src={getSafeSrc(project.image)}
                alt={project.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>

              {/* Quick Actions Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur text-gray-900 p-2 rounded-full hover:bg-white hover:scale-110 transition-all"
                    onClick={(e) => e.stopPropagation()}
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
                    className="bg-white/90 backdrop-blur text-gray-900 p-2 rounded-full hover:bg-white hover:scale-110 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-bold font-Ovo text-white mb-2 line-clamp-1">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-700 mt-auto">
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

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition-colors"
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        className="flex justify-center mt-12 md:mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          href="/more-projects"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <span>View All Projects</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Work;
