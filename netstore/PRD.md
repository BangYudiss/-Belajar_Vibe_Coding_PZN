# PRD.md — Project Requirements Document

## Nama Proyek
**NetStore** — Toko Online & Company Profile Perangkat Jaringan

---

## Visi Proyek
Website ini adalah gabungan antara **company profile** dan **toko online** untuk bisnis yang menjual perangkat jaringan seperti Access Point, Router, Switch, dan perangkat networking lainnya. Tujuan utamanya adalah membangun kepercayaan calon pembeli, menampilkan produk secara profesional, dan mengarahkan pengunjung untuk melakukan pembelian atau menghubungi toko.

---

## Target Pengguna
- Pemilik warnet / cafe yang butuh upgrade jaringan
- IT staff perusahaan yang mencari perangkat jaringan
- Teknisi freelance yang belanja untuk klien
- Individu yang ingin pasang WiFi di rumah / kos

---

## Halaman yang Ada

### 1. `index.html` — Home / Landing Page
- Hero section dengan tagline dan CTA (tombol ke katalog / WhatsApp)
- Keunggulan toko (ikon + teks singkat): Produk Original, Garansi Resmi, Pengiriman Cepat, Konsultasi Gratis
- Kategori produk (preview 3-4 kategori dengan ikon)
- Produk unggulan / best seller (4-8 produk)
- Testimoni pelanggan (3-5 testimoni)
- CTA akhir halaman (hubungi via WhatsApp)

### 2. `products.html` — Katalog Produk
- Filter kategori (sidebar atau tab): Access Point, Router, Switch, Kabel & Aksesoris
- Grid produk dengan card: foto, nama, merek, harga, tombol detail / WA
- Setiap card ada badge: "Best Seller", "New", "Stok Terbatas" (opsional)

### 3. `product-detail.html` — Detail Produk
- Foto produk (bisa lebih dari satu, dengan thumbnail)
- Nama, merek, harga, deskripsi lengkap
- Spesifikasi teknis dalam tabel
- Tombol beli via WhatsApp (langsung ke chat dengan pesan otomatis)
- Produk terkait (4 produk)

### 4. `about.html` — Tentang Kami
- Cerita singkat toko / perusahaan
- Nilai-nilai / keunggulan
- Foto tim atau toko (opsional placeholder)
- Mitra brand yang dijual (logo Mikrotik, TP-Link, Ubiquiti, Cisco, dll)

### 5. `contact.html` — Kontak
- Alamat lengkap
- Nomor WhatsApp (klik langsung buka WA)
- Email
- Jam operasional
- Peta Google Maps (embed)
- Form kontak sederhana (nama, email, pesan) — hanya UI, tidak perlu backend

---

## Fitur Utama
- **WhatsApp Integration**: Semua tombol beli/tanya mengarah ke WA dengan pesan pre-filled
- **Katalog Produk**: Tampil per kategori, bisa difilter
- **Responsive Design**: Mobile-first, tampil baik di HP dan desktop
- **SEO Friendly**: Meta tag lengkap, heading terstruktur, alt text pada gambar
- **Fast Loading**: Tanpa framework berat, murni HTML/CSS/JS

---

## Yang TIDAK Boleh Ada (Out of Scope)
- ❌ Sistem login / akun pengguna
- ❌ Keranjang belanja / checkout online
- ❌ Payment gateway
- ❌ Database atau backend apapun
- ❌ CMS atau admin panel
- ❌ Framework JS (React, Vue, Angular, dll)
- ❌ CSS Framework berat (Bootstrap, Tailwind via CDN yang lambat)
- ❌ Animasi berlebihan yang memperlambat halaman

---

## Bahasa
- **Antarmuka**: Bahasa Indonesia
- **Kode**: Komentar dalam Bahasa Indonesia boleh, nama variabel dalam Bahasa Inggris

---

## Target Performa
- Halaman utama harus load < 3 detik di koneksi 4G
- Gambar produk wajib dioptimasi (gunakan placeholder dulu jika belum ada aset)
- Tidak ada console error saat halaman dibuka
