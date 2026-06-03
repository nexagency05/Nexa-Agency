import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karya',
  description:
    'Contoh karya desain website Nexa Agency: Company Profile, E-Commerce, Landing Page, Sistem Inventori, Absensi, Keuangan, dan Undangan Digital.',
  alternates: { canonical: '/work' },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
