// app/gallery/[id]/page.js
'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react'; // Add this import

// Your projects data - using all existing images
const allProjectsData = [
    {
    id: 7,
    title: "PriceChecker Application & Web System",
    category: "Full Stack Development",
    description: "A mobile and web platform to compare product prices in real-time, featuring barcode scanning, price trend charts, festival price highlights, and an admin panel for product management.",
    technologies: ["Android Studio", "Visual Studio Code", "Java", "CSS", "HTML", "PHP", "JavaScript", "Firebase", "Firebase Storage"],
    image: "/work-7.png",
    link: "https://github.com/yourusername/pricechecker",
    github: "https://github.com/yourusername/pricechecker",
    galleryImages: [
        "/work-20.png",
        "/work-19.png",
        "/work-18.png",
        "/work-17.png",
        "/work-16.png",
        "/work-15.png",
        "/work-14.png"


    ],
    features: [
        "Barcode Scanning",
        "Price Comparison",
        "Monthly Price Trend Charts",
        "Festival Price Highlighting",
        "User Profile Management",
        "Admin Panel",
        "Report Submission & Tracking",
        "Real-time Firestore Sync"
    ]
    },

  {
    id: 8,
    title: "E-Procurement Platform",
    category: "Full Stack Development",
    description: "A system to streamline and digitize procurement processes for businesses this include Purchase Requisition, Approval Workflows, and Request Tracking.",
    technologies: ["HTML", "Firebase", "JavaScript", "CSS", "PHP", "Visual Studio Code"],
    image: "/work-13.png",
    link: "https://github.com/yourusername/task-app",
    github: "https://github.com/yourusername/task-app",
    galleryImages: [
      "/work-8.png",
      "/work-10.png",
      "/work-11.png",
      "/work-12.png"
    ],
    features: [
      "Real-time Dashboard",
      "Status Tracking",
      "Export Data in CSV and PDF",
      "Role-based Access Control"
    ]
  },

  {
    id: 9,
    title: "Flavorsome - Cooking Assistant",
    category: "UI/UX Design",
    description: "A comprehensive mobile app UI/UX design for a cooking assistant that helps users discover recipes, plan meals, manage grocery lists, and order ingredients seamlessly.",
    technologies: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping", "Design System"],
    image: "/work-5.png",
    link: "https://www.figma.com/proto/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME",
    github: "https://www.figma.com/file/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME",
    galleryImages: [
      "/work-21.png", 
      "/work-20.png", 
      "/work-22.png", 
      "/work-23.png", 
      "/work-24.png", 
      "/work-25.png"  
    ],
    features: [
      "Complete User Flow Design",
      "Interactive Prototype",
      "Design System & Component Library",
      "User Personas & Journey Mapping",
      "Wireframes & High-Fidelity Mockups",
      "Mobile-First Responsive Design",
      "Accessibility-Focused Design",
      "Design Documentation"
    ]
  },
  {
    id: 10,
    title: "Wanna Ordering System",
    category: "Full Stack Development",
    description: "A web-based ordering system for restaurants, featuring menu browsing, order tracking, and admin management tools.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Xampp", "Visual Studio Code"],
    image: "/work-26.png",
    link: "https://github.com/yourusername/social-analytics",
    github: "https://github.com/yourusername/social-analytics",
    galleryImages: [
      "/work-21.png", 
      "/work-20.png", 
      "/work-22.png", 
      "/work-23.png", 
      "/work-24.png", 
      "/work-25.png"  
    ],
    features: [
      "Complete User Flow Design",
      "Interactive Prototype",
      "Design System & Component Library",
      "User Personas & Journey Mapping",
      "Wireframes & High-Fidelity Mockups",
      "Mobile-First Responsive Design",
      "Accessibility-Focused Design",
      "Design Documentation"
    ]
  },
   
   {
  id: 12,
  title: "Production Planning System (MES)",
  category: "Full Stack Development",
  description: "A comprehensive Manufacturing Execution System designed to optimize production workflows. Includes end-to-end planning features such as Material Management, BOM, Load Planning, Work Orders, Production Tracking, Inventory Control, Reporting, and a real-time Dashboard.",
  technologies: ["HTML", "CSS", "JavaScript", "Firebase", "PHP", "Visual Studio Code"],
  image: "/work-pps.png",
  link: "https://github.com/yourusername/pps-system",
  github: "https://github.com/yourusername/pps-system",
  galleryImages: [
      "/work-28.png", 
      "/work-29.png", 
      "/work-30.png", 
      "/work-31.png", 
      "/work-32.png", 
      "/work-36.png",
      "/work-33.png"
    ],
  features: [
    "Material & Inventory Management",
    "Bill of Materials (BOM)",
    "Load & Capacity Planning",
    "Work Order Creation & Scheduling",
    "Real-time Production Tracking",
    "Comprehensive Reporting Module"
  ]

  },

];

export default function GalleryPage() {
  const params = useParams();
  const projectId = parseInt(params.id);
  const project = allProjectsData.find(p => p.id === projectId);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/more-projects" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="w-full px-[12%] py-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-Ovo text-gray-900">
            Portfolio
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              href="/more-projects"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <Image 
                src={assets.right_arrow_bold} 
                alt="Back arrow" 
                width={16} 
                height={16} 
                className="rotate-180"
                style={{ width: '16px', height: '16px' }}
              />
              All Projects
            </Link>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <section className="w-full px-[12%] py-12 bg-gray-50">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Project Image */}
            <div className="lg:w-1/3">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="lg:w-2/3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold font-Ovo text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="w-full px-[12%] py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-Ovo text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore screenshots and visuals from the {project.title} project
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => {
                  setSelectedImage(image);
                  setIsModalOpen(true);
                }}
              >
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={`${project.title} - Screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Back to Projects */}
      <section className="w-full px-[12%] py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/more-projects"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg"
          >
            <Image 
              src={assets.right_arrow_bold} 
              alt="Back arrow" 
              width={16} 
              height={16} 
              className="rotate-180"
              style={{ width: '16px', height: '16px' }}
            />
            Back to All Projects
          </Link>
        </div>
      </section>

      {/* Full View Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" 
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full h-full max-w-5xl max-h-5xl p-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full view"
              fill
              className="object-contain"
            />
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
