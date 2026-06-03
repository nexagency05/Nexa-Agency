import { MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import { DarkSectionBg } from '@/components/motion/DarkSectionBg'
import { waMessages } from '@/lib/site'

interface CTABandProps {
  title?: string
  sub?: string
  cta?: string
  href?: string
  secondaryCta?: string
  secondaryHref?: string
}

export function CTABand({
  title = 'Siap bikin website?',
  sub = 'Konsultasi gratis, tanpa komitmen. Harga jelas di depan.',
  cta = 'Mulai Proyek via WhatsApp',
  href = waMessages.project,
  secondaryCta,
  secondaryHref,
}: CTABandProps) {
  return (
    <section className="bg-ink section-py relative overflow-hidden dot-grid-white">
      <DarkSectionBg intensity="subtle" density={0.9} />

      <div className="container-px max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="text-section-title text-white mb-4">{title}</h2>
          <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">{sub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href={href} target="_blank" rel="noopener noreferrer" size="lg">
              <MessageCircle size={18} />
              {cta}
            </ButtonLink>
            {secondaryCta && secondaryHref && (
              <ButtonLink href={secondaryHref} variant="outline" size="lg">
                {secondaryCta}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
