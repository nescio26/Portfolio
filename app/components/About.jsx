// app/components/About.jsx
"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const About = ({ isDarkMode }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: (
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      skills: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Java",
        "PHP",
        "C++",
        "Python",
        "SQL",
      ],
    },
    {
      title: "Backend & Database",
      icon: (
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
            d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3"
          />
        </svg>
      ),
      skills: [
        "MongoDB",
        "MySQL",
        "Firebase",
        "Oracle Database",
        "RESTful APIs",
        "Supabase",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: (
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      skills: [
        "Visual Studio Code",
        "Android Studio",
        "Firebase",
        "MySQL",
        "XAMPP",
        "Figma",
        "Canva",
        "Wix",
        "Oracle Database",
      ],
    },
    {
      title: "Soft Skills",
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      skills: [
        "Time Management",
        "Communication",
        "Problem-Solving",
        "Critical Thinking",
        "Fast Learner",
      ],
    },
    {
      title: "Languages",
      icon: (
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
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
      skills: ["Bahasa Melayu (Proficient)", "English (Intermediate)"],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-900">
      <div className="w-full px-[6%] md:px-[8%] lg:px-[12%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-Ovo text-white mb-4">
            Get to <span className="gradient-text">Know Me</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
            I'm a passionate developer dedicated to creating meaningful digital
            experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left - About Text */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              I'm Muhammad Syahmi
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              A recent graduate with a passion for full-stack development and
              UI/UX design. During my studies, I've developed several projects
              that showcase my ability to create responsive, user-friendly
              applications.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm always eager to learn new technologies and take on challenging
              projects. My goal is to create digital solutions that are not only
              functional but also provide an exceptional user experience.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">syahmimnf01@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Malaysia</p>
              </div>
            </div>

            {/* Certificates Link */}
            <div className="mb-6">
              <Link
                href="/certificates"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group mb-4"
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>View My Certificates</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300"
              >
                Let's Connect
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <Link
                href="/certificates"
                className="group px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>View All Certificates</span>
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
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-lg bg-blue-900/30 text-blue-400">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {category.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: skillIndex * 0.02 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-blue-900/50 hover:text-blue-300 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
