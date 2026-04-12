// app/gallery/[id]/page.js
"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";

// Placeholder image data URL
const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='16'%3ENo Image%3C/text%3E%3C/svg%3E";

const getSafeSrc = (src) => {
  if (!src || src === "") {
    return PLACEHOLDER_IMAGE;
  }
  return src;
};

const allProjectsData = [
  {
    id: 7,
    title: "PriceChecker Application & Web System",
    category: "Full Stack Development",
    description:
      "A mobile and web platform to compare product prices in real-time, featuring barcode scanning, price trend charts, festival price highlights, and an admin panel for product management.",
    technologies: [
      "Android Studio",
      "Java",
      "PHP",
      "JavaScript",
      "Firebase",
      "Firebase Storage",
    ],
    image: "/work-7.png",
    link: "https://github.com/yourusername/ecommerce-platform",
    github: "https://github.com/yourusername/ecommerce-platform",
    galleryImages: [
      "/work-19.png",
      "/work-18.png",
      "/work-17.png",
      "/work-16.png",
      "/work-15.png",
      "/work-14.png",
    ],
    features: [
      "Barcode Scanning",
      "Price Comparison",
      "Monthly Price Trend Charts",
      "Festival Price Highlighting",
      "User Profile Management",
      "Admin Panel",
      "Report Submission & Tracking",
      "Real-time Firestore Sync",
    ],
  },
  {
    id: 8,
    title: "Purchase Requisition System",
    category: "Full Stack Development",
    description:
      "A system to streamline and digitize procurement processes for businesses including Purchase Requisition, Approval Workflows, and Request Tracking.",
    technologies: ["HTML", "Firebase", "JavaScript", "CSS", "PHP"],
    image: "/work-13.png",
    link: "https://github.com/yourusername/task-app",
    github: "https://github.com/yourusername/task-app",
    galleryImages: [
      "/work-8.png",
      "/work-10.png",
      "/work-11.png",
      "/work-12.png",
    ],
    features: [
      "Real-time Dashboard",
      "Status Tracking",
      "Export Data in CSV and PDF",
      "Role-based Access Control",
    ],
  },
  {
    id: 9,
    title: "Flavorsome - Cooking Assistant",
    category: "UI/UX Design",
    description:
      "A comprehensive mobile app UI/UX design for a cooking assistant that helps users discover recipes, plan meals, manage grocery lists, and order ingredients seamlessly.",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
    ],
    image: "/work-5.png",
    link: "https://www.figma.com/proto/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME",
    github: "https://www.figma.com/file/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME",
    galleryImages: [
      "/work-21.png",
      "/work-20.png",
      "/work-22.png",
      "/work-23.png",
      "/work-24.png",
      "/work-25.png",
    ],
    features: [
      "Complete User Flow Design",
      "Interactive Prototype",
      "Design System & Component Library",
      "User Personas & Journey Mapping",
      "Wireframes & High-Fidelity Mockups",
      "Mobile-First Responsive Design",
      "Accessibility-Focused Design",
      "Design Documentation",
    ],
  },
  {
    id: 10,
    title: "Wanna Ordering System",
    category: "Full Stack Development",
    description:
      "A web-based ordering system for restaurants, featuring menu browsing, order tracking, and admin management tools.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: "/work-26.png",
    link: "https://github.com/yourusername/social-analytics",
    github: "https://github.com/yourusername/social-analytics",
    galleryImages: [],
    features: [
      "Complete User Flow Design",
      "Interactive Prototype",
      "Design System & Component Library",
      "User Personas & Journey Mapping",
      "Wireframes & High-Fidelity Mockups",
      "Mobile-First Responsive Design",
      "Accessibility-Focused Design",
      "Design Documentation",
    ],
  },
  {
    id: 11,
    title: "Portfolio Website",
    category: "Web Design & Development",
    description:
      "Responsive portfolio website with modern design, smooth animations and optimized performance.",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "Responsive Design",
    ],
    image: "/work-27.png",
    link: "https://portfolio-muhammad-syahmi.vercel.app/",
    github: "https://github.com/yourusername/portfolio",
    galleryImages: ["/work-40.png", "/work-41.png"],
    features: [
      "Responsive Modern UI",
      "Smooth Animations",
      "Project Showcase",
      "Mobile-First Layout",
    ],
  },
  {
    id: 12,
    title: "Production Planning System",
    category: "Full Stack Development",
    description:
      "A comprehensive Manufacturing Execution System designed to optimize production workflows. Includes Material Management, BOM, Load Planning, Work Orders, Production Tracking, Inventory Control, Reporting, and a real-time Dashboard.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase", "PHP"],
    image: "/work-38.png",
    link: "https://github.com/yourusername/pps-system",
    github: "https://github.com/yourusername/pps-system",
    galleryImages: [
      "/work-28.png",
      "/work-29.png",
      "/work-30.png",
      "/work-31.png",
      "/work-32.png",
      "/work-36.png",
      "/work-33.png",
    ],
    features: [
      "Material & Inventory Management",
      "Bill of Materials (BOM)",
      "Load & Capacity Planning",
      "Work Order Creation & Scheduling",
      "Real-time Production Tracking",
      "Comprehensive Reporting Module",
    ],
  },
  {
    id: 13,
    title: "NovaPOS - Restaurant POS System",
    category: "Full Stack Development",
    description:
      "A modern, full-stack Restaurant Point of Sale (POS) system designed to streamline restaurant operations, including order management, payment processing, and sales tracking. The system supports real-time order handling for dine-in and takeaway workflows, improving cashier efficiency and reducing operational errors. It also provides an admin dashboard for monitoring sales performance and managing system data.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Stripe",
      "JWT",
      "RESTful APIs",
    ],
    image: "/work-42.png",
    link: "https://github.com/yourusername/novapos",
    github: "https://github.com/yourusername/novapos",
    galleryImages: [
      "/work-42.png",
      "/work-43.png",
      "/work-44.png",
      "/work-45.png",
      "/work-46.png",
      "/work-47.png",
    ],
    features: [
      "Order Management",
      "Payment Processing",
      "Sales Tracking",
      "Real-time Order Handling",
      "Admin Dashboard",
      "Inventory Management",
    ],
  },
  {
    id: 14,
    title: "Nova Vet System - Veterinary Clinic Management System",
    category: "Full Stack Development",
    description:
      "A full-stack veterinary clinic management system for handling owner and pet records, visit scheduling, medical records, and real-time queue tracking. It features role-based access for Admin, Vet, and Staff, real-time updates via Socket.io, automated queue management, and an analytics dashboard for clinic performance insights.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Tailwind CSS",
      "JWT",
      "Zod",
      "Axios",
      "Recharts",
      "Zustand",
      "React Query",
      "RESTful APIs",
    ],
    image: "/work-48.png",
    link: "https://github.com/yourusername/nova-vet-system",
    github: "https://github.com/yourusername/nova-vet-system",
    galleryImages: [
      "/work-48.png",
      "/work-49.png",
      "/work-50.png",
      "/work-51.png",
      "/work-52.png",
      "/work-53.png",
      "/work-54.png",
    ],
    features: [
      "Role-based Authentication (Admin, Vet, Staff)",
      "Owner & Pet Management",
      "Visit Check-in & Queue System",
      "Real-time Queue Updates (Socket.io)",
      "Medical Records Management",
      "Prescription & File Attachments",
      "Analytics Dashboard",
      "Daily Queue Auto Reset (Cron Job)",
    ],
  },
];

