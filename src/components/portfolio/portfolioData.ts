
import { PortfolioItem } from './types';

// Portfolio data with additional details for the modal
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    client: "UMKM snack rumah ungu",
    problem: "Dikira rumahnya ga ungu beneran",
    solution: "Branding ulang + logo rumah snack",
    colorClass: "bg-waras-orange",
    imageText: "Mockup stiker kemasan",
    detailedDescription: "Klien kami menghadapi masalah identitas brand yang membingungkan. Banyak konsumen mengira nama 'Rumah Ungu' hanya sebutan biasa, bukan merek sebenarnya. Kami melakukan branding ulang dengan menciptakan logo rumah berwarna ungu yang ikonik dan menarik.",
    services: ["Desain Logo", "Branding", "Packaging Design"],
    coverImage: "/lovable-uploads/59712dcd-d35e-4779-936a-11848453fa0e.png",
    images: [
      { id: 1, alt: "Logo Rumah Ungu", caption: "Logo baru dengan warna ungu yang khas", src: "/lovable-uploads/1266f3e9-b2cb-48fb-bdce-ed0299ad9c8e.png" },
      { id: 2, alt: "Packaging Stiker", caption: "Stiker kemasan dengan tema rumah ungu", src: "/lovable-uploads/59712dcd-d35e-4779-936a-11848453fa0e.png" },
      { id: 3, alt: "Brand Guide", caption: "Panduan penggunaan brand untuk konsistensi", src: "/lovable-uploads/29291d26-9d80-41d5-9316-311c100e6dc4.png" }
    ]
  },
  {
    id: 2,
    client: "Zaara Brownies",
    problem: "Owner gaptek gabisa bikin marketing",
    solution: "Identitas visual + social media campaign bonus packaging",
    colorClass: "bg-waras-blue",
    imageText: "Mockup packaging dan advertisement",
    detailedDescription: "Pemilik Zaara Brownies kesulitan memasarkan produknya di dunia digital karena keterbatasan pengetahuan teknologi. Kami membuat solusi komprehensif dengan identitas visual yang kuat dan strategi media sosial yang mudah dijalankan.",
    services: ["Identitas Visual", "Social Media Campaign", "Packaging Design", "Marketing Strategy"],
    coverImage: "/lovable-uploads/8965d072-07f7-4f94-89e4-90b4bb04913b.png", // Gambar baru sebagai cover
    images: [
      { id: 1, alt: "Logo Rumah Ungu", caption: "Logo baru dengan tema premium", src: "/lovable-uploads/1eb06743-6a3c-4957-aa8c-9dbeec592f57.png" },
      { id: 2, alt: "Packaging Design", caption: "Desain kemasan menarik yang memperlihatkan produk", src: "/lovable-uploads/ea4f8e15-08c3-4ae6-b087-62fba610f086.png" },
      { id: 3, alt: "Brand Identity", caption: "Banner dan identitas visual untuk toko", src: "/lovable-uploads/13d8d60a-7231-4311-8805-6ce20bf4cc52.png" }
    ]
  },
  {
    id: 3,
    client: "KAMU",
    problem: "Masih nyari jasa branding yang cocok",
    solution: "KAMI",
    colorClass: "bg-waras-lime",
    imageText: "INI BISA JADI BRAND KAMU",
    isCTA: true,
    detailedDescription: "Apakah brand kamu membutuhkan sentuhan kreatif? WARAS siap membantu berbagai kebutuhan branding kamu, dari logo design hingga strategi marketing yang efektif.",
    services: ["Desain Logo", "Identitas Visual", "Social Media Management", "Packaging Design", "Marketing Strategy"],
    images: [
      { id: 1, alt: "Logo Kamu", caption: "Logo brand kamu yang unik dan memorable" },
      { id: 2, alt: "Kemasan Kamu", caption: "Desain kemasan yang menarik perhatian" },
      { id: 3, alt: "Media Sosial", caption: "Strategi media sosial yang menghasilkan" }
    ]
  }
];
