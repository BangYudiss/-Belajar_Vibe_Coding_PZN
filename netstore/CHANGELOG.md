# CHANGELOG.md — Riwayat Perubahan

Format: `[YYYY-MM-DD] — Deskripsi perubahan (alasan jika perlu)`

---

## [Belum ada versi rilis]

### [2026-06-22]
**Oleh:** Antigravity
**Task:** Penonaktifan Sticky Behavior pada Filter & Search Bar Section di Katalog

**Perubahan:**
- Berkas `css/pages/products.css`: Menghapus deklarasi `position: sticky`, `top`, dan `z-index` pada `.filter-section` beserta media query `@media (min-width: 1024px)`. Hal ini membuat filter & search bar bersifat statis dan ikut tergulung ke atas saat halaman di-scroll agar tidak menghalangi viewport pengguna.

### [2026-06-22]
**Oleh:** Antigravity
**Task:** Perbaikan Navigasi Halaman Detail Produk & Penambahan Gambar Galeri

**Perubahan:**
- File `js/product-detail.js`: Memperbaiki bug parsing ID produk. Pencarian produk yang sebelumnya menggunakan `parseInt(productId, 10)` diubah menjadi perbandingan string langsung `productId` agar sesuai dengan tipe data string slug di database.
- File `js/data/products.js`: Menambahkan variasi 3 gambar representatif berkualitas tinggi per produk menggunakan placeholder visual berwarna kontras yang spesifik (Main, Detail/Ports, dan Box), sehingga galeri thumbnail pada halaman detail berfungsi penuh dengan transisi gambar yang benar.

### [2026-06-22]
**Oleh:** Antigravity
**Task:** Fase 5 — Halaman Pendukung (about.html & contact.html)

**Perubahan:**
- File `about.html`: Membuat halaman Tentang Kami dengan remah roti (breadcrumbs), seksi pengenalan NetStore, visi & misi perusahaan, 4 poin nilai-nilai inti, serta grid logo brand mitra.
- File `css/pages/about.css`: Menyusun layout responsif halaman Tentang Kami, lengkap dengan transisi hover ber-grayscale-to-color pada bagian logo brand mitra.
- File `contact.html`: Membuat halaman Kontak Kami yang menyajikan info detail (alamat, email, nomor CS, jam operasional), box penawaran rancangan topologi, formulir kirim pesan interaktif, dan iframe Google Maps interaktif.
- File `css/pages/contact.css`: Mengatur tampilan formulir kontak dengan focus ring yang jelas, styling label, serta layout grid 2 kolom desktop.
- File `js/contact.js`: Menambahkan penanganan validasi isian formulir kontak (nama, email format, subjek, pesan) di sisi klien, dan memicu toast sukses ketika berhasil dikirim.

### [2026-06-22]
**Oleh:** Antigravity
**Task:** Fase 4 — Detail Produk (product-detail.html)

**Perubahan:**
- File `product-detail.html`: Membuat halaman detail produk lengkap dengan breadcrumbs dinamis, layout grid dua kolom (galeri foto dan info produk utama), spesifikasi teknis berupa tabel, deskripsi lengkap, box penawaran konsultasi IT support, dan seksi produk terkait (4 kartu produk sejenis).
- File `js/product-detail.js`: Mengatur logika parsing parameter `?id=xxx` dari URL, merender info produk spesifik ke DOM, menyusun tabel spesifikasi, mengendalikan galeri gambar thumbnail, dan menghubungkan CTA WhatsApp khusus untuk pembelian produk terkait.
- File `css/pages/product-detail.css`: Mengatur tampilan premium halaman detail produk, termasuk grid responsif, penanda thumbnail aktif, garis batas halus tabel spesifikasi, box konsultasi bergaris putus-putus, serta visualisasi error handling jika ID tidak valid.
- File `css/components.css`: Memindahkan properti penempelan `position: sticky` dari kelas `.navbar` ke elemen pembungkus utama (`header`) untuk mengatasi bug navigasi tergulung keluar dari layar akibat pembungkus statis.
- File `css/pages/products.css` [PERBAIKAN BUG]: Menaikkan tingkat kedalaman `.filter-section` (`z-index: 90`) agar selalu berada di atas kartu produk saat digulir, mencegah celah visual bocor yang menembus filter bar.

**Keputusan yang diambil:**
- Memilih skema pencarian produk terkait (*Related Products*) dengan memprioritaskan kategori sejenis terlebih dahulu, lalu diisi produk kategori lain jika produk sejenis kurang dari 4, guna memastikan halaman selalu menyajikan 4 rekomendasi belanja yang menarik bagi pengunjung.

**Diketahui owner:** Ya

### [2026-06-22]
**Oleh:** Antigravity
**Task:** Fase 3 — Katalog Produk (products.html)

