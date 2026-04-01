// app/components/Contact.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const formRef = useRef(null);

  // ESC to close modal
  useEffect(() => {
    if (!confirmOpen) return;
    const onKey = (e) => e.key === "Escape" && setConfirmOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [confirmOpen]);

  const handleOpenConfirm = (e) => {
    e.preventDefault();
    if (sending) return;
    setConfirmOpen(true);
  };

  const handleConfirmSend = async () => {
    setConfirmOpen(false);
    setSending(true);
    setResult("Sending…");
    try {
      const form = formRef.current;
      const formData = new FormData(form);

      formData.append("access_key", "c6b2c5ac-dc3e-44c1-9a1b-b6d579b8412a");

      if (!formData.get("subject"))
        formData.append("subject", "New message from portfolio contact form");
      if (!formData.get("from_name"))
        formData.append("from_name", formData.get("name") || "Website Visitor");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("✅ Form submitted successfully! I'll get back to you soon!");
        form.reset();
      } else {
        setResult(
          `❌ ${data.message || "Submission failed. Please try again."}`,
        );
      }
    } catch {
      setResult(
        "❌ Network error. Please check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "syahmimnf01@gmail.com",
      href: "mailto:syahmimnf01@gmail.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "+6017-9632053",
      href: "tel:+60179632053",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "@nescio26",
      href: "https://github.com/nescio26",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Muhammad Syahmi",
      href: "https://www.linkedin.com/in/muhammad-syahmi-796749274/",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="w-full min-h-screen px-[6%] md:px-[8%] lg:px-[12%] py-16 md:py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-800/50 flex flex-col items-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-Ovo text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let's <span className="gradient-text">Connect</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to say hi? I'd love to hear from
          you! Fill out the form below or reach out via email or social media.
        </motion.p>
      </div>

      {/* Contact Form & Info */}
      <motion.div
        className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleOpenConfirm}
          className="flex-1 flex flex-col gap-5 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
          variants={itemVariants}
        >
          <input
            type="text"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Name *
            </label>
            <motion.input
              id="name"
              type="text"
              name="name"
              placeholder="Ali Baba"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              variants={itemVariants}
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Email *
            </label>
            <motion.input
              id="email"
              type="email"
              name="email"
              placeholder="Ali@example.com"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
              variants={itemVariants}
              whileFocus={{ scale: 1.01 }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Message *
            </label>
            <motion.textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none transition-all duration-300"
              variants={itemVariants}
              whileFocus={{ scale: 1.005 }}
            />
          </div>

          <input type="hidden" name="from_name" />
          <input
            type="hidden"
            name="subject"
            value="New message from portfolio contact form"
          />

          <motion.button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            whileHover={!sending ? { scale: 1.02 } : {}}
            whileTap={!sending ? { scale: 0.98 } : {}}
            className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              sending
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-lg hover:-translate-y-0.5"
            }`}
            variants={itemVariants}
          >
            {sending ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>

          <AnimatePresence>
            {result && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-sm p-3 rounded-lg ${
                  result.includes("✅")
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                }`}
              >
                {result}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          variants={itemVariants}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Other Ways to Reach Me
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {method.label}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {method.value}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
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
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) =>
              e.target === e.currentTarget && setConfirmOpen(false)
            }
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="confirm-title"
              className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl border border-gray-100 dark:border-gray-700"
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                id="confirm-title"
                className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2"
              >
                Send this message?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Your message will be sent directly to me. I'll get back to you
                as soon as possible.
              </p>
              <div className="flex justify-center gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setConfirmOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleConfirmSend}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transition-all"
                >
                  Yes, Send Message
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Contact;
