import React from 'react'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
      <>
          <div>
      <h2 className="text-2xl font-semibold mb-6">Live Projects</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Authentication App */}
        <motion.div whileHover={{ y: -6 }} className="card flex flex-col h-full overflow-hidden">
          <div className="h-40 w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
            <img src="/src/assets/auth.jpg" alt="Authentication App" className="w-full h-full object-cover" />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Authentication App</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Full-featured authentication system with user login, logout, protected routes, and a secure dashboard. Built with Zustand for state management.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">React</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Zustand</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Auth</span>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="text-sm py-2 px-3 bg-brand text-white rounded hover:opacity-90" href="https://auths-two.vercel.app/">Live Demo</a>
            <a className="text-sm py-2 px-3 border border-brand text-brand dark:border-brand dark:text-brand rounded hover:bg-brand hover:text-white" href="https://github.com/justicefriday/Auths">GitHub</a>
          </div>
        </motion.div>

        {/* Movie App */}
        <motion.div whileHover={{ y: -6 }} className="card flex flex-col h-full overflow-hidden">
          <div className="h-40 w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
            <img src="/src/assets/movie.jpg" alt="Movie App" className="w-full h-full object-cover" />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Movie App</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Search for movies in real-time using the Fetch API. Built with Context API for efficient state management and a responsive UI.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">React</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Context API</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Fetch API</span>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="text-sm py-2 px-3 bg-brand text-white rounded hover:opacity-90" href="https://justicefriday-movie-app.vercel.app/">Live Demo</a>
            <a className="text-sm py-2 px-3 border border-brand text-brand dark:border-brand dark:text-brand rounded hover:bg-brand hover:text-white" href="https://github.com/justicefriday/movie-app">GitHub</a>
          </div>
        </motion.div>

        {/* Student Filter */}
        <motion.div whileHover={{ y: -6 }} className="card flex flex-col h-full overflow-hidden">
          <div className="h-40 w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
            <img src="/src/assets/stuent.jpg" alt="Student Filter" className="w-full h-full object-cover" />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Student Filter</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Filter students by gender with an intuitive interface. Demonstrates Context state management for dynamic data filtering and display.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">React</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Context</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Filtering</span>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="text-sm py-2 px-3 bg-brand text-white rounded hover:opacity-90" href="https://my-school-jet.vercel.app/">Live Demo</a>
            <a className="text-sm py-2 px-3 border border-brand text-brand dark:border-brand dark:text-brand rounded hover:bg-brand hover:text-white" href="https://github.com/justicefriday/my-school">GitHub</a>
          </div>
        </motion.div>

        {/* Todo List */}
        <motion.div whileHover={{ y: -6 }} className="card flex flex-col h-full overflow-hidden">
          <div className="h-40 w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
            <img src="/src/assets/todo.jpg" alt="Todo List" className="w-full h-full object-cover" />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Todo List</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
            Fully-functional todo application with add, edit, and delete capabilities. Features persistent storage and a clean, intuitive interface.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">React</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Hooks</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Local Storage</span>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="text-sm py-2 px-3 bg-brand text-white rounded hover:opacity-90" href="https://justicefriday-todo-list.vercel.app/">Live Demo</a>
            <a className="text-sm py-2 px-3 border border-brand text-brand dark:border-brand dark:text-brand rounded hover:bg-brand hover:text-white" href="https://github.com/justicefriday/todo-list">GitHub</a>
          </div>
        </motion.div>

        {/* Shopping App */}
        <motion.div whileHover={{ y: -6 }} className="card flex flex-col h-full overflow-hidden">
          <div className="h-40 w-full rounded-lg overflow-hidden bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
            <img src="/src/assets/shoping.jpg" alt="Shopping App" className="w-full h-full object-cover" />
          </div>
          <h3 className="mt-4 font-semibold text-lg">Shopping App</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
            E-commerce application with add-to-cart functionality, checkout flow, and responsive design. Built with modern React patterns.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">React</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">E-commerce</span>
            <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">Responsive</span>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="text-sm py-2 px-3 bg-brand text-white rounded hover:opacity-90" href="https://justicefriday-e-commerce-app.vercel.app/">Live Demo</a>
            <a className="text-sm py-2 px-3 border border-brand text-brand dark:border-brand dark:text-brand rounded hover:bg-brand hover:text-white" href="https://github.com/justicefriday/e-commerce-app">GitHub</a>
          </div>
        </motion.div>

      </div>
    </div>
      </>
  )
}

export default Projects