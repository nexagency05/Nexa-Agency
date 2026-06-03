export type PricingTier = {
  name: 'Starter' | 'Business' | 'Premium'
  price: number
  priceDisplay: string
  highlight?: boolean
  badge?: string
  features: string[]
  keyBenefit: string
}

export type PricingCategory = {
  id: string
  name: string
  tagline: string
  tiers: PricingTier[]
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'company-profile',
    name: 'Company Profile',
    tagline: 'Bangun kepercayaan pelanggan dengan website profesional, 24/7.',
    tiers: [
      {
        name: 'Starter',
        price: 1500000,
        priceDisplay: 'Rp 1.500.000',
        features: [
          '5 Halaman (Home, About, Services, Gallery, Kontak)',
          'Desain modern & mobile-friendly',
          'Tombol WhatsApp',
          'Halaman profil bisnis lengkap',
          'Galeri produk/layanan',
          'Google Maps & info kontak',
          'SEO Dasar (siap Google)',
          'Bantuan domain & hosting',
        ],
        keyBenefit: 'Online dan kredibel dalam hitungan hari',
      },
      {
        name: 'Business',
        price: 2500000,
        priceDisplay: 'Rp 2.500.000',
        highlight: true,
        badge: 'Populer',
        features: [
          '8 Halaman (+ Blog, Testimoni, FAQ)',
          'Desain custom sesuai brand',
          'Tombol WhatsApp & media sosial',
          'Halaman katalog produk/layanan',
          'Bagian testimonial',
          'Halaman FAQ',
          'SEO On-Page',
          'Google Analytics & Microsoft Clarity',
          'Bantuan domain & hosting',
        ],
        keyBenefit: 'Tampilan brand yang konsisten + analitik bawaan',
      },
      {
        name: 'Premium',
        price: 4000000,
        priceDisplay: 'Rp 4.000.000',
        features: [
          'Hingga 12 halaman (full custom)',
          'UI premium dengan animasi & micro-interaction',
          'Integrasi WhatsApp + marketplace + sosial',
          'Showcase layanan yang advanced',
          'Testimoni & studi kasus multi-bagian',
          'Blog/Berita',
          'SEO on-page & teknikal advanced',
          'GA + Search Console + Clarity',
          'Keamanan Cloudflare & SSL',
          '1 bulan maintenance gratis',
        ],
        keyBenefit: 'Website sekelas agensi besar, tanpa harga agensi besar',
      },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    tagline: 'Jual online dengan toko yang dioptimalkan untuk konversi.',
    tiers: [
      {
        name: 'Starter',
        price: 4000000,
        priceDisplay: 'Rp 4.000.000',
        features: [
          'Hingga 30 produk',
          'Katalog dengan kategori',
          'Integrasi order via WhatsApp',
          'Link Shopee/Tokopedia',
          'Halaman produk mobile-friendly',
          'Pencarian produk dasar',
          'Bagian testimoni',
          'SEO Dasar',
        ],
        keyBenefit: 'Toko online siap terima order via WhatsApp',
      },
      {
        name: 'Business',
        price: 7500000,
        priceDisplay: 'Rp 7.500.000',
        highlight: true,
        badge: 'Populer',
        features: [
          'Hingga 100 produk',
          'Kategori & sistem filter',
          'Integrasi WhatsApp + marketplace',
          'Wishlist & perbandingan produk',
          'Sistem review & rating',
          'Feed Instagram',
          'Pencarian advanced',
          'SEO On-Page',
          'GA & Clarity',
        ],
        keyBenefit: 'Filter, wishlist, review — pengalaman belanja yang nyaman',
      },
      {
        name: 'Premium',
        price: 12000000,
        priceDisplay: 'Rp 12.000.000',
        features: [
          'Produk tidak terbatas',
          'Multi-kategori advanced',
          'Integrasi WhatsApp + Shopee + Tokopedia + Lazada',
          'Desain detail produk premium',
          'Halaman lookbook/koleksi',
          'Review, rating & Q&A',
          'Feed Instagram & TikTok',
          'SEO penuh (on-page + teknikal)',
          'GA + Search Console + Clarity',
          'Cloudflare & SSL',
          '1 bulan maintenance gratis',
        ],
        keyBenefit: 'Toko multi-platform, full otomatis, siap scale',
      },
    ],
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    tagline: 'Halaman single-purpose yang dioptimalkan untuk iklan & launch produk.',
    tiers: [
      {
        name: 'Starter',
        price: 800000,
        priceDisplay: 'Rp 800.000',
        features: [
          '1 halaman layout konversi',
          'Hero dengan CTA yang kuat',
          'Highlight produk/layanan',
          'CTA WhatsApp',
          'Mobile-first',
          'Loading cepat',
          'Meta tag SEO dasar',
        ],
        keyBenefit: 'Langsung bisa dipasang di iklan hari ini',
      },
      {
        name: 'Business',
        price: 1500000,
        priceDisplay: 'Rp 1.500.000',
        highlight: true,
        badge: 'Populer',
        features: [
          'Seksi lengkap: Hero + Manfaat + Testimoni + FAQ + CTA',
          'Form lead capture (nama, telepon, email)',
          'Dual CTA: WhatsApp + form',
          'Mobile-first & cepat',
          'Tracking konversi GA',
          'Siap Pixel (Meta/TikTok)',
          'SEO + OG tags',
        ],
        keyBenefit: 'Tracking iklan penuh + form lead otomatis',
      },
      {
        name: 'Premium',
        price: 2500000,
        priceDisplay: 'Rp 2.500.000',
        features: [
          'Desain premium penuh + animasi',
          'Semua seksi: Hero + USP + Manfaat + Testimoni + FAQ + Form + CTA',
          'Form lead advanced + auto-response',
          'CTA scroll-triggered',
          'Micro-animasi & efek scroll',
          'GA + Meta Pixel + TikTok Pixel',
          'Tracking event konversi',
          'SEO penuh & OG',
          'Cloudflare & SSL',
        ],
        keyBenefit: 'ROI iklan maksimal: tracking multi-platform + konversi animasi',
      },
    ],
  },
  {
    id: 'inventory',
    name: 'Sistem Inventori',
    tagline: 'Kelola stok bisnis kamu dari mana saja, tanpa ribet.',
    tiers: [
      {
        name: 'Starter',
        price: 4000000,
        priceDisplay: 'Rp 4.000.000',
        features: [
          'Master data produk/barang',
          'Pencatatan stok masuk/keluar',
          'Dashboard stok saat ini',
          'Pencarian & filter produk',
          'Laporan dasar',
          'Single user',
          'Web app mobile-accessible',
        ],
        keyBenefit: 'Inventori digital, tidak ada lagi catatan manual',
      },
      {
        name: 'Business',
        price: 7000000,
        priceDisplay: 'Rp 7.000.000',
        highlight: true,
        badge: 'Populer',
        features: [
          'Master data dengan kategori',
          'Stok masuk/keluar + tracking supplier',
          'Peringatan stok menipis',
          'Manajemen supplier',
          'Log riwayat transaksi',
          'Laporan stok bulanan',
          'Multi-user (hingga 3)',
          'Dashboard admin',
        ],
        keyBenefit: 'Supplier, peringatan, laporan — semua terpusat',
      },
      {
        name: 'Premium',
        price: 10000000,
        priceDisplay: 'Rp 10.000.000',
        features: [
          'Manajemen produk & kategori penuh',
          'Stok masuk/keluar advanced (catatan & lampiran)',
          'Peringatan stok menipis & kedaluwarsa',
          'Manajemen supplier & PO',
          'Log transaksi & audit penuh',
          'Dashboard analitik advanced',
          'Export ke Excel/PDF',
          'Multi-user berbasis role',
          'Multi-lokasi/gudang',
          'Cloudflare & SSL',
        ],
        keyBenefit: 'Multi-gudang, audit trail, dan ekspor laporan profesional',
      },
    ],
  },
  {
    id: 'attendance',
    name: 'Sistem Absensi',
    tagline: 'Absensi digital + laporan otomatis + dashboard admin.',
    tiers: [
      {
        name: 'Starter',
        price: 3000000,
        priceDisplay: 'Rp 3.000.000',
        features: [
          'Login & check-in karyawan',
          'Catatan absensi harian',
          'Dashboard admin',
          'Master data karyawan',
          'Rekapitulasi bulanan',
          'Web app mobile-accessible',
        ],
        keyBenefit: 'Absensi digital siap pakai untuk tim kecil',
      },
      {
        name: 'Business',
        price: 5500000,
        priceDisplay: 'Rp 5.500.000',
        highlight: true,
        badge: 'Populer',
        features: [
          'Check-in/out karyawan',
          'Pengajuan & persetujuan cuti',
          'Pencatatan lembur',
          'Manajemen departemen/divisi',
          'Laporan absensi & cuti',
          'Dashboard admin + manager',
          'Multi-user berbasis role',
        ],
        keyBenefit: 'Cuti, lembur, departemen — semua terkelola',
      },
      {
        name: 'Premium',
        price: 8000000,
        priceDisplay: 'Rp 8.000.000',
        features: [
          'Manajemen cuti, izin & lembur',
          'Penjadwalan shift',
          'Manajemen departemen & jabatan',
          'Ekspor data penggajian',
          'Dashboard analitik',
          'Export Excel/PDF',
          'Akses berbasis role penuh',
          'Notifikasi email/WhatsApp',
          'Cloudflare & SSL',
        ],
        keyBenefit: 'Siap integrasi payroll, notifikasi otomatis, shift scheduling',
      },
    ],
  },
  {
    id: 'finance',
    name: 'Sistem Keuangan',
    tagline: 'Catat pemasukan, pengeluaran, dan cashflow bisnis kamu.',
    tiers: [
      {
        name: 'Starter',
        price: 2000000,
        priceDisplay: 'Rp 2.000.000',
        features: [
          'Pencatatan pemasukan & pengeluaran',
          'Manajemen kategori',
          'Anggaran bulanan',
          'Dashboard ringkasan keuangan',
          'Grafik sederhana',
          'Single user',
          'Web app mobile-accessible',
        ],
        keyBenefit: 'Catat keuangan pribadi atau usaha kecil dengan mudah',
      },
      {
        name: 'Business',
        price: 9000000,
        priceDisplay: 'Rp 9.000.000',
        highlight: true,
        badge: 'Populer',
        features: [
          'Manajemen pemasukan & pengeluaran',
          'Akun kas & bank',
          'Kategori transaksi',
          'Dashboard cashflow (masuk/keluar/saldo)',
          'Laporan bulanan & tahunan',
          'Ringkasan laba/rugi',
          'Multi-user (kasir/keuangan/admin)',
          'Export ke Excel',
        ],
        keyBenefit: 'Laporan keuangan lengkap dengan ringkasan L/R',
      },
      {
        name: 'Premium',
        price: 15000000,
        priceDisplay: 'Rp 15.000.000',
        features: [
          'Manajemen cashflow penuh',
          'Piutang & hutang',
          'Manajemen invoice & pembayaran',
          'Multi-akun (kas/bank/e-wallet)',
          'Analitik advanced',
          'Laporan bulanan/kuartal/tahunan',
          'Export Excel & PDF',
          'Akses berbasis role penuh',
          'Audit trail',
          'Cloudflare & SSL',
        ],
        keyBenefit: 'Akuntansi bisnis lengkap: invoice, audit trail, multi-akun',
      },
    ],
  },
  {
    id: 'wedding',
    name: 'Undangan Digital',
    tagline: 'Undangan pernikahan digital yang indah dengan RSVP & countdown.',
    tiers: [
      {
        name: 'Starter',
        price: 150000,
        priceDisplay: 'Rp 150.000',
        features: [
          'Cover undangan digital',
          'Detail acara (akad & resepsi)',
          'Info lokasi dengan Google Maps',
          'Desain elegan & mobile-friendly',
          'Foto pasangan',
        ],
        keyBenefit: 'Undangan digital simpel nan elegan',
      },
      {
        name: 'Business',
        price: 400000,
        priceDisplay: 'Rp 400.000',
        highlight: true,
        badge: 'Populer',
        features: [
          'Semua fitur Starter',
          'Countdown hari-H',
          'RSVP konfirmasi kehadiran',
          'Galeri foto pasangan',
          'Musik latar',
          'Amplop digital',
        ],
        keyBenefit: 'Countdown, RSVP, dan galeri foto — lengkap',
      },
      {
        name: 'Premium',
        price: 700000,
        priceDisplay: 'Rp 700.000',
        features: [
          'Semua fitur Business',
          'Live streaming info',
          'Buku tamu digital (guestbook)',
          'Ucapan & doa dari tamu',
          'Ornamen & animasi premium',
          'Multi-bahasa (Indonesia/Inggris)',
          'Dukungan premium 7 hari',
        ],
        keyBenefit: 'Undangan premium dengan live streaming & guestbook',
      },
    ],
  },
]

