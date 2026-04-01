// app/certificates/page.js
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { certificatesData } from "@/assets/assets";
import Navbar from "../components/Navbar";

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3ECertificate%3C/text%3E%3C/svg%3E";

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
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function CertificatesPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (imageSrc) => {
    setImageErrors((prev) => ({ ...prev, [imageSrc]: true }));
  };

  const handleImageClick = (image) => {
    if (!imageErrors[image]) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <Navbar />

      {/* Certificates Section */}
      <section className="w-full px-[6%] md:px-[8%] lg:px-[12%] pt-28 md:pt-32 pb-12 md:pb-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h4
            className="text-blue-400 font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Professional Development
          </motion.h4>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-Ovo text-white mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            My <span className="gradient-text">Certificates</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Industry-recognized certifications demonstrating my commitment to
            continuous learning and professional growth in the tech industry.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {certificatesData.map((cert, index) => (
            <motion.article
              key={cert.id}
              variants={cardVariants}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-700"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Certificate Image - Clickable */}
              <div
                className="relative h-48 md:h-52 overflow-hidden bg-gray-700 cursor-pointer"
                onClick={() => handleImageClick(cert.image)}
              >
                <Image
                  src={getSafeSrc(cert.image)}
                  alt={cert.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={() => handleImageError(cert.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {cert.date}
                  </span>
                </div>

                {/* Click to View Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-lg flex items-center gap-2">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold font-Ovo text-white mb-1 line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-blue-400 text-sm font-medium mb-2">
                  {cert.issuer}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="bg-gray-700 text-gray-300 px-2 py-0.5 rounded text-xs font-medium">
                      +{cert.skills.length - 4}
                    </span>
                  )}
                </div>

                {/* View Certificate Button */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-700 mt-auto">
                  <button
                    onClick={() => handleImageClick(cert.image)}
                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm group/link"
                  >
                    <span>View Certificate</span>
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
                  </button>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      title="View Certificate Details"
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

      {/* Full View Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full h-full max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {imageErrors[selectedImage] ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg">
                  <div className="text-center p-4">
                    <svg
                      className="w-16 h-16 text-gray-600 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-500">Image not available</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={getSafeSrc(selectedImage)}
                  alt="Certificate full view"
                  fill
                  className="object-contain rounded-lg"
                  onError={() => handleImageError(selectedImage)}
                  priority
                />
              )}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/75 transition-colors"
                aria-label="Close modal"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
