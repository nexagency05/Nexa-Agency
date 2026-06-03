'use client'

import { motion } from 'framer-motion'
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/motion/Reveal'
import { LightDecor } from '@/components/motion/LightDecor'
import { SectionLabel } from '@/components/ui/SectionLabel'

const STEPS = [
  {
    n: '01',
    icon: MessageSquare,
    title: 'Konsultasi',
    desc: 'Kita diskusi kebutuhanmu — jenis website, target pengguna, dan anggaran. Gratis, tanpa komitmen.',
    detail: 'Via WhatsApp / call',
  },
  {
    n: '02',
    icon: PenTool,
    title: 'Desain',
    desc: 'Kami buat desain mockup sesuai brand kamu. 2–3 revisi desain termasuk. Kamu approve sebelum coding dimulai.',
    detail: 'Mockup + revisi desain',
  },
  {
    n: '03',
    icon: Code2,
    title: 'Development',
    desc: 'Website dibangun dengan kode bersih, cepat, dan mobile-first. Tidak ada template — semua custom dari nol.',
    detail: 'Kode 100% custom',
  },
  {
    n: '04',
    icon: Rocket,
    title: 'Launch',
    desc: 'Testing menyeluruh, optimasi performa, lalu live! Kamu bayar 50% sisanya setelah puas dengan hasilnya.',
    detail: 'Bayar setelah puas',
  },
]

interface ProcessProps {
  dark?: boolean
}

export function Process({ dark = false }: ProcessProps) {
  return (
    <section className={`section-py relative overflow-hidden ${dark ? 'bg-ink-soft' : 'bg-paper'}`}>
      {!dark && <LightDecor />}
      <div className="container-px max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-14">
          <SectionLabel dark={dark} className="mb-5">Cara Kerja Kami</SectionLabel>
          <h2 className={`text-section-title ${dark ? 'text-white' : 'text-ink'}`}>
            Proses yang jelas,<br />
            <span className="text-blue">tanpa kejutan</span>
          </h2>
          <p className={`mt-4 text-lg max-w-xl mx-auto ${dark ? 'text-white/60' : 'text-muted'}`}>
            4 langkah dari obrolan pertama sampai website-mu live. DP 50% untuk mulai, sisanya saat launch.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <RevealItem key={step.n}>
                <motion.div
                  className={`relative p-6 rounded-card border h-full group transition-all duration-300 cursor-default ${
                    dark
                      ? 'bg-white/5 border-white/10 hover:border-blue/40 hover:bg-white/8'
                      : 'bg-white border-line hover:border-blue hover:shadow-card-hover'
                  }`}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Step number */}
                  <span className={`text-5xl font-display font-bold leading-none select-none mb-4 block ${
                    dark ? 'text-white/10' : 'text-line'
                  }`}>
                    {step.n}
                  </span>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-blue-tint flex items-center justify-center mb-4 group-hover:bg-blue transition-colors duration-300">
                    <Icon size={18} className="text-blue group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className={`text-lg font-display font-bold mb-2 ${dark ? 'text-white' : 'text-ink'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-white/50' : 'text-muted'}`}>
                    {step.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue">
                    <span className="blue-dot" style={{ width: 4, height: 4 }} />
                    {step.detail}
                  </span>
                </motion.div>
              </RevealItem>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
