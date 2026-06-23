# RULES.md — Aturan Wajib untuk AI

> Ini adalah hukum proyek. Tidak ada pengecualian kecuali ada instruksi eksplisit dari owner yang dicatat di CHANGELOG.md.

---

## 🔴 LARANGAN KERAS (Jangan Pernah Dilakukan)

1. **Jangan pakai inline style** (`style="..."`) — semua styling lewat class CSS
2. **Jangan hardcode warna** — selalu pakai CSS variable (`var(--color-primary)`)
3. **Jangan pakai `var`** untuk deklarasi variabel JS — pakai `const` atau `let`
4. **Jangan install atau import library baru** yang tidak ada di TECH_STACK.md
5. **Jangan hapus komentar** yang sudah ada di kode
6. **Jangan ubah struktur folder** tanpa update STRUCTURE.md
7. **Jangan pakai `!important`** kecuali sangat terpaksa dan tulis komentar alasannya
8. **Jangan gunakan `document.write()`**
9. **Jangan buat file baru** tanpa mencantumkannya di STRUCTURE.md
10. **Jangan ubah nomor WhatsApp** — nomor WA hanya boleh ada di `js/whatsapp.js`

---

## 🟡 STANDAR KODE WAJIB

### HTML
- Selalu gunakan semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Setiap `<img>` wajib punya atribut `alt` yang deskriptif (bukan kosong, bukan "image")
- Meta tag SEO wajib ada di setiap halaman: `title`, `description`, `og:title`, `og:description`
- Gunakan `loading="lazy"` pada gambar yang tidak di atas fold
- Struktur heading harus urut: satu `<h1>` per halaman, lalu `<h2>`, `<h3>`, dst
- Link eksternal wajib punya `target="_blank" rel="noopener noreferrer"`

### CSS
- Deklarasikan semua variabel baru di `:root` di `css/style.css`
- Tulis CSS mobile-first: style default = mobile, lalu `@media (min-width: ...)` untuk desktop
- Gunakan nama class yang deskriptif (BEM atau fungsional): `.product-card`, `.btn-primary`, `.hero-title`
- Setiap section CSS beri komentar blok: `/* ===== NAVBAR ===== */`
- Hindari selector yang terlalu spesifik (lebih dari 3 level)

### JavaScript
- Tulis komentar di atas setiap fungsi yang menjelaskan apa yang dilakukan
- Tangani error dengan try/catch untuk operasi yang bisa gagal
- Jangan akses DOM sebelum `DOMContentLoaded`
- Gunakan `const` untuk nilai yang tidak berubah, `let` untuk yang berubah
- Nama fungsi: camelCase (`openWhatsApp`, `filterProducts`)
- Nama variabel: deskriptif, bukan `a`, `x`, `temp`

---

## 🟢 STANDAR KUALITAS

- Setiap task yang selesai langsung update `PROGRESS.md`
- Setiap perubahan signifikan langsung catat di `CHANGELOG.md`
- Setelah membuat fitur baru, cek di browser (minimal mobile 375px dan desktop 1280px)
- Pastikan tidak ada error di console browser sebelum bilang "selesai"
- Jika ada keputusan desain atau teknis yang diambil, tulis alasannya di `CONTEXT.md`

---

## 🔵 CARA KERJA AI DI PROYEK INI

Setiap kali diminta membuat sesuatu, AI harus:
1. Sebutkan file apa saja yang akan dibuat/diubah
2. Tulis kodenya lengkap (jangan kasih placeholder "// isi sendiri")
3. Jelaskan singkat apa yang dilakukan dan kenapa
4. Sebutkan apakah ada yang perlu dilakukan manual oleh owner (misalnya ganti nomor WA)

---

## Tentang Aset Gambar

- Jika gambar asli belum tersedia, gunakan placeholder: `https://placehold.co/400x300?text=Nama+Produk`
- Beri komentar HTML di dekat img: `<!-- TODO: ganti dengan foto asli produk -->`
- Nama file gambar: lowercase, kebab-case, deskriptif: `tp-link-eap670-front.jpg`
