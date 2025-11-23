'use client';

import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const overlayVariants = {
  initial: { opacity: 0 },
  hover:   { opacity: 1 },
  active:  { opacity: 1 },
};

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleCardKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(index);
    }
  };

  return (
    <motion.section
      id="work"
      className="w-full min-h-screen px-[12%] py-10 scroll-mt-20 bg-white flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h4
          className="text-lg text-gray-500 font-Ovo mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          During My Studies
        </motion.h4>

        <motion.h2
          className="text-5xl font-bold font-Ovo text-gray-900"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl font-Ovo mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          During my studies, I have worked on several projects that allowed me to
          explore web development, mobile applications, and UI/UX design.
          These projects helped me strengthen my problem-solving skills and
          apply what I've learned in real-world scenarios. Below are some highlights.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {workData.map((project, index) => {
          const bg =
            typeof project.bgImage === 'string'
              ? project.bgImage
              : (project.bgImage?.src ?? '');

          const isActive = activeIndex === index;

          return (
            <motion.article
              key={index}
              variants={cardVariants}
              role="button"
              tabIndex={0}
              aria-pressed={isActive}
              onClick={() => handleCardClick(index)}
              onKeyDown={(e) => handleCardKeyDown(e, index)}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer outline-none"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Image */}
              <div
                className="w-full h-72 sm:h-80 lg:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
                aria-hidden
              />

              {/* Overlay (motion-animated) */}
              <motion.div
                className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-6"
                variants={overlayVariants}
                initial="initial"
                animate={isActive ? 'active' : 'initial'}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center font-Ovo">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-center leading-relaxed">{project.description}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-2 text-blue-300 underline text-sm sm:text-base font-medium hover:text-blue-200 transition-colors"
                    onClick={(e) => e.stopPropagation()} // prevent toggling card when link clicked
                  >
                    View Project
                    <Image src={assets.link} alt="link icon" width={16} height={16} />
                  </a>
                )}
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-12">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/more-projects"
            className="flex items-center gap-2 text-blue-600 underline font-medium border border-gray-300 rounded-full px-5 py-2 hover:bg-gray-100 hover:shadow-md transition-all duration-300"
          >
            View All Projects
            <Image src={assets.right_arrow_bold} alt="Right arrow" width={16} height={16} />
          </Link>
        </motion.div>
      </div>

      <div className="mt-20 border-t border-gray-300 w-3/4 mx-auto" />
    </motion.section>
  );
};

export default Work;