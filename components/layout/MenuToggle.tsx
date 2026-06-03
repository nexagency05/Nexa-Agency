'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MenuToggleProps {
  open: boolean
  onClick: () => void
  /** true = white lines (over dark bg), false = ink lines (over white header) */
  dark: boolean
}

const SPRING = { type: 'spring' as const, stiffness: 400, damping: 28 }

/**
 * Modern animated menu toggle: two rounded bars that pivot around a shared
 * centre, morphing cleanly between an offset hamburger and an X. Wrapped in a
 * pill button that lights up blue on hover.
 */
export function MenuToggle({ open, onClick, dark }: MenuToggleProps) {
  const line = dark ? '#FFFFFF' : '#0B0B0F'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Tutup menu' : 'Buka menu'}
      aria-expanded={open}
      className={cn(
        'md:hidden relative z-[60] grid place-items-center w-11 h-11 rounded-full border transition-colors duration-300 group',
        open || dark
          ? 'border-white/20 hover:border-blue hover:bg-white/5'
          : 'border-line hover:border-blue hover:bg-blue-tint'
      )}
    >
      <span className="relative block w-[22px] h-[14px]">
        <motion.span
          className="absolute left-0 w-full h-[2px] rounded-full origin-center group-hover:bg-blue"
          style={{ background: line, top: '50%', marginTop: -1 }}
          animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
          transition={SPRING}
        />
        <motion.span
          className="absolute left-0 w-full h-[2px] rounded-full origin-center group-hover:bg-blue"
          style={{ background: line, top: '50%', marginTop: -1 }}
          animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
          transition={SPRING}
        />
      </span>
    </button>
  )
}