export default function GalleryPage() {
  const params = useParams();
  const projectId = parseInt(params.id);
  const project = allProjectsData.find((p) => p.id === projectId);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <Link href="/more-projects" className="text-blue-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const handleImageError = (imageSrc) => {
    setImageErrors((prev) => ({ ...prev, [imageSrc]: true }));
  };

  if (!isClient) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading project...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="w-full px-[6%] md:px-[8%] lg:px-[12%] py-5 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
        <Navbar />
      </nav>

      {/* Project Header */}
      <section className="w-full px-[6%] md:px-[8%] lg:px-[12%] py-12 md:py-16">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Project Image */}
            <div className="lg:w-1/3 w-full">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl bg-gray-800">
                <Image
                  src={getSafeSrc(project.image)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  onError={() => handleImageError(project.image)}
                  priority
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="lg:w-2/3 w-full">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold font-Ovo text-white mb-4">
                {project.title}
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full text-sm font-medium hover:border-blue-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
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
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="w-full px-[6%] md:px-[8%] lg:px-[12%] py-12 md:py-16 bg-gray-800/50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-Ovo text-white mb-3">
                Project Gallery
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore screenshots and visuals from the {project.title} project
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {project.galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    setSelectedImage(image);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="relative h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden shadow-lg bg-gray-800">
                    <Image
                      src={getSafeSrc(image)}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(image)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="w-full px-[6%] md:px-[8%] lg:px-[12%] py-12">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/more-projects"
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
            Back to All Projects
          </Link>
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
              <Image
                src={getSafeSrc(selectedImage)}
                alt="Full view"
                fill
                className="object-contain rounded-lg"
                onError={() => handleImageError(selectedImage)}
                priority
              />
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
