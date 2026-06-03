import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustStrip } from '@/components/home/TrustStrip'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { WorkPreview } from '@/components/home/WorkPreview'
import { WhyNexa } from '@/components/home/WhyNexa'
import { Process } from '@/components/sections/Process'
import { PricingTeaser } from '@/components/home/PricingTeaser'
import { FoundingBand } from '@/components/home/FoundingBand'
import { FAQ } from '@/components/home/FAQ'
import { CTABand } from '@/components/sections/CTABand'
import { Marquee } from '@/components/motion/Marquee'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description:
    'Studio web kreatif di Bandung. Desain custom, cepat, dan mobile-friendly — dengan harga yang jelas di depan.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      {/* Single-line marquee, auto-scrolling left */}
      <Marquee
        direction="left"
        speed={36}
        variant="bold"
        className="py-5 bg-white border-b border-line"
      />
      <ServicesPreview />
      <WorkPreview />
      <WhyNexa />
      <Process />
      <PricingTeaser />
      <FoundingBand />
      <FAQ />
      <CTABand />
    </>
  )
}
