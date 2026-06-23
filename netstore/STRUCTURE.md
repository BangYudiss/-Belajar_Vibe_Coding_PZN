# STRUCTURE.md — Arsitektur Folder & File

## Prinsip Organisasi

- Satu fungsi, satu file
- Nama file lowercase dengan tanda hubung (kebab-case): `product-detail.html`
- Tidak ada file sementara / file percobaan di root
- Semua aset di dalam `/assets/`

---

## Struktur Lengkap

```
netstore/                          ← root folder proyek
│
├── index.html                     ← Home / Landing Page
├── products.html                  ← Katalog semua produk
├── product-detail.html            ← Halaman detail 1 produk (dinamis via URL param)
├── about.html                     ← Tentang kami
├── contact.html                   ← Kontak & peta
│
├── css/
│   ├── style.css                  ← ENTRY POINT: import semua CSS lain + definisi variabel global
│   ├── reset.css                  ← CSS reset / normalize
│   ├── components.css             ← Navbar, footer, card, button, badge (dipakai di semua halaman)
│   └── pages/
│       ├── home.css               ← Style khusus halaman index.html
│       ├── products.css           ← Style khusus halaman products.html
│       ├── product-detail.css     ← Style khusus halaman product-detail.html
│       ├── about.css              ← Style khusus halaman about.html
│       └── contact.css            ← Style khusus halaman contact.html
│
├── js/
│   ├── main.js                    ← Script global: navbar toggle mobile, smooth scroll, active link
│   ├── products.js                ← Render grid produk, filter kategori, search
│   ├── product-detail.js          ← Ambil produk dari URL param, render detail, galeri foto
│   ├── whatsapp.js                ← Fungsi generate link WA dengan pesan otomatis
│   └── data/
│       └── products.js            ← Array data semua produk (pengganti database)
│
└── assets/
    ├── images/
    │   ├── hero/                  ← Gambar banner hero section
    │   ├── products/              ← Foto produk (nama file: slug produk, misal: tp-link-eap670.jpg)
    │   ├── brands/                ← Logo brand (tp-link.svg, mikrotik.svg, ubiquiti.svg, dll)
    │   └── team/                  ← Foto tim / toko (opsional)
    └── icons/                     ← SVG icon custom jika ada
```

---

## Penjelasan File Kunci

### `js/data/products.js`

Ini adalah "database" sementara. Berisi array objek produk dengan struktur:

```js
const products = [
  {
    id: "tp-link-eap670",
    name: "TP-Link EAP670",
    brand: "TP-Link",
    category: "access-point", // access-point | router | switch | aksesoris
    price: 850000,
    originalPrice: 1000000, // opsional, untuk harga coret
    badge: "best-seller", // best-seller | new | limited | null
    images: ["assets/images/products/tp-link-eap670.jpg"],
    shortDesc: "Wi-Fi 6 AX3000 Ceiling Mount Access Point",
    description: "Deskripsi panjang...",
    specs: {
      "Standar WiFi": "Wi-Fi 6 (802.11ax)",
      Kecepatan: "AX3000 (2402+574 Mbps)",
      Antena: "4x Internal",
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang TP-Link EAP670",
  },
];
```

### `js/whatsapp.js`

Berisi fungsi tunggal:

```js
function openWhatsApp(productName, productId) {
  const phone = "6281234567890"; // ganti dengan nomor asli
  const text = encodeURIComponent(
    `Halo, saya tertarik dengan produk: ${productName}`,
  );
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}
```

### `product-detail.html`

Menggunakan URL parameter untuk menentukan produk yang ditampilkan:
`product-detail.html?id=tp-link-eap670`
Script `product-detail.js` membaca param ini dan mengambil data dari `products.js`.

---

## Aturan Struktur

- ✅ Satu halaman = satu file HTML di root
- ✅ CSS global (variabel, reset, komponen) SELALU di-link di semua halaman
- ✅ CSS halaman spesifik hanya di-link di halaman yang bersangkutan
- ✅ `main.js` selalu di-include di semua halaman
- ✅ Script khusus halaman (products.js, product-detail.js) hanya di halaman tersebut
- ❌ Jangan taruh file JS atau CSS di root langsung, kecuali ada alasan kuat
- ❌ Jangan buat folder baru tanpa mencatatnya di file ini dulu
