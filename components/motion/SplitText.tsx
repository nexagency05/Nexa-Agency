'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { heroLineReveal, staggerContainer } from './variants'

interface SplitTextProps {
  text: string
  className?: string
  lineClassName?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function SplitText({
  text,
  className,
  lineClassName,
  delay = 0,
  as: Tag = 'h1',
}: SplitTextProps) {
  const prefersReduced = useReducedMotion()

  const lines = text.split('\n').filter(Boolean)

  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>
  }

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.h1

  return (
    <MotionTag
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {lines.map((line, i) => (
        <span key={i} className="clip-text-wrapper block">
          <motion.span
            className={`block ${lineClassName ?? ''}`}
            variants={heroLineReveal}
            transition={{ delay: delay + i * 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