export type MaintenanceTier = {
  name: string
  price: number
  priceDisplay: string
  features: string[]
}

export const maintenanceTiers: MaintenanceTier[] = [
  {
    name: 'Basic',
    price: 300000,
    priceDisplay: 'Rp 300.000 / bulan',
    features: [
      'Update konten ringan (teks & gambar)',
      'Monitoring uptime',
      'Backup bulanan',
      'Respon dalam 24 jam',
    ],
  },
  {
    name: 'Standard',
    price: 750000,
    priceDisplay: 'Rp 750.000 / bulan',
    features: [
      'Semua Basic + update konten medium',
      'Tambah/ubah halaman (1x/bulan)',
      'Pembaruan plugin/keamanan',
      'Backup mingguan',
      'Respon dalam 12 jam',
    ],
  },
  {
    name: 'Premium',
    price: 2000000,
    priceDisplay: 'Rp 2.000.000 / bulan',
    features: [
      'Semua Standard + update fitur minor',
      'Tambah/ubah halaman tidak terbatas',
      'Monitoring performa & SEO',
      'Backup harian',
      'Prioritas respon dalam 4 jam',
      'Laporan bulanan',
    ],
  },
]

export const paymentTerms = [
  'DP 50% sebelum pengerjaan dimulai',
  'Pelunasan 50% sebelum website diluncurkan',
  'Maksimal 2–3 revisi desain (revisi tambahan dikenakan biaya)',
  'Revisi konten tidak dibatasi selama masa pengerjaan',
  'Waktu pengerjaan: 3–14 hari kerja tergantung paket',
]
