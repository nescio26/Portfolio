// app/components/Services.jsx
"use client";

import { serviceData, assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Services = ({ isDarkMode }) => {
  return (
    <motion.section
      id="services"
      className="w-full min-h-screen px-[6%] md:px-[8%] lg:px-[12%] py-16 md:py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-800/50 flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Section Heading */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            What I Offer
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-Ovo text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          My <span className="gradient-text">Services</span>
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I develop modern, user-friendly, and efficient digital solutions
          tailored to real-world needs. My skills include responsive web
          development, mobile app interfaces, and UI/UX design. I focus on
          creating clean, functional, and visually appealing products while
          continuously improving my technical abilities. My goal is to help
          businesses and individuals solve problems through practical, creative,
          and well-designed solutions.
        </motion.p>
      </div>

      {/* Service Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.article
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={getSafeSrc(icon)}
                alt={title}
                width={32}
                height={32}
                className="w-8 h-8 dark:brightness-110"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 flex-grow">
              {description}
            </p>

            {/* Read More Link */}
            {link && (
              <a
                href={link}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group/link transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Learn More</span>
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
              </a>
            )}
          </motion.article>
        ))}
      </motion.div>

      {/* Decorative Divider */}
      <div className="mt-16 md:mt-20 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
      </div>
    </motion.section>
  );
};

export default Services;
