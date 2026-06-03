'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, MessageCircle } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { DarkSectionBg } from '@/components/motion/DarkSectionBg'
import { CTABand } from '@/components/sections/CTABand'
import { workItems, workCategories, type WorkItem } from '@/lib/work'
import { waMessages } from '@/lib/site'

const ALL = { id: 'all' as const, label: 'Semua' }

type FilterId = 'all' | (typeof workCategories)[number]['id']

function Lightbox({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white"
        aria-label="Tutup"
      >
        <X size={28} />
      </button>
      <motion.div
        className="relative max-w-3xl w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-square rounded-card overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 768px" />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="text-white font-display font-bold text-lg">{item.title}</h3>
            <p className="text-white/50 text-sm mt-1">{item.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function WorkPage() {
  const [filter, setFilter] = useState<FilterId>('all')
  const [lightbox, setLightbox] = useState<WorkItem | null>(null)

  // deep-link support: /work?category=ecommerce pre-selects that filter
  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get('category')
    if (c && workCategories.some((w) => w.id === c)) {
      setFilter(c as FilterId)
    }
  }, [])

  const filtered =
    filter === 'all' ? workItems : workItems.filter((w) => w.category === filter)

  const tabs = [ALL, ...workCategories]

  return (
    <>
      {/* Hero */}
      <section className="bg-ink section-py pt-36 dot-grid-white relative overflow-hidden">
        <DarkSectionBg intensity="subtle" />
        <div className="container-px max-w-7xl mx-auto relative z-10">
          <Reveal className="max-w-2xl">
            <SectionLabel dark className="mb-6">Contoh Karya</SectionLabel>
            <h1 className="text-section-title text-white mb-5">
              Desain yang kami<br />
              <span className="text-blue">bangun di setiap kategori</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Semua desain di bawah adalah contoh karya (sample builds) yang menunjukkan kemampuan
              kami di tiap layanan. Bukan proyek klien aktual — karena kami baru mulai, dan itu
              berarti kamu bisa jadi cerita sukses pertama kami.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[60px] z-30 bg-white border-b border-line shadow-sm">
        <div className="container-px max-w-7xl mx-auto">
          <div className="flex gap-1.5 overflow-x-auto py-3" role="tablist" aria-label="Filter kategori">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id as FilterId)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                  filter === tab.id
                    ? 'bg-blue text-white'
                    : 'text-muted hover:text-ink hover:bg-paper'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-py bg-paper">
        <div className="container-px max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.button
                    className="group relative w-full overflow-hidden rounded-card bg-white border border-line hover:border-blue hover:shadow-card-hover transition-all duration-300 text-left"
                    onClick={() => setLightbox(item)}
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    aria-label={`Lihat ${item.title}`}
                  >
                    <div className="relative aspect-square overflow-hidden bg-paper">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn
                          size={24}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-blue-tint text-blue px-2 py-0.5 rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display font-bold text-sm text-ink">{item.title}</h3>
                      <p className="text-xs text-muted mt-1 line-clamp-2">{item.description}</p>
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Founding CTA */}
      <section className="section-py bg-blue-tint border-t border-blue/15">
        <div className="container-px max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-section-title text-ink mb-4">
              Mau jadi klien pertama kami?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-lg mx-auto">
              Desain-desain di atas adalah contoh kemampuan kami. Proyekmu bisa jadi karya nyata
              pertama Nexa — dengan perhatian penuh dan harga perkenalan.
            </p>
            <ButtonLink href={waMessages.founding} target="_blank" rel="noopener noreferrer" size="lg">
              <MessageCircle size={16} />
              Daftar Jadi Founding Client
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <CTABand />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </>
  )
}
