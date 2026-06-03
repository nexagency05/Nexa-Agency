'use client'

import { useReducedMotion } from 'framer-motion'

const ITEMS = [
  'Creative Website Developer',
  'Company Profile',
  'E-Commerce',
  'Landing Page',
  'Web App',
  'Undangan Digital',
  'Bandung',
  'Next.js',
  'Desain Custom',
  'Mobile-First',
  'Harga Transparan',
]

interface MarqueeProps {
  className?: string
  items?: string[]
  /** 'left' scrolls right→left (default); 'right' scrolls left→right */
  direction?: 'left' | 'right'
  /** seconds per loop — higher is slower */
  speed?: number
  /** muted = small grey labels; bold = larger ink labels */
  variant?: 'muted' | 'bold'
}

export function Marquee({
  className,
  items = ITEMS,
  direction = 'left',
  speed = 32,
  variant = 'muted',
}: MarqueeProps) {
  const prefersReduced = useReducedMotion()
  const doubled = [...items, ...items]

  const textCls =
    variant === 'bold'
      ? 'text-xl md:text-2xl font-display font-semibold text-ink'
      : 'text-sm font-medium tracking-widest uppercase text-muted'

  return (
    <div className={`overflow-hidden select-none ${className ?? ''}`} aria-hidden="true">
      <div
        className="marquee-track flex items-center gap-8 py-1"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
          animationPlayState: prefersReduced ? 'paused' : undefined,
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className={textCls}>{item}</span>
            <span className="blue-dot" style={variant === 'bold' ? { width: 8, height: 8 } : undefined} />
          </span>
        ))}
      </div>
    </div>
  )
}
