import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { MobileWhatsApp } from '@/components/layout/MobileWhatsApp'
import { CustomCursor } from '@/components/motion/CustomCursor'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'jasa pembuatan website Bandung',
    'web agency Bandung',
    'jasa website company profile',
    'buat website murah Bandung',
    'jasa landing page',
    'website toko online',
    'Nexa Agency',
    'web design Bandung',
  ],
  authors: [{ name: site.name, url: site.baseUrl }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: site.baseUrl,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-body antialiased">
        <LenisProvider>
          <CustomCursor />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <MobileWhatsApp />
        </LenisProvider>
      </body>
    </html>
  )
}
