import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harga',
  description:
    'Daftar harga jasa pembuatan website Nexa Agency Bandung. Paket Company Profile, E-Commerce, Landing Page, dan Web App dengan harga transparan. Mulai dari Rp 150.000.',
  alternates: { canonical: '/pricing' },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
