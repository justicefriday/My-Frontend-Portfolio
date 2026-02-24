import React, { useEffect, useState } from 'react'


const ThemeToggle = () => {
      const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])
  return (
      <>
    <button
      onClick={() => setDark(d => !d)}
      aria-label="Toggle theme"
      className="p-2 rounded-md bg-white/5 dark:bg-white/10"
    >
      {dark ? '🌙' : '☀️'}
    </button>
      </>
  )
}

export default ThemeToggle
