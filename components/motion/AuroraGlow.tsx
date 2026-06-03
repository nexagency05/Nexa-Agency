'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface AuroraGlowProps {
  className?: string
  /** 'hero' = larger, brighter; 'subtle' = quieter for bands */
  intensity?: 'hero' | 'subtle'
}

/**
 * Slow-breathing blue radial glows that drift behind dark sections — adds
 * depth and colour richness while staying strictly within the blue palette.
 */
export function AuroraGlow({ className, intensity = 'hero' }: AuroraGlowProps) {
  const reduced = useReducedMotion()
  const big = intensity === 'hero'

  const blobs = [
    {
      size: big ? 620 : 420,
      color: 'rgba(41,121,255,0.28)',
      top: '-12%',
      right: '-8%',
      dur: 18,
      drift: { x: [0, 40, 0], y: [0, 30, 0] },
    },
    {
      size: big ? 520 : 360,
      color: 'rgba(41,121,255,0.16)',
      bottom: '-18%',
      left: '-10%',
      dur: 22,
      drift: { x: [0, -30, 0], y: [0, -20, 0] },
    },
    {
      size: big ? 360 : 260,
      color: 'rgba(30,95,214,0.14)',
      top: '35%',
      left: '40%',
      dur: 26,
      drift: { x: [0, 24, 0], y: [0, -28, 0] },
    },
  ]

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`} aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            bottom: b.bottom,
            left: b.left,
            right: b.right,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
          }}
          animate={reduced ? undefined : { x: b.drift.x, y: b.drift.y }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
