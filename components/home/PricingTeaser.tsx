import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/motion/Reveal'
import { LightDecor } from '@/components/motion/LightDecor'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ButtonLink } from '@/components/ui/Button'
import { waMessages } from '@/lib/site'

const ANCHORS = [
  { label: 'Landing Page', from: 'Mulai Rp 800.000', sub: 'Iklan & launch produk' },
  { label: 'Company Profile', from: 'Mulai Rp 1.500.000', sub: 'Profil bisnis profesional' },
  { label: 'E-Commerce', from: 'Mulai Rp 4.000.000', sub: 'Toko online penuh' },
  { label: 'Undangan Digital', from: 'Mulai Rp 150.000', sub: 'Elegan & mobile-friendly' },
]

export function PricingTeaser() {
  return (
    <section className="section-py bg-paper relative overflow-hidden">
      <LightDecor />
      <div className="container-px max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-12">
          <SectionLabel className="mb-5">Harga</SectionLabel>
          <h2 className="text-section-title text-ink mb-4">
            Harga jelas,<br />tanpa biaya tersembunyi
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Bayar 50% untuk mulai, sisanya saat launch. Tidak ada angka yang disembunyikan.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {ANCHORS.map((a) => (
            <RevealItem key={a.label}>
              <div className="bg-white rounded-card border border-line p-5 hover:border-blue hover:shadow-card transition-all duration-300">
                <p className="text-xs text-muted mb-1">{a.sub}</p>
                <h3 className="font-display font-bold text-ink mb-2 text-base">{a.label}</h3>
                <p className="text-sm font-semibold text-blue">{a.from}</p>
              </div>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink href="/pricing" variant="secondary" size="lg">
            Lihat semua harga
            <ArrowRight size={15} />
          </ButtonLink>
          <ButtonLink href={waMessages.pricing} target="_blank" rel="noopener noreferrer" size="lg">
            Konsultasi paket gratis
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