**Perubahan:**
- File `products.html`: Membuat halaman katalog produk lengkap dengan layout semantik, bilah pencarian real-time, dan navigasi filter kategori (dalam bentuk tab/pil). Dilengkapi dengan penanganan visual 'empty state' jika produk yang dicari tidak ditemukan.
- File `js/products.js`: Mengatur logika penyaringan produk dinamis berdasarkan kata kunci pencarian dan kategori terpilih, membaca parameter URL `?category=xxx` untuk filter instan dari halaman beranda, dan mengendalikan reset filter serta fungsionalitas tombol WhatsApp belanja.
- File `css/pages/products.css`: Membuat desain dan visualisasi interaktif halaman katalog, termasuk transisi focus input pencarian, navigasi horizontal scrollable filter kategori pada layar perangkat seluler, dan alignment kontainer empty state.

**Keputusan yang diambil:**
- Menggunakan skema histori URL (`window.history.replaceState`) saat mengganti filter kategori secara dinamis tanpa melakukan reload halaman, memberikan kenyamanan penjelajahan katalog yang mulus bagi pengguna.

**Diketahui owner:** Ya

### [2026-06-22]
**Oleh:** Antigravity
**Task:** Fase 2 — Halaman Utama (index.html)

**Perubahan:**
- File `index.html`: Membuat halaman utama (landing page) lengkap dengan 8 section terstruktur secara semantik (Navbar, Hero, Keunggulan, Kategori, Produk Unggulan, Testimoni, CTA Bawah, dan Footer) serta menyematkan skrip rendering kartu produk secara dinamis yang terhubung ke data produk JS.
- File `css/pages/home.css`: Membuat gaya tata letak responsif dan interaktivitas visual premium khusus untuk elemen halaman utama (latar belakang gradasi radial hero, keunggulan grid, layout testimoni, dan gradien linear CTA).

**Keputusan yang diambil:**
- Menggunakan inline SVG untuk ikon di seluruh bagian landing page untuk memastikan performa pemuatan yang cepat dan visualisasi resolusi tinggi tanpa perlu memuat berkas aset gambar/ikon pihak ketiga secara eksternal.

**Diketahui owner:** Ya

### [2026-06-22]
**Oleh:** Antigravity
**Task:** Fase 1 — Fondasi & Setup

**Perubahan:**
- File `css/reset.css`: Membuat reset CSS untuk normalisasi tampilan lintas peramban.
- File `css/style.css`: Membuat berkas style utama berisi import CSS, variabel `:root` dari sistem desain, dan style global dasar.
- File `css/components.css`: Membuat visual/layout dasar komponen global (Navbar, Footer, Button, Card Produk, dan Badge).
- File `js/main.js`: Membuat skrip untuk mobile navigation menu toggle (dengan overlay) dan active link highlighting.
- File `js/whatsapp.js`: Membuat helper pembuka chat WhatsApp otomatis ke nomor dummy.
- File `js/data/products.js`: Membuat data array yang berisi 10 produk sampel dengan informasi lengkap (nama, brand, spesifikasi, deskripsi, harga coret).

**Keputusan yang diambil:**
- Menggunakan callback `onerror` pada render image card (di fase berikutnya) untuk beralih ke placeholder `https://placehold.co/...` jika berkas foto produk lokal belum ada di direktori `assets/images/products/`. Ini menjaga kerapian data di basis data sambil mengatasi belum tersedianya aset gambar fisik.

**Diketahui owner:** Ya

### Setup Awal
- Dibuat semua file dokumentasi proyek: PRD.md, TECH_STACK.md, DESIGN_SYSTEM.md, STRUCTURE.md, CONTEXT.md, PROGRESS.md, RULES.md, CHANGELOG.md, QA_LOG.md
- Keputusan stack: Vanilla HTML/CSS/JS (tanpa framework)
- Keputusan desain: Warna primary biru (#0B5CFF) + accent oranye (#FF6B00)
- Keputusan arsitektur: Data produk di JS array, navigasi detail via URL param `?id=`

---

## Template Pengisian

```
### [YYYY-MM-DD]
**Oleh:** [nama AI / owner]
**Task:** [nama task]

**Perubahan:**
- File `xxx.html`: [apa yang ditambah/diubah]
- File `css/xxx.css`: [apa yang ditambah/diubah]

**Keputusan yang diambil:**
- [Keputusan] karena [alasan]

**Diketahui owner:** Ya / Tidak
```

---

## Catatan Penting
- Jika ada perubahan yang **bertentangan dengan RULES.md**, wajib dicatat di sini beserta alasannya dan konfirmasi dari owner
- Jika ada perubahan pada `DESIGN_SYSTEM.md` (warna, font, dll), semua halaman yang terpengaruh harus dicek ulang
