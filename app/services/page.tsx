import type { Metadata } from 'next'
import { Building2, ShoppingBag, Zap, BarChart3, UserCheck, Wallet, Heart, Check, MessageCircle } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal, RevealItem } from '@/components/motion/Reveal'
import { DarkSectionBg } from '@/components/motion/DarkSectionBg'
import { Process } from '@/components/sections/Process'
import { CTABand } from '@/components/sections/CTABand'
import { waMessages } from '@/lib/site'
import { pricingCategories } from '@/lib/pricing'

export const metadata: Metadata = {
  title: 'Layanan',
  description:
    'Jasa pembuatan website Bandung: Company Profile, E-Commerce, Landing Page, Sistem Inventori, Absensi, Keuangan, dan Undangan Digital. Harga transparan, desain custom.',
  alternates: { canonical: '/services' },
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'company-profile': Building2,
  ecommerce: ShoppingBag,
  'landing-page': Zap,
  inventory: BarChart3,
  attendance: UserCheck,
  finance: Wallet,
  wedding: Heart,
}

const GUARANTEES = [
  'Desain responsive untuk semua ukuran layar',
  'SEO-ready sejak hari pertama',
  'Integrasi tombol WhatsApp',
  'Bantuan setup domain & hosting',
  'Loading cepat & dioptimasi',
  'Sumber kode milik kamu sepenuhnya',
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink section-py pt-36 dot-grid-white relative overflow-hidden">
        <DarkSectionBg intensity="subtle" />
        <div className="container-px max-w-7xl mx-auto relative z-10">
          <Reveal className="max-w-2xl">
            <SectionLabel dark className="mb-6">Layanan</SectionLabel>
            <h1 className="text-section-title text-white mb-5">
              Satu studio,<br />
              <span className="text-blue">semua kebutuhanmu</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Dari website profil bisnis sampai sistem web app — kami bangun semuanya dari nol,
              custom sesuai kebutuhan, dengan harga yang jelas di depan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Guarantees strip */}
      <section className="bg-paper border-b border-line py-8">
        <div className="container-px max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {GUARANTEES.map((g) => (
              <div key={g} className="flex items-start gap-2">
                <Check size={14} className="text-blue mt-0.5 shrink-0" />
                <span className="text-xs text-muted">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-white">
        <div className="container-px max-w-7xl mx-auto space-y-20">
          {pricingCategories.map((cat, idx) => {
            const Icon = SERVICE_ICONS[cat.id] ?? Building2
            const isEven = idx % 2 === 0
            const starter = cat.tiers[0]

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Text block */}
                <Reveal className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="w-12 h-12 rounded-2xl bg-blue-tint flex items-center justify-center mb-5">
                    <Icon size={22} className="text-blue" />
                  </div>
                  <h2 className="text-card-title font-display font-bold text-ink mb-3">{cat.name}</h2>
                  <p className="text-muted leading-relaxed mb-6">{cat.tagline}</p>

                  <ul className="space-y-2 mb-8">
                    {cat.tiers[1].features.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check size={14} className="text-blue mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-sm font-semibold text-blue">{starter.priceDisplay}</span>
                    <span className="text-muted text-xs">—</span>
                    <span className="text-muted text-xs">3 paket tersedia</span>
                  </div>

                  <div className="flex gap-3 mt-6 flex-wrap">
                    <ButtonLink
                      href={waMessages.project}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="md"
                    >
                      <MessageCircle size={15} />
                      Mulai Proyek
                    </ButtonLink>
                    <ButtonLink href="/pricing" variant="secondary" size="md">
                      Lihat harga lengkap
                    </ButtonLink>
                  </div>
                </Reveal>

                {/* Tier cards */}
                <Reveal stagger className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {cat.tiers.map((tier) => (
                    <RevealItem key={tier.name}>
                      <div
                        className={`p-4 rounded-card border h-full flex flex-col ${
                          tier.highlight
                            ? 'bg-blue border-blue text-white'
                            : 'bg-paper border-line text-ink'
                        }`}
                      >
                        {tier.badge && (
                          <span className="text-xs font-bold px-2 py-0.5 bg-white/20 rounded-full mb-2 self-start">
                            {tier.badge}
                          </span>
                        )}
                        <span className={`text-xs font-semibold uppercase tracking-widest mb-1 ${tier.highlight ? 'text-white/70' : 'text-muted'}`}>
                          {tier.name}
                        </span>
                        <span className={`font-display font-bold text-lg mb-3 ${tier.highlight ? 'text-white' : 'text-ink'}`}>
                          {tier.priceDisplay}
                        </span>
                        <p className={`text-xs leading-relaxed flex-1 ${tier.highlight ? 'text-white/80' : 'text-muted'}`}>
                          {tier.keyBenefit}
                        </p>
                      </div>
                    </RevealItem>
                  ))}
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      <Process />
      <CTABand
        title="Ada yang ingin didiskusikan?"
        sub="Konsultasi gratis via WhatsApp. Kami respons dalam jam kerja 08.00–17.00 WIB."
        secondaryCta="Lihat Harga"
        secondaryHref="/pricing"
      />
    </>
  )
}
