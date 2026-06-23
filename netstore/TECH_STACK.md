# TECH_STACK.md — Teknologi yang Dipakai

## Keputusan Utama
Proyek ini menggunakan **Vanilla HTML/CSS/JS murni** tanpa framework apapun.
Alasan: ringan, tidak ada dependency, mudah di-deploy di mana saja, tidak ada build step.

---

## Stack Lengkap

### Markup
- **HTML5** — semantic tags wajib dipakai (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`)

### Styling
- **CSS3 murni** — tidak pakai Bootstrap, Tailwind, atau framework CSS lain
- Menggunakan **CSS Custom Properties (variables)** untuk warna dan typography
- **CSS Flexbox & Grid** untuk layout
- **Media queries** untuk responsivitas (mobile-first approach)
- File CSS dipisah per komponen jika perlu, tapi **satu file utama** `style.css` sebagai entry point

### JavaScript
- **Vanilla JS (ES6+)** — tidak ada jQuery, tidak ada library JS eksternal
- Menggunakan `const` dan `let`, tidak pakai `var`
- Modul JS dipisah di `/js/` folder per fungsi (filter produk, WhatsApp handler, dll)

### Gambar & Aset
- Format: **WebP** (utama) atau JPG/PNG jika WebP tidak tersedia
- Placeholder: gunakan `https://placehold.co/` untuk development
- Ikon: **SVG inline** atau file SVG — tidak pakai icon font (Font Awesome dll) untuk performa

### Font
- **Google Fonts** via `<link>` di `<head>` — hanya 2 font maksimal
- Font utama: **Inter** (body text)
- Font heading: **Poppins** (judul)
- Fallback: `system-ui, -apple-system, sans-serif`

### External Service (tanpa library)
- **WhatsApp API**: `https://wa.me/62xxxxxxxxxx?text=...` (link biasa, tidak perlu library)
- **Google Maps**: embed iframe (tidak perlu API key)

---

## Struktur File Output

```
/
├── index.html
├── products.html
├── product-detail.html
├── about.html
├── contact.html
├── css/
│   ├── style.css          ← variabel global, reset, typography
│   ├── components.css     ← navbar, card, button, footer
│   └── pages/
│       ├── home.css
│       ├── products.css
│       └── contact.css
├── js/
│   ├── main.js            ← inisialisasi global (navbar toggle, dll)
│   ├── products.js        ← filter & render produk dari data
│   └── data/
│       └── products.js    ← array data produk (sebagai "database" sementara)
└── assets/
    ├── images/
    │   ├── products/
    │   └── brands/
    └── icons/
```

---

## Yang Tidak Boleh Dipakai
- ❌ `var` untuk deklarasi variabel
- ❌ Inline style (`style="..."`) — semua styling lewat CSS class
- ❌ `!important` kecuali terpaksa dan diberi komentar alasannya
- ❌ CDN library JS yang tidak disebutkan di file ini
- ❌ `document.write()`
- ❌ Framework CSS apapun

---

## Browser Target
- Chrome (terbaru)
- Firefox (terbaru)
- Safari (iOS 14+)
- Samsung Internet (Android)
- **Tidak perlu support IE11**
