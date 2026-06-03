export type WorkCategory =
  | 'company-profile'
  | 'ecommerce'
  | 'landing-page'
  | 'inventory'
  | 'attendance'
  | 'finance'
  | 'wedding'

export type WorkTier = 'starter' | 'business' | 'premium'

export type WorkItem = {
  id: string
  category: WorkCategory
  tier: WorkTier
  title: string
  description: string
  image: string
  tags: string[]
}

export const workCategories: { id: WorkCategory; label: string }[] = [
  { id: 'company-profile', label: 'Company Profile' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'landing-page', label: 'Landing Page' },
  { id: 'inventory', label: 'Inventori' },
  { id: 'attendance', label: 'Absensi' },
  { id: 'finance', label: 'Keuangan' },
  { id: 'wedding', label: 'Undangan' },
]

export const workItems: WorkItem[] = [
  // Company Profile
  {
    id: 'cp-starter',
    category: 'company-profile',
    tier: 'starter',
    title: 'Company Profile — Starter',
    description: 'Website profil bisnis 5 halaman dengan desain modern dan tombol WhatsApp.',
    image: '/work/company-profile_starter.png',
    tags: ['5 Halaman', 'WhatsApp', 'SEO Dasar', 'Mobile-Friendly'],
  },
  {
    id: 'cp-business',
    category: 'company-profile',
    tier: 'business',
    title: 'Company Profile — Business',
    description: 'Website 8 halaman dengan blog, testimoni, dan Google Analytics terintegrasi.',
    image: '/work/company-profile_business.png',
    tags: ['8 Halaman', 'Blog', 'Testimoni', 'Analytics'],
  },
  {
    id: 'cp-premium',
    category: 'company-profile',
    tier: 'premium',
    title: 'Company Profile — Premium',
    description: 'Website premium 12+ halaman dengan animasi dan SEO teknikal lengkap.',
    image: '/work/company-profile_premium.png',
    tags: ['12 Halaman', 'Animasi', 'SEO Teknikal', 'Cloudflare'],
  },
  // E-Commerce
  {
    id: 'eco-starter',
    category: 'ecommerce',
    tier: 'starter',
    title: 'E-Commerce — Starter',
    description: 'Toko online 30 produk dengan order via WhatsApp dan link marketplace.',
    image: '/work/ecommerce_starter.png',
    tags: ['30 Produk', 'Order WhatsApp', 'Shopee/Tokopedia'],
  },
  {
    id: 'eco-business',
    category: 'ecommerce',
    tier: 'business',
    title: 'E-Commerce — Business',
    description: 'Toko 100 produk dengan wishlist, rating, filter, dan feed Instagram.',
    image: '/work/ecommerce_business.png',
    tags: ['100 Produk', 'Wishlist', 'Rating', 'Instagram Feed'],
  },
  {
    id: 'eco-premium',
    category: 'ecommerce',
    tier: 'premium',
    title: 'E-Commerce — Premium',
    description: 'Toko unlimited produk dengan integrasi semua marketplace dan TikTok feed.',
    image: '/work/ecommerce_premium.png',
    tags: ['Unlimited Produk', 'Multi-Marketplace', 'TikTok Feed'],
  },
  // Landing Page
  {
    id: 'lp-starter',
    category: 'landing-page',
    tier: 'starter',
    title: 'Landing Page — Starter',
    description: 'Halaman konversi tunggal dengan CTA WhatsApp dan loading cepat.',
    image: '/work/landing_starter.png',
    tags: ['1 Halaman', 'CTA WhatsApp', 'Mobile-First'],
  },
  {
    id: 'lp-business',
    category: 'landing-page',
    tier: 'business',
    title: 'Landing Page — Business',
    description: 'Landing page dengan form lead, tracking GA, dan siap Pixel iklan.',
    image: '/work/landing_business.png',
    tags: ['Lead Form', 'Google Analytics', 'Meta Pixel'],
  },
  {
    id: 'lp-premium',
    category: 'landing-page',
    tier: 'premium',
    title: 'Landing Page — Premium',
    description: 'Landing page animasi premium dengan tracking konversi multi-platform.',
    image: '/work/landing_premium.png',
    tags: ['Animasi', 'Multi-Pixel', 'Scroll CTA'],
  },
  // Inventory
  {
    id: 'inv-starter',
    category: 'inventory',
    tier: 'starter',
    title: 'Sistem Inventori — Starter',
    description: 'Dashboard stok sederhana untuk satu pengguna, mobile-accessible.',
    image: '/work/inventory_starter.png',
    tags: ['Stok Masuk/Keluar', 'Dashboard', 'Single User'],
  },
  {
    id: 'inv-business',
    category: 'inventory',
    tier: 'business',
    title: 'Sistem Inventori — Business',
    description: 'Manajemen stok dengan supplier, peringatan, dan multi-user 3 akun.',
    image: '/work/inventory_business.png',
    tags: ['Supplier', 'Peringatan Stok', '3 User'],
  },
  {
    id: 'inv-premium',
    category: 'inventory',
    tier: 'premium',
    title: 'Sistem Inventori — Premium',
    description: 'Sistem multi-gudang dengan audit trail, ekspor, dan role-based access.',
    image: '/work/inventory_premium.png',
    tags: ['Multi-Gudang', 'Audit Trail', 'Export Excel/PDF'],
  },
  // Attendance
  {
    id: 'att-starter',
    category: 'attendance',
    tier: 'starter',
    title: 'Sistem Absensi — Starter',
    description: 'Absensi digital karyawan dengan dashboard admin dan rekap bulanan.',
    image: '/work/attendance_starter.png',
    tags: ['Check-In Digital', 'Dashboard Admin', 'Rekap Bulanan'],
  },
  {
    id: 'att-business',
    category: 'attendance',
    tier: 'business',
    title: 'Sistem Absensi — Business',
    description: 'Absensi dengan cuti, lembur, departemen, dan multi-role.',
    image: '/work/attendance_business.png',
    tags: ['Cuti & Lembur', 'Departemen', 'Multi-Role'],
  },
  {
    id: 'att-premium',
    category: 'attendance',
    tier: 'premium',
    title: 'Sistem Absensi — Premium',
    description: 'Sistem lengkap dengan shift scheduling, notifikasi WA, dan ekspor payroll.',
    image: '/work/attendance_premium.png',
    tags: ['Shift', 'Notifikasi WA', 'Ekspor Payroll'],
  },
  // Finance
  {
    id: 'fin-starter',
    category: 'finance',
    tier: 'starter',
    title: 'Sistem Keuangan — Starter',
    description: 'Pencatatan keuangan personal/usaha kecil dengan grafik dan anggaran.',
    image: '/work/financial_starter.png',
    tags: ['Pemasukan/Pengeluaran', 'Anggaran', 'Grafik'],
  },
  {
    id: 'fin-business',
    category: 'finance',
    tier: 'business',
    title: 'Sistem Keuangan — Business',
    description: 'Cashflow dashboard dengan L/R, multi-user, dan ekspor Excel.',
    image: '/work/financial_business.png',
    tags: ['Cashflow', 'L/R', 'Multi-User', 'Export Excel'],
  },
  {
    id: 'fin-premium',
    category: 'finance',
    tier: 'premium',
    title: 'Sistem Keuangan — Premium',
    description: 'Akuntansi bisnis: invoice, piutang/hutang, audit trail, multi-akun.',
    image: '/work/financial_premium.png',
    tags: ['Invoice', 'Audit Trail', 'Multi-Akun'],
  },
  // Wedding
  {
    id: 'wed-starter',
    category: 'wedding',
    tier: 'starter',
    title: 'Undangan Digital — Starter',
    description: 'Undangan pernikahan digital simpel dengan info acara dan Google Maps.',
    image: '/work/wedding_starter.png',
    tags: ['Cover Digital', 'Detail Acara', 'Google Maps'],
  },
  {
    id: 'wed-business',
    category: 'wedding',
    tier: 'business',
    title: 'Undangan Digital — Business',
    description: 'Undangan lengkap dengan countdown, RSVP, galeri, dan musik latar.',
    image: '/work/wedding_business.png',
    tags: ['Countdown', 'RSVP', 'Galeri', 'Musik'],
  },
  {
    id: 'wed-premium',
    category: 'wedding',
    tier: 'premium',
    title: 'Undangan Digital — Premium',
    description: 'Undangan premium dengan live streaming, guestbook, dan animasi elegan.',
    image: '/work/wedding_premium.png',
    tags: ['Live Streaming', 'Guestbook', 'Animasi Premium'],
  },
]
