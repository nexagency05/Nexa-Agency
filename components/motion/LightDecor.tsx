'use client'

import { motion, useReducedMotion } from 'framer-motion'

type Dot = { top?: string; bottom?: string; left?: string; right?: string; size: number; o: number; dur: number; delay: number }
type Ring = { top?: string; bottom?: string; left?: string; right?: string; size: number }
type Plus = { top?: string; bottom?: string; left?: string; right?: string }

const DOTS: Dot[] = [
  { top: '14%', left: '5%', size: 12, o: 0.5, dur: 5, delay: 0 },
  { top: '22%', right: '8%', size: 8, o: 0.35, dur: 6, delay: 0.6 },
  { top: '60%', left: '3%', size: 7, o: 0.3, dur: 5.5, delay: 1 },
  { bottom: '14%', right: '6%', size: 14, o: 0.45, dur: 6.5, delay: 0.3 },
  { bottom: '24%', left: '12%', size: 6, o: 0.25, dur: 5, delay: 1.4 },
  { top: '40%', right: '14%', size: 5, o: 0.3, dur: 4.5, delay: 0.9 },
]

const RINGS: Ring[] = [
  { top: '-40px', right: '8%', size: 150 },
  { bottom: '-50px', left: '4%', size: 110 },
]

const PLUSES: Plus[] = [
  { top: '30%', left: '18%' },
  { bottom: '30%', right: '20%' },
  { top: '18%', right: '30%' },
]

/**
 * Decorative layer for light (white / paper) sections — floating brand dots,
 * faint ring outlines and accent plus-marks so large whitespace doesn't read
 * as empty. Strictly blue/ink, very low contrast, reduced-motion safe.
 */
export function LightDecor({ className }: { className?: string }) {
  const reduced = useReducedMotion()

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`} aria-hidden="true">
      {/* ring outlines */}
      {RINGS.map((r, i) => (
        <div
          key={`r${i}`}
          className="absolute rounded-full border border-blue/10"
          style={{ width: r.size, height: r.size, top: r.top, bottom: r.bottom, left: r.left, right: r.right }}
        />
      ))}

      {/* plus marks */}
      {PLUSES.map((p, i) => (
        <span
          key={`p${i}`}
          className="absolute text-blue/15 text-lg font-light leading-none"
          style={{ top: p.top, bottom: p.bottom, left: p.left, right: p.right }}
        >
          +
        </span>
      ))}

      {/* floating dots */}
      {DOTS.map((d, i) => (
        <motion.span
          key={`d${i}`}
          className="absolute rounded-full bg-blue"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            bottom: d.bottom,
            left: d.left,
            right: d.right,
            opacity: d.o,
          }}
          animate={reduced ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}
    </div>
  )
}
