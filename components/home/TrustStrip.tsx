'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Paintbrush2, Smartphone, Timer, RefreshCw, Eye } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/motion/Reveal'

const POINTS = [
  { icon: Eye, label: 'Harga Transparan', sub: 'No hidden fees' },
  { icon: Paintbrush2, label: 'Desain 100% Custom', sub: 'Bukan template' },
  { icon: Smartphone, label: 'Mobile-First', sub: 'Semua ukuran layar' },
  { icon: Timer, label: 'Mulai 3 Hari', sub: 'Proses cepat' },
  { icon: RefreshCw, label: 'Garansi Revisi', sub: '2–3 revisi desain' },
  { icon: ShieldCheck, label: 'DP 50%', sub: 'Bayar setelah puas' },
]

export function TrustStrip() {
  return (
    <section className="py-10 bg-paper border-y border-line">
      <div className="container-px max-w-7xl mx-auto">
        <Reveal stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {POINTS.map((p) => {
            const Icon = p.icon
            return (
              <RevealItem key={p.label}>
                <motion.div
                  className="flex flex-col items-center text-center gap-2 p-4"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-tint flex items-center justify-center mb-1">
                    <Icon size={17} className="text-blue" />
                  </div>
                  <span className="text-sm font-semibold text-ink leading-tight">{p.label}</span>
                  <span className="text-xs text-muted">{p.sub}</span>
                </motion.div>
              </RevealItem>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
