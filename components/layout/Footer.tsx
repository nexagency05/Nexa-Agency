import Link from 'next/link'
import { MessageCircle, Mail, Instagram, MapPin, Clock } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ConstellationField } from '@/components/motion/ConstellationField'
import { site, waMessages } from '@/lib/site'

const NAV = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/services' },
  { label: 'Harga', href: '/pricing' },
  { label: 'Karya', href: '/work' },
  { label: 'Kontak', href: '/contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white dot-grid-white relative overflow-hidden">
      <ConstellationField density={0.7} interactive={false} opacity={0.6} />

      {/* Main footer */}
      <div className="section-py container-px max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-5">
            <Logo tone="dark" showTagline />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Studio web kreatif di Bandung. Kami bangun website yang menjual — bukan sekadar online.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Nexa Agency"
              className="text-white/40 hover:text-blue transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Nexa Agency"
              className="text-white/40 hover:text-blue transition-colors"
            >
              {/* TikTok icon as SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.06a8.16 8.16 0 0 0 4.77 1.52V7.14a4.85 4.85 0 0 1-1-.45z"/>
              </svg>
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              aria-label="Email Nexa Agency"
              className="text-white/40 hover:text-blue transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick nav */}
        <div>
          <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-5">
            Navigasi
          </h3>
          <ul className="space-y-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/50 hover:text-white text-sm transition-colors link-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white/80 uppercase tracking-widest mb-5">
            Kontak
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href={waMessages.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors group"
              >
                <MessageCircle size={16} className="mt-0.5 shrink-0 group-hover:text-blue transition-colors" />
                <span>{site.contact.whatsappDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors group"
              >
                <Mail size={16} className="mt-0.5 shrink-0 group-hover:text-blue transition-colors" />
                <span>{site.contact.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/40 text-sm">
              <Clock size={16} className="mt-0.5 shrink-0" />
              <span>{site.contact.responseHours}</span>
            </li>
            <li className="flex items-start gap-3 text-white/40 text-sm">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{site.contact.location}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 container-px max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        <p className="text-white/30 text-xs">
          © {year} {site.name}. Semua hak cipta dilindungi.
        </p>
        <div className="flex items-center gap-1 text-white/30 text-xs">
          <span className="blue-dot" style={{ width: 4, height: 4 }} />
          <span>Dibuat dengan sepenuh hati di Bandung</span>
        </div>
      </div>
    </footer>
  )
}
