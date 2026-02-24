import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'HTML', 'CSS', 'JavaScript','Bootstrap', 'React', 'Redux', 'Zustand', 'Tailwind CSS', 'Git'
]

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s}
            whileHover={{ scale: 1.03 }}
            className="card flex flex-col items-start"
          >
            <div className="text-sm font-medium">{s}</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 mt-3 h-2 rounded-full overflow-hidden">
              <motion.div className="h-2 bg-brand rounded-full" initial={{ width: 0 }} animate={{ width: `${60 + i * 5}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
