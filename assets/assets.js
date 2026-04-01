// assets/assets.js
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import link from "./link.png";
import circle_profile from "./circle_profile.jpg";
import long_profile from "./long_profile.jpg";
import profile_image from "./profile_image.jpg";
import image_profile_2 from "./image_profile_2.jpg";
import android from "./android.png";
import uiux_icon from "./uiux_icon.png";
import webdev from "./webdev.png";
import mobdev from "./mobdev.png";
import reactCourseCer from "./React_Course.png";
import uiCourseCer from "./UICer.png";
import uxCourseCer from "./UXCer.png";
import oracleCer from "./oracleDB.png";
import iverdiicCer from "./iverdiicCer.png";

export const assets = {
  android,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  link,
  circle_profile,
  uiux_icon,
  long_profile,
  profile_image,
  image_profile_2,
  webdev,
  mobdev,
  reactCourseCer,
  uiCourseCer,
  uxCourseCer,
  oracleCer,
  iverdiicCer,
};

export const workData = [
  {
    id: 13,
    title: "NovaPOS - Restaurant POS System",
    description:
      "A modern, full-stack Restaurant Point of Sale (POS) system designed to streamline restaurant operations, including order management, payment processing, and sales tracking. The system supports real-time order handling for dine-in and takeaway workflows, improving cashier efficiency and reducing operational errors.",
    category: "Full Stack Development",
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
    link: "https://nova-pos-delta.vercel.app/",
    github: "https://github.com/nescio26/NovaPos.git",
  },
  {
    id: 7,
    title: "PriceChecker Application",
    description:
      "A mobile and web platform to compare product prices in real-time, featuring barcode scanning, price trend charts, festival price highlights, and an admin panel for product management.",
    category: "Full Stack Development",
    technologies: [
      "Android Studio",
      "Java",
      "PHP",
      "JavaScript",
      "Firebase",
      "Firebase Storage",
    ],
    image: "/work-7.png",
    link: "https://github.com/nescio26/PriceChecker-App.git",
    github: "https://github.com/nescio26/PriceChecker-App.git",
  },
  {
    id: 9,
    title: "FlavorSome",
    description:
      "A comprehensive mobile app UI/UX design for a cooking assistant that helps users discover recipes, plan meals, manage grocery lists, and order ingredients seamlessly.",
    category: "UI/UX Design",
    technologies: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design System",
    ],
    image: "/work-5.png",
    link: "https://www.figma.com/proto/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME?node-id=58-14&p=f&t=kM5CSNZXNAr6CyJJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=58%3A14",
    github: "https://www.figma.com/file/z8Cc91940BEOAmEfIMQmkI/FLAVORSOME",
  },
];

