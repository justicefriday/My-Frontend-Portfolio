import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'] },
    { category: 'State Management', items: ['Redux', 'Context API', 'Zustand', 'State Hooks'] },
    { category: 'Backend Integration', items: ['REST APIs', 'Fetch API', 'Async/Await', 'Data Handling'] },
    { category: 'Tools & Practices', items: ['Git', 'Component Architecture', 'Testing', 'Accessibility (A11Y)'] }
  ]

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="card">
          <h3 className="text-xl font-semibold text-brand mb-4">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I'm a passionate frontend developer who builds beautiful, performant, and accessible web applications. With expertise in modern React, state management, and API integration, I create seamless user experiences that bridge design and functionality.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I excel at collaborating with backend developers to integrate complex APIs, manage application state efficiently, and implement responsive designs that work flawlessly across all devices. My focus is on clean, maintainable code and exceptional user experience.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="card">
          <h3 className="text-xl font-semibold text-brand mb-4">What I Do Well</h3>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-brand text-lg mt-[-2px]">✓</span>
              <span><strong>Component Architecture:</strong> Build scalable, reusable components with clear separation of concerns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand text-lg mt-[-2px]">✓</span>
              <span><strong>State Management:</strong> Efficiently manage app state with Redux, Context API, and Zustand</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand text-lg mt-[-2px]">✓</span>
              <span><strong>API Integration:</strong> Connect to RESTful APIs, handle async data, and manage loading states</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand text-lg mt-[-2px]">✓</span>
              <span><strong>Responsive Design:</strong> Create mobile-first UIs with Tailwind CSS and Bootstrap</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="card">
            <h4 className="font-semibold text-brand mb-3">{skillGroup.category}</h4>
            <ul className="space-y-2">
              {skillGroup.items.map((item) => (
                <li key={item} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
