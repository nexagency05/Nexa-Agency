// [CONFIRM] Update domain before launch

export const site = {
  name: 'Nexa Agency',
  tagline: 'Creative Website Developer',
  description:
    'Studio web kreatif di Bandung. Desain custom, cepat, dan mobile-friendly — dengan harga yang jelas di depan.',
  domain: 'nexaagency.id', // [CONFIRM]
  baseUrl: 'https://nexaagency.id', // [CONFIRM]

  contact: {
    whatsapp: '6288290639426',
    whatsappDisplay: '+62 882-9063-9426',
    email: 'nexagency05@gmail.com',
    responseHours: '08.00–17.00 WIB',
    location: 'Bandung, Indonesia',
  },

  social: {
    instagram: 'https://www.instagram.com/nexa_agency_id/',
    tiktok: 'https://www.tiktok.com/@nexagency_id',
  },
}

export function waLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export const waMessages = {
  general: waLink(
    'Halo Nexa Agency, saya tertarik untuk membuat website. Bisa info lebih lanjut?'
  ),
  project: waLink(
    'Halo Nexa Agency, saya ingin memulai proyek website. Bisa kita diskusi?'
  ),
  pricing: waLink(
    'Halo Nexa Agency, saya mau tanya soal harga paket website. Boleh konsultasi dulu?'
  ),
  founding: waLink(
    'Halo Nexa Agency, saya tertarik dengan penawaran Founding Client. Bisa ceritakan lebih lanjut?'
  ),
}