export const serviceData = [
  {
    icon: webdev,
    title: "Web Development",
    description:
      "Building responsive and modern web applications using the latest technologies like React.js, Next.js, and Node.js.",
  },
  {
    icon: mobdev,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with great user experiences using Android Studio and Java.",
  },
  {
    icon: uiux_icon,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user interfaces that users love using Figma and modern design principles.",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript, C++, Java, SQL, PHP",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor in Information Technology (hons.)",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: `
• PriceChecker – Mobile App, Web App
• NovaPOS – Restaurant POS System
• FlavorSome – UI/UX Design (Figma)`,
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.figma,
  assets.android,
];

export const allProjectsData = [
  {
    id: 7,
    title: "PriceChecker Application & Web System",
    category: "Full Stack Development",
    description:
      "A mobile and web platform to compare product prices in real-time, featuring barcode scanning, price trend charts, festival price highlights, and an admin panel for product management.",
    technologies: [
      "Android Studio",
      "Visual Studio Code",
      "Java",
      "CSS",
      "HTML",
      "PHP",
      "JavaScript",
      "Firebase",
      "Firebase Storage",
    ],
    image: "/work-7.png",
    link: "https://github.com/yourusername/pricechecker",
    github: "https://github.com/yourusername/pricechecker",
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
    title: "E-Procurement Platform",
    category: "Full Stack Development",
    description:
      "A system to streamline and digitize procurement processes for businesses this include Purchase Requisition, Approval Workflows, and Request Tracking.",
    technologies: [
      "HTML",
      "Firebase",
      "JavaScript",
      "CSS",
      "PHP",
      "Visual Studio Code",
    ],
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
      "Design System",
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
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Xampp",
      "Visual Studio Code",
    ],
    image: "/work-26.png",
    link: "https://github.com/yourusername/social-analytics",
    github: "https://github.com/yourusername/social-analytics",
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
    link: "https://github.com/yourusername/social-analytics",
    github: "https://github.com/yourusername/social-analytics",
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
    title: "Production Planning System (MES)",
    category: "Full Stack Development",
    description:
      "A comprehensive Manufacturing Execution System designed to optimize production workflows. Includes end-to-end planning features such as Material Management, BOM, Load Planning, Work Orders, Production Tracking, Inventory Control, Reporting, and a real-time Dashboard.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "PHP",
      "Visual Studio Code",
    ],
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
];

export const certificatesData = [
  {
    title: "The Ultimate React Course",
    issuer: "Udemy",
    date: "2026",
    description:
      "A comprehensive, project-based React course covering modern React concepts, hooks, state management, and building real-world applications using industry-standard tools like React Query, Redux, and Next.js.",
    image: reactCourseCer,
    link: "https://www.udemy.com/certificate/UC-157ce22a-030a-40ef-8620-81bdf8e040d0/",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    id: 2,
    title: "Build Dynamic User Interfaces (UI) for Websites",
    issuer: "Google (Coursera)",
    date: "2025",
    description:
      "This course teaches how to design and build dynamic website user interfaces using UX design principles, including the full design thinking process (empathize, define, ideate, prototype, and test), along with planning site structure, applying common web layouts, and creating a complete project",
    image: uiCourseCer,
    link: "https://www.coursera.org/account/accomplishments/verify/T44WQQPTOD6F",
    skills: [
      "Information Architecture",
      "User Interface (UI) Design",
      "Web Design",
      "Figma",
      "Wireframing",
      "User Research",
      "Usability Testing",
      "Design Reviews",
      "User Experience (UX) Design",
      "User Flows",
      "Responsive Web Design",
      "Prototyping",
    ],
  },
  {
    id: 3,
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google (Coursera)",
    date: "2025",
    description:
      "This course introduces the fundamentals of UX design, covering user-centered design principles, accessibility, equity-focused design, the UX design process, design sprints, and the roles and responsibilities of entry-level UX designers.",
    image: uxCourseCer,
    link: "https://www.coursera.org/account/accomplishments/...",
    skills: [
      "Design Thinking",
      "Sprint Retrospectives",
      "User Interface (UI)",
      "User Experience (UX) Design",
      "User-Centered Design",
      "Usability",
      "User Personas",
      "User Research",
      "Wireframing",
      "Sprint Planning",
      "Mockups",
    ],
  },
  {
    id: 4,
    title: "Database Programming with SQL",
    issuer: "Oracle",
    date: "2024",
    description:
      "Completed an Oracle training program focused on SQL and PL/SQL, gaining practical knowledge in database querying, programming, performance tuning, and database administration to ensure efficient data management.",
    image: oracleCer,
    skills: [
      "SQL",
      "Database Administration",
      "Data Querying",
      "Database Architecture",
    ],
  },
  {
    id: 5,
    title: "Silver Award – Innovation Category",
    issuer: "Universiti Teknologi MARA",
    date: "October 2025",
    description:
      "Awarded at the International Virtual Educational Design, Invention & Innovation Competition (iVEDIIC 2025) for developing the PriceChecker App. Recognized for outstanding innovation in addressing real-world consumer challenges, the app effectively monitors and reports ceiling prices of raw cooking materials in Malaysia, demonstrating creativity, practical functionality, and societal impact.",
    category: "Innovation Award",
    project: "PriceChecker App",
    image: iverdiicCer,
    skills: [
      "Innovation",
      "App Development",
      "Problem Solving",
      "Data Monitoring",
      "Consumer Technology",
      "Practical Application",
      "Project Design",
    ],
  },
];
