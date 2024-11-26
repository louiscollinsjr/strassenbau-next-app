'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-200/30dark:bg-white/10  hover:bg-white/20 dark:bg-gray-800/10 dark:hover:bg-gray-800/20"
    >
      {currentTheme === 'dark' ? '🌞' : '🌙'}
    </button>
  )
}
