'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/motion/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { workItems, workCategories } from '@/lib/work'

const BLUR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='

// one representative (premium) build per category — distinct image each
const CATEGORY_CARDS = workCategories.map((cat) => {
  const items = workItems.filter((w) => w.category === cat.id)
  const hero = items.find((w) => w.tier === 'premium') ?? items[0]
  return {
    id: cat.id,
    label: cat.label,
    image: hero.image,
    count: items.length,
    href: `/work?category=${cat.id}`,
  }
})

export function WorkPreview() {
  return (
    <section className="section-py bg-paper relative overflow-hidden">
      <div
        className="absolute -top-24 left-0 w-[460px] h-[460px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(41,121,255,0.08), transparent 70%)' }}
      />
      <div className="container-px max-w-7xl mx-auto relative z-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            <SectionLabel className="mb-5">Contoh Karya</SectionLabel>
            <h2 className="text-section-title text-ink">
              Lihat contoh di setiap<br />
              <span className="text-blue">kategori layanan</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="flex items-center gap-2 text-blue font-medium text-sm hover:gap-3 transition-all group shrink-0"
          >
            Lihat semua karya
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <Reveal>
          <p className="text-sm text-muted mb-10 flex items-center gap-2">
            <span className="blue-dot" style={{ width: 5, height: 5 }} />
            Klik kategori untuk lihat contoh desainnya — sample builds, bukan proyek klien aktual.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORY_CARDS.map((card) => (
            <RevealItem key={card.id}>
              <Link href={card.href} className="group block" aria-label={`Lihat contoh ${card.label}`}>
                <motion.div
                  className="relative overflow-hidden rounded-card bg-ink border border-line hover:border-blue hover:shadow-card-hover transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={`Contoh desain ${card.label}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.07]"
                      placeholder="blur"
                      blurDataURL={BLUR}
                    />
                    {/* bottom gradient for label legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                    {/* hover arrow chip */}
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={15} className="text-ink" />
                    </span>
                    {/* label */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="blue-dot" style={{ width: 6, height: 6 }} />
                        <span className="text-[11px] text-white/60 font-medium tracking-wide">
                          {card.count} contoh
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-white text-base leading-tight">
                        {card.label}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </RevealItem>
          ))}

          {/* CTA tile to fill the 8th cell */}
          <RevealItem>
            <Link href="/work" className="group block h-full">
              <motion.div
                className="relative h-full min-h-[160px] flex flex-col justify-between rounded-card bg-blue text-white p-5 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 dot-grid-white opacity-30" />
                <span className="relative text-sm font-medium text-white/80">Galeri lengkap</span>
                <div className="relative">
                  <p className="font-display font-bold text-xl leading-tight mb-2">
                    Lihat semua<br />21 contoh
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                    Buka galeri
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.div>
            </Link>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
