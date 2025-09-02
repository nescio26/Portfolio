'use client';

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

const Contact = () => {
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
    e.preventDefault(); // stop immediate submit
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

      // REQUIRED for Web3Forms
      formData.append("access_key", "c6b2c5ac-dc3e-44c1-9a1b-b6d579b8412a");

      // Optional niceties
      if (!formData.get("subject")) formData.append("subject", "New message from portfolio contact form");
      if (!formData.get("from_name")) formData.append("from_name", formData.get("name") || "Website Visitor");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("✅ Form submitted successfully. I’ll get back to you soon!");
        form.reset();
      } else {
        setResult(`❌ ${data.message || "Submission failed. Please try again."}`);
      }
    } catch {
      setResult("❌ Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full min-h-screen px-[12%] py-10 scroll-mt-20 bg-gray-50 flex flex-col items-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h4
          className="text-lg text-gray-500 font-ovo mb-2"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          Get In Touch
        </motion.h4>

        <motion.h2
          className="text-5xl font-bold font-Ovo text-gray-900"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-700 text-base sm:text-lg md:text-xl font-Ovo mb-8 leading-relaxed"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          Have a project in mind or just want to say hi? I’d love to hear from you!
          Fill out the form below or reach out via email or social media.
        </motion.p>
      </div>

      {/* Contact Form & Info */}
      <motion.div
        className="flex flex-col lg:flex-row gap-12 w-full"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleOpenConfirm}
          className="flex-1 flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg"
          variants={itemVariants}
        >
          {/* Honeypot (spam trap) — keep empty */}
          <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.005 }}
          />

          {/* Optional extras */}
          <input type="hidden" name="from_name" />
          <input type="hidden" name="subject" value="New message from portfolio contact form" />

          <motion.button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            whileHover={!sending ? { scale: 1.03 } : {}}
            whileTap={!sending ? { scale: 0.97 } : {}}
            className={`bg-black text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              sending ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
            variants={itemVariants}
          >
            {sending ? "Sending…" : "Send Message"}
          </motion.button>

          <motion.p
            aria-live="polite"
            className="text-sm text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: result ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {result}
          </motion.p>
        </motion.form>

        {/* Contact Info / Social Links */}
        <motion.div
          className="flex-1 flex flex-col justify-center gap-6 text-gray-700 font-Ovo"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold">Other Ways to Reach Me</h3>
          <p>
            Email:{" "}
            <a href="mailto:syahmimnf01@gmail.com" className="text-blue-600 hover:underline">
              syahmimnf01@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+60179632053" className="text-blue-600 hover:underline">
              +6017-9632053
            </a>
          </p>

          <div className="flex items-center gap-4 mt-4">
            <motion.a
              href="https://github.com/nescio26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-syahmi-796749274/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {confirmOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setConfirmOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="confirm-title"
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <h3 id="confirm-title" className="text-xl font-semibold text-gray-900 mb-2">
                Send this message?
              </h3>
              <p className="text-gray-600 mb-6">
                We’ll forward your message to the appropriate recipient.
              </p>
              <div className="flex justify-end gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setConfirmOpen(false)}
                  className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleConfirmSend}
                  className="px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800"
                >
                  Yes, send
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
