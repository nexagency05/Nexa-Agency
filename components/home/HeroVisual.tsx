'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'

const SHOWCASE = [
  { src: '/work/company-profile_premium.png', label: 'Company Profile' },
  { src: '/work/ecommerce_business.png', label: 'E-Commerce' },
  { src: '/work/landing_premium.png', label: 'Landing Page' },
]

export function HeroVisual() {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduced) return
    const t = setInterval(() => setActive((a) => (a + 1) % SHOWCASE.length), 3200)
    return () => clearInterval(t)
  }, [reduced])

  return (
    <motion.div
      className="relative w-full max-w-[520px] mx-auto"
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      {/* Floating wrapper */}
      <motion.div
        animate={reduced ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Glow under the frame */}
        <div
          className="absolute -inset-8 rounded-[40px] blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle at 50% 40%, rgba(41,121,255,0.35), transparent 70%)' }}
        />

        {/* Browser frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-ink-soft shadow-2xl shadow-blue/20">
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <div className="ml-3 flex-1 h-5 rounded-md bg-white/5 flex items-center px-3">
              <span className="blue-dot mr-2" style={{ width: 5, height: 5 }} />
              <span className="text-[10px] text-white/40 tracking-wide">nexaagency.id</span>
            </div>
          </div>

          {/* Screen */}
          <div className="relative aspect-[4/3] bg-paper">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={SHOWCASE[active].src}
                  alt={`Contoh karya — ${SHOWCASE[active].label}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Floating label pill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-full shadow-card px-4 py-2.5 flex items-center gap-2"
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <span className="blue-dot" style={{ width: 8, height: 8 }} />
            <span className="text-xs font-semibold text-ink">{SHOWCASE[active].label}</span>
          </motion.div>
        </AnimatePresence>

        {/* Floating stat card */}
        <motion.div
          className="absolute -top-5 -right-3 sm:-right-6 bg-ink border border-white/15 rounded-2xl px-4 py-3 shadow-xl"
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <p className="text-2xl font-display font-bold text-white leading-none">100%</p>
          <p className="text-[10px] text-white/50 mt-1 tracking-wide">custom design</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
