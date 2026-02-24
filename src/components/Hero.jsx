import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="pt-24 pb-20 min-h-screen flex items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/30">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                <span className="text-sm font-medium text-brand">Welcome to my portfolio</span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Justice Friday Udo
            </motion.h1>

            {/* Role */}
            <motion.p variants={itemVariants} className="mt-4 text-xl sm:text-2xl font-semibold text-brand">
              Frontend Developer | React Specialist
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
            >
              I craft elegant, high-performance React applications with clean code and stunning UI. Passionate about solving problems, building seamless experiences, and collaborating with amazing teams.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="mt-10 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-brand">5+</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">100%</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Responsive Design</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">React</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Specialist</p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-brand text-white font-semibold rounded-lg hover:shadow-lg hover:opacity-90 transition">
                Explore My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 py-3 px-8 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand/5 transition">
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right Column - Decorative Element */}
          <motion.div variants={itemVariants} className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Gradient blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Card with stats */}
              <div className="relative bg-white/5 dark:bg-white/10 backdrop-blur-sm border border-brand/30 rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-semibold">Tech Stack</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Frontend</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React, JavaScript, Tailwind CSS, Bootstrap</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">State Management</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Redux, Context API, Zustand</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Backend Integration</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">REST APIs, Fetch API, Async/Await</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400">Always learning & evolving</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  )
}
