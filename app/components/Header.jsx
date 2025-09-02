import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header
  id="top"
  className="w-full min-h-screen flex flex-col justify-center items-center text-center px-5 lg:px-0 bg-gray-50 pt-20"
>
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <Image
          src={assets.circle_profile}
          alt="Profile"
          className="rounded-full w-40 sm:w-48 md:w-56 shadow-2xl hover:scale-105 transition-transform duration-500"
          width={240}
          height={240}
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.4 }}
        className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-2 font-Ovo text-gray-700"
      >
        Hi! I'm Muhammad Syahmi
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0, scale: 0.8 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        viewport={{ once: false, amount: 0.4 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-bold font-Ovo text-gray-900 mb-6 leading-tight"
      >
        Final-Year IT Student <span className="block">| Web & Mobile Developer</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl font-Ovo mb-8 leading-relaxed"
      >
        I am passionate about building digital solutions that are both visually appealing and highly functional.
        With experience in front-end, back-end, and mobile development, I strive to create user-centered applications
        that deliver real value.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          viewport={{ once: false, amount: 0.4 }}
          href="#contact"
          className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2 shadow-lg hover:bg-gray-900 transition-colors duration-300"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" width={16} height={16} className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          viewport={{ once: false, amount: 0.4 }}
          href="/Resume Muhammad Syahmi Bin Abd Manaf.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" width={16} height={16} className="w-4" />
        </motion.a>
      </div>

      <div className="mt-20 border-t border-gray-300 w-3/4 mx-auto" />
    </header>
  );
};

export default Header;
