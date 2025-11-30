// app/more-projects/page.js
'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
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

// Extended projects data - add your additional projects here
const moreProjectsData = [
  {
     id: 7,
    title: "PriceChecker Application & Web System",
    category: "Full Stack Development",
    description: "A mobile and web platform to compare product prices in real-time, featuring barcode scanning, price trend charts, festival price highlights, and an admin panel for product management.",
    technologies: ["Android Studio", "Visual Studio Code", "Java", "CSS", "HTML", "PHP", "JavaScript", "Firebase", "Firebase Storage"],
    image: "/work-7.png",
    link: "https://github.com/yourusername/ecommerce-platform",
    github: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 8,
    title: "Purchase Requisition System",
    category: "Full Stack Development",
    description: "A system to streamline and digitize procurement processes for businesses this include Purchase Requisition, Approval Workflows, and Request Tracking.",
    technologies: ["HTML", "Firebase", "JavaScript", "CSS", "PHP", "Visual Studio Code"],
    image: "/work-13.png",
    link: "https://github.com/yourusername/task-app",
    github: "https://github.com/yourusername/task-app"
  },
  {
    id: 9,
    title: "Flavorsome - Cooking Assistant",
    category: "UI/UX Design",
    description: "A comprehensive mobile app UI/UX design for a cooking assistant that helps users discover recipes, plan meals, manage grocery lists, and order ingredients seamlessly. You can click the demo link to view the interactive prototype on Figma.",
    technologies: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping", "Design System"],
    image: "/work-5.png",
    link: "https://www.figma.com/proto/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME?node-id=58-14&p=f&t=MjMRKZywz6RtajKZ-1&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=58%3A14",
    github: "https://github.com/yourusername/weather-dashboard"
  },
  {
    id: 10,
    title: "Wanna Ordering System",
    category: "Full Stack Development",
    description: "A web-based ordering system for restaurants, featuring menu browsing, order tracking, and admin management tools.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Xampp", "Visual Studio Code"],
    image: "/work-26.png",
    link: "https://github.com/yourusername/social-analytics",
    github: "https://github.com/yourusername/social-analytics"
  },
  {
    id: 11,
    title: "Portfolio Website",
    category: "Web Design & Development",
    description: "Responsive portfolio website with modern design, smooth animations and optimized performance.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Responsive Design"],
    image: "/work-27.png",
    link: "https://portfolio-muhammad-syahmi.vercel.app/",
    github: "https://github.com/yourusername/portfolio"
  },
   {
    id: 12,
    title: "Production Planning System",
    category: "Full Stack Development",
    description: "A comprehensive Manufacturing Execution System designed to optimize production workflows. Includes end-to-end planning features such as Material Management, BOM, Load Planning, Work Orders, Production Tracking, Inventory Control, Reporting, and a real-time Dashboard.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "PHP", "Visual Studio Code"],
    image: "/work-38.png",
    link: "https://github.com/yourusername/pps-system",
    github: "https://github.com/yourusername/pps-system"
  }
];

export default function MoreProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="w-full px-[8%] py-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <a href="#top">
                      <Image src={assets.logo} alt="Logo" className="w-40 cursor-pointer" />
                    </a>
          <Link 
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <Image src={assets.right_arrow_bold} alt="Back arrow" width={16} height={16} className="rotate-180" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="w-full px-[12%] py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h4
            className="text-lg text-gray-500 font-Ovo mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Complete Portfolio
          </motion.h4>

          <motion.h2
            className="text-5xl font-bold font-Ovo text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            All Projects
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl font-Ovo mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore my complete collection of projects showcasing various technologies and development approaches. 
            Each project represents unique challenges and learning opportunities in my development journey.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {moreProjectsData.map((project, index) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content - Using flex to push buttons to bottom */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-Ovo text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Spacer to push buttons to bottom */}
                <div className="flex-grow"></div>

                {/* Project Links - Now with 3 buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                  {/* Live Demo */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm"
                  >
                    <Image src={assets.link} alt="link icon" width={14} height={14} />
                    Demo
                  </a>

                  {/* Gallery - Now links to gallery page */}
                  <Link
                    href={`/gallery/${project.id}`}
                    className="flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Gallery
                  </Link>

                  {/* Code */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Image src={assets.right_arrow_bold} alt="Left arrow" width={16} height={16} className="rotate-180" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}