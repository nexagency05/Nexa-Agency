'use client'

import { motion } from 'framer-motion'
import { Eye, Sparkles, Users, BadgeCheck } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/motion/Reveal'
import { LightDecor } from '@/components/motion/LightDecor'
import { SectionLabel } from '@/components/ui/SectionLabel'

const POINTS = [
  {
    icon: Eye,
    title: 'Harga terbuka, tanpa drama',
    desc: 'Semua harga ada di halaman Harga — tidak perlu "contact us dulu". Kamu tahu angkanya sebelum ngobrol.',
  },
  {
    icon: Sparkles,
    title: 'Baru mulai = kamu untung',
    desc: 'Tidak ada klien antrian panjang. Proyekmu dapat perhatian penuh, langsung ditangani founder.',
  },
  {
    icon: Users,
    title: 'Desain yang bikin beda',
    desc: 'Website ini sendiri adalah bukti. Tidak pakai template, tidak pakai stok foto, tidak generik.',
  },
  {
    icon: BadgeCheck,
    title: 'Proses yang diprediksi',
    desc: '4 langkah jelas, timeline tertulis, revisi dijamin. Tidak ada biaya kejutan di akhir.',
  },
]

export function WhyNexa() {
  return (
    <section className="section-py bg-white relative overflow-hidden">
      <LightDecor />
      <div className="container-px max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <Reveal>
              <SectionLabel className="mb-5">Kenapa Nexa?</SectionLabel>
              <h2 className="text-section-title text-ink mb-5">
                Baru mulai bukan<br />
                <span className="text-blue">kelemahan</span> — itu kelebihanmu
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Kebanyakan agensi bersaing lewat "harga termurah" dan klaim proyek ribuan. Kami tidak.
                Nexa baru — dan itu berarti kamu dapat fokus penuh, harga perkenalan, dan kualitas yang kami
                pertaruhkan reputasinya.
              </p>
            </Reveal>
          </div>

          {/* Right: grid */}
          <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {POINTS.map((p) => {
              const Icon = p.icon
              return (
                <RevealItem key={p.title}>
                  <motion.div
                    className="p-5 rounded-card bg-paper border border-line hover:border-blue transition-all duration-300 group"
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-tint flex items-center justify-center mb-3 group-hover:bg-blue transition-colors duration-300">
                      <Icon size={17} className="text-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-ink text-base mb-1.5">{p.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
                  </motion.div>
                </RevealItem>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
