'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    if (typeof window === 'undefined') return

    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovered(!!target.closest('a, button, [role="button"], input, select, textarea'))
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', over, { passive: true })
    document.documentElement.classList.add('cursor-none')

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] top-0 left-0"
      animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovered ? 2.5 : 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.3 }}
    >
      <div
        className="rounded-full bg-blue transition-opacity"
        style={{ width: 12, height: 12, opacity: hovered ? 0.6 : 1 }}
      />
    </motion.div>
  )
}
