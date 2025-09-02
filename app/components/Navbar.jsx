import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen)
  }, [menuOpen])

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* Left: Logo */}
    <a href="#top">
  <Image src={assets.logo} alt="Logo" className="w- cursor-pointer w-40" />
</a>


        {/* Middle: Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-2 transition-all ${
          !isScroll && "bg-white/30 shadow-sm bg-opacity-50"
        }`}>
          <li><a className="font-ovo hover:text-gray-700 transition-colors" href="#top">Home</a></li>
          <li><a className="font-ovo hover:text-gray-700 transition-colors" href="#about">About Me</a></li>
          <li><a className="font-ovo hover:text-gray-700 transition-colors" href="#services">Services</a></li>
          <li><a className="font-ovo hover:text-gray-700 transition-colors" href="#work">My Work</a></li>
          <li><a className="font-ovo hover:text-gray-700 transition-colors" href="#contact">Contact Me</a></li>
        </ul>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
    

          {/* Contact Button (desktop only) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2 border border-gray-500 rounded-full font-ovo hover:bg-gray-100 transition-all"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open menu"
            className="block md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Image src={assets.menu_black} alt="Menu" className="w-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 h-screen w-72 sm:w-80 flex flex-col gap-6 py-24 px-8 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-500 ease-in-out ${
          menuOpen ? "right-0" : "-right-80"
        }`}
      >
        {/* Close Button */}
        <div
          role="button"
          aria-label="Close menu"
          className="absolute top-6 right-6"
          onClick={() => setMenuOpen(false)}
        >
          <Image src={assets.close_black} alt="Close Menu" className="w-6 cursor-pointer" />
        </div>

        <li><a className="font-ovo" href="#top" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a className="font-ovo" href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
        <li><a className="font-ovo" href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a className="font-ovo" href="#work" onClick={() => setMenuOpen(false)}>My Work</a></li>
        <li><a className="font-ovo" href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a></li>
      </ul>
    </>
  )
}

export default Navbar
