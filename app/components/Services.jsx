'use client';

import { serviceData, assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      className="w-full min-h-screen px-[12%] py-10 scroll-mt-20 bg-gray-50 flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.h4
          className="text-lg text-gray-500 font-ovo mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          What I Offer
        </motion.h4>

        <motion.h2
          className="text-5xl font-bold font-Ovo text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          My Services
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl font-Ovo mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          I develop modern, user-friendly, and efficient digital solutions tailored to real-world needs. My skills include responsive web development, mobile app interfaces, and UI/UX design. I focus on creating clean, functional, and visually appealing products while continuously improving my technical abilities. My goal is to help businesses and individuals solve problems through practical, creative, and well-designed solutions.
        </motion.p>
      </div>

      {/* Service Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.article
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl p-6 flex flex-col items-start cursor-pointer hover:shadow-xl transition-transform duration-300 max-w-sm"
          >
            {/* Icon */}
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Image src={icon} alt={title} width={48} height={48} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              {description}
            </p>

            {/* Read More Link */}
            {link && (
              <a
                href={link}
                className="flex items-center gap-2 text-blue-600 hover:underline font-ovo text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
                <Image
                  src={assets.right_arrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </a>
            )}
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-20 border-t border-gray-300 w-3/4 mx-auto" />
    </motion.section>
  );
};

export default Services;
