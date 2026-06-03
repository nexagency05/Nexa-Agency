import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi Nexa Agency Bandung via WhatsApp, Email, atau Instagram. Konsultasi gratis, respons 08.00–17.00 WIB.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
