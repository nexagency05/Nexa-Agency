'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, RevealItem } from '@/components/motion/Reveal'
import { DarkSectionBg } from '@/components/motion/DarkSectionBg'
import { CTABand } from '@/components/sections/CTABand'
import { pricingCategories, maintenanceTiers, paymentTerms } from '@/lib/pricing'
import { waMessages } from '@/lib/site'

const CATEGORY_LABELS: Record<string, string> = {
  'company-profile': 'Company Profile',
  ecommerce: 'E-Commerce',
  'landing-page': 'Landing Page',
  inventory: 'Inventori',
  attendance: 'Absensi',
  finance: 'Keuangan',
  wedding: 'Undangan',
}

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id)
  const current = pricingCategories.find((c) => c.id === activeCategory)!

  return (
    <>
      {/* Hero */}
      <section className="bg-ink section-py pt-36 dot-grid-white relative overflow-hidden">
        <DarkSectionBg intensity="subtle" />
        <div className="container-px max-w-7xl mx-auto text-center relative z-10">
          <Reveal>
            <SectionLabel dark className="mb-6 mx-auto">Harga</SectionLabel>
            <h1 className="text-section-title text-white mb-5">
              Harga jelas,<br />
              <span className="text-blue">tanpa drama</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Pilih paket sesuai kebutuhan. DP 50% untuk mulai, sisanya saat launch.
              Tidak ada biaya yang disembunyikan.
            </p>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
            {paymentTerms.slice(0, 3).map((t) => (
              <div key={t} className="flex items-center gap-2 text-white/50 text-xs">
                <span className="blue-dot" style={{ width: 4, height: 4 }} />
                {t}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-[60px] z-30 bg-white border-b border-line shadow-sm">
        <div className="container-px max-w-7xl mx-auto">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide" role="tablist" aria-label="Kategori layanan">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-blue text-white'
                    : 'text-muted hover:text-ink hover:bg-paper'
                }`}
              >
                {CATEGORY_LABELS[cat.id]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active category pricing */}
      <section className="section-py bg-paper min-h-screen">
        <div className="container-px max-w-7xl mx-auto">
          <motion.div
            key={current.id}
            id={`panel-${current.id}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Reveal className="mb-10">
              <h2 className="text-section-title text-ink mb-3">{current.name}</h2>
              <p className="text-muted text-lg max-w-xl">{current.tagline}</p>
            </Reveal>

            <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {current.tiers.map((tier) => (
                <RevealItem key={tier.name}>
                  <motion.div
                    className={`relative flex flex-col rounded-card border p-7 h-full transition-all duration-300 ${
                      tier.highlight
                        ? 'bg-blue border-blue shadow-blue text-white'
                        : 'bg-white border-line hover:border-blue hover:shadow-card-hover'
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {tier.badge && (
                      <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${
                        tier.highlight ? 'bg-white text-blue' : 'bg-blue text-white'
                      }`}>
                        {tier.badge}
                      </span>
                    )}

                    <div className="mb-6">
                      <span className={`text-xs font-semibold uppercase tracking-widest block mb-1 ${
                        tier.highlight ? 'text-white/70' : 'text-muted'
                      }`}>
                        {tier.name}
                      </span>
                      <span className={`text-3xl font-display font-bold block mb-2 ${
                        tier.highlight ? 'text-white' : 'text-ink'
                      }`}>
                        {tier.priceDisplay}
                      </span>
                      <p className={`text-sm leading-relaxed ${
                        tier.highlight ? 'text-white/80' : 'text-muted'
                      }`}>
                        {tier.keyBenefit}
                      </p>
                    </div>

                    <ul className="space-y-3 flex-1 mb-8">
                      {tier.features.map((f) => (
                        <li key={f} className={`flex items-start gap-2.5 text-sm ${
                          tier.highlight ? 'text-white/90' : 'text-ink'
                        }`}>
                          <Check
                            size={14}
                            className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-white' : 'text-blue'}`}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <ButtonLink
                      href={`https://wa.me/6288290639426?text=${encodeURIComponent(
                        `Halo Nexa Agency, saya tertarik dengan paket ${tier.name} untuk ${current.name}. Bisa konsultasi dulu?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={tier.highlight ? 'outline' : 'primary'}
                      className={`justify-center ${!tier.highlight ? '' : 'border-white/30 hover:border-white/60'}`}
                    >
                      <MessageCircle size={15} />
                      Pilih Paket Ini
                    </ButtonLink>
                  </motion.div>
                </RevealItem>
              ))}
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="section-py bg-white">
        <div className="container-px max-w-7xl mx-auto">
          <Reveal className="mb-12">
            <SectionLabel className="mb-5">Maintenance Bulanan</SectionLabel>
            <h2 className="text-section-title text-ink mb-4">Jaga website tetap prima</h2>
            <p className="text-muted max-w-md">
              Website bukan sekadar "launch dan lupakan". Paket maintenance kami jaga performa,
              keamanan, dan konten selalu up-to-date.
            </p>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {maintenanceTiers.map((tier) => (
              <RevealItem key={tier.name}>
                <div className="bg-paper border border-line rounded-card p-6 hover:border-blue transition-all duration-300">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted block mb-1">{tier.name}</span>
                  <span className="text-xl font-display font-bold text-ink block mb-4">{tier.priceDisplay}</span>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted">
                        <Check size={13} className="text-blue mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Payment terms */}
      <section className="py-10 bg-paper border-t border-line">
        <div className="container-px max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-ink mb-5 text-lg">Syarat Pembayaran</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {paymentTerms.map((t) => (
              <div key={t} className="flex items-start gap-2.5 text-sm text-muted">
                <span className="blue-dot mt-1.5 shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Mau konsultasi dulu?"
        sub="Ceritakan kebutuhanmu — kami bantu pilih paket yang paling sesuai."
        cta="Konsultasi Paket via WhatsApp"
        href={waMessages.pricing}
      />
    </>
  )
}
