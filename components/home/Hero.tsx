'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { SplitText } from '@/components/motion/SplitText'
import { ConstellationField } from '@/components/motion/ConstellationField'
import { AuroraGlow } from '@/components/motion/AuroraGlow'
import { HeroVisual } from '@/components/home/HeroVisual'
import { waMessages } from '@/lib/site'

type BezierEase = [number, number, number, number]
const EASE: BezierEase = [0.22, 1, 0.36, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: EASE },
})

export function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] bg-ink flex flex-col justify-center overflow-hidden">
      {/* Layered backgrounds: aurora depth + constellation motif + dot grid */}
      <AuroraGlow intensity="hero" />
      <ConstellationField density={1.1} interactive opacity={1} />
      <div className="absolute inset-0 dot-grid-white opacity-40 pointer-events-none" />
      {/* bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink to-transparent pointer-events-none" />

      <div className="container-px max-w-7xl mx-auto pt-32 pb-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium backdrop-blur-sm"
                style={{ background: 'rgba(41,121,255,0.12)', border: '1px solid rgba(41,121,255,0.28)' }}
              >
                <Sparkles size={13} className="text-blue" />
                <span className="text-blue tracking-wide">Studio Web Kreatif · Bandung</span>
              </span>
            </motion.div>

            {/* H1 with gradient accent word */}
            <h1 className="text-hero text-white mb-6 leading-[1.06]">
              <SplitText
                text={"Website yang\nbikin bisnismu"}
                className="block"
                as="span"
                delay={0.2}
              />
              <span className="clip-text-wrapper block">
                <motion.span
                  className="block"
                  initial={prefersReduced ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ delay: 0.42, duration: 0.75, ease: EASE }}
                  style={{
                    backgroundImage: 'linear-gradient(100deg, #2979FF 0%, #6BA5FF 60%, #2979FF 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  dilirik.
                </motion.span>
              </span>
            </h1>

            {/* Subhead */}
            <motion.p
              {...fadeUp(0.6)}
              className="text-lg md:text-xl text-white/65 max-w-xl leading-relaxed mb-9"
            >
              Desain custom, cepat, dan mobile-friendly — dengan harga yang jelas di depan.
              Untuk UMKM, brand lokal, dan bisnis yang ingin tampil serius.
            </motion.p>

            {/* CTAs — bold, no magnetic effect */}
            <motion.div {...fadeUp(0.72)} className="flex flex-col sm:flex-row gap-4">
              <ButtonLink
                href={waMessages.project}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="group shadow-lg shadow-blue/30"
              >
                Mulai Proyek
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </ButtonLink>
              <ButtonLink href="/pricing" variant="outline" size="lg">
                Lihat Harga
              </ButtonLink>
            </motion.div>

            {/* Micro-stats */}
            <motion.div {...fadeUp(0.86)} className="flex flex-wrap gap-x-8 gap-y-4 mt-12">
              {[
                { val: '7', label: 'jenis layanan' },
                { val: '3', label: 'hari mulai' },
                { val: '100%', label: 'desain custom' },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-bold text-white">{s.val}</span>
                  <span className="text-white/45 text-sm max-w-[72px] leading-tight">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: floating visual */}
          <div className="relative hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!prefersReduced && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
