import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-transparent backdrop-blur"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold text-lg">Frontend Dev</a>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-brand transition">Home</a>
          <a href="#about" className="hover:text-brand transition">About</a>
          <a href="#skills" className="hover:text-brand transition">Skills</a>
          <a href="#projects" className="hover:text-brand transition">Projects</a>
          <a href="#contact" className="hover:text-brand transition">Contact</a>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="menu"
            onClick={() => setOpen(v => !v)}
            className="p-2 rounded-md bg-white/5 dark:bg-white/10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4">
            <a href="#home" onClick={() => setOpen(false)} className="block py-2">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="block py-2">About</a>
            <a href="#skills" onClick={() => setOpen(false)} className="block py-2">Skills</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block py-2">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block py-2">Contact</a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
