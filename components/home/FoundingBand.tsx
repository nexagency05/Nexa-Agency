'use client'

import { motion } from 'framer-motion'
import { Star, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { waMessages } from '@/lib/site'

export function FoundingBand() {
  return (
    <section className="section-py bg-blue-tint border-y border-blue/15">
      <div className="container-px max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            {/* Left */}
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-blue fill-blue" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-blue uppercase tracking-widest">
                  Founding Client Offer
                </span>
              </div>
              <h2 className="text-section-title text-ink mb-4">
                Kami baru mulai —<br />
                dan itu{' '}
                <span className="relative inline-block">
                  keuntunganmu
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-blue rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Klien pertama kami dapat perhatian penuh dari founder, harga perkenalan spesial,
                dan menjadi cerita sukses pertama Nexa. Slot sangat terbatas.{' '}
                {/* [CONFIRM: tentukan jumlah slot pasti, misal "Hanya 5 slot tersedia"] */}
              </p>
            </div>

            {/* Right: highlights */}
            <div className="flex flex-col gap-4 lg:min-w-[280px]">
              {[
                'Perhatian penuh dari founder',
                'Harga perkenalan spesial',
                'Prioritas revisi & support',
                'Jadi contoh karya pertama kami',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-ink">
                  <span className="blue-dot shrink-0" style={{ width: 7, height: 7 }} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
              <ButtonLink
                href={waMessages.founding}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-3 justify-center"
              >
                <MessageCircle size={16} />
                Daftar Jadi Founding Client
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
