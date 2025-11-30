'use client';

import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full min-h-screen px-[12%] py-20 scroll-mt-20 bg-gray-50 flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg text-gray-500 font-Ovo mb-2"
        >
          Introduction
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl font-bold font-Ovo text-gray-900"
        >
          About Me
        </motion.h2>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col lg:flex-row items-center gap-20"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-80 sm:w-96 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 -mt-12"
        >
          <Image
            src={assets.image_profile_2}
            alt="User profile picture"
            width={400}
            height={500}
            className="w-full h-full object-cover rounded-3xl"
            priority
          />
        </motion.div>

        {/* About Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex-1 flex flex-col"
        >
          <p className="mb-12 text-gray-700 font-Ovo text-lg sm:text-xl leading-relaxed max-w-3xl">
            I am a final-year IT student with hands-on experience in web and mobile application development.
            Skilled in Android (Java), Firebase, and front-end technologies, I enjoy building user-friendly systems
            that solve real-world problems. My projects, including <span className="font-semibold">PriceChecker</span>&nbsp;
            and <span className="font-semibold">Wanna Ordering System</span>, reflect my ability to combine clean UI/UX
            with practical functionality. I am eager to apply my skills in a professional setting and grow as a software developer.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
                className="border border-gray-200 rounded-xl p-6 cursor-pointer hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <Image src={icon} alt={title} width={24} height={24} className="w-6 h-6 mr-3" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 font-Ovo">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {String(description)
                    .split('\n')
                    .map((line, i) => (
                      <span key={i}>
                        {line.trim() !== '' ? `• ${line.replace('•', '').trim()}` : ''}
                        <br />
                      </span>
                    ))}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <div>
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="mb-6 text-gray-700 font-Ovo text-lg sm:text-xl"
            >
              Tools I Use
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out bg-white"
                  title={`Tool ${index + 1}`}
                >
                  <Image src={tool} alt={`Tool ${index + 1}`} width={32} height={32} className="w-6 sm:w-8" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Divider */}
      <div className="mt-20 border-t border-gray-300 w-3/4 mx-auto" />
    </motion.div>
  );
};

export default About;
