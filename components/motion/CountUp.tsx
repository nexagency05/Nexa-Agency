'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

interface CountUpProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function CountUp({ to, suffix = '', prefix = '', duration = 1.5, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!isInView) return
    if (prefersReduced) { setCount(to); return }

    const start = performance.now()
    const end = start + duration * 1000

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (end - start), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, to, duration, prefersReduced])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
