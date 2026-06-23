# CONTEXT.md — Konteks & Memori Proyek

> ⚠️ **Untuk AI yang baru masuk:** Baca file ini PERTAMA sebelum melakukan apapun.
> File ini adalah briefing lengkap untuk memahami proyek tanpa perlu membaca semua kode.

---

## Proyek Ini Apa?
**NetStore** adalah website toko online + company profile untuk bisnis yang menjual perangkat jaringan (Access Point, Router, Switch, dan aksesoris jaringan). Website ini menggunakan HTML/CSS/JS murni — tidak ada framework, tidak ada backend, tidak ada database.

---

## Keputusan Desain Penting (dan Alasannya)

| Keputusan | Alasan |
|-----------|--------|
| Vanilla HTML/CSS/JS | Tidak perlu build tool, mudah deploy, owner bisa edit sendiri |
| Data produk di JS array | Tidak perlu backend, cukup untuk puluhan produk |
| Navigasi via URL param (`?id=xxx`) | Single file `product-detail.html` untuk semua produk |
| WhatsApp sebagai checkout | Bisnis ini memang transaksi via WA, tidak butuh payment gateway |
| Warna primary biru + accent oranye | Biru = teknologi/kepercayaan, oranye = CTA yang mencolok |
| Font Inter + Poppins | Pasangan font modern yang banyak dipakai produk tech |
| Mobile-first CSS | Mayoritas pengunjung datang dari HP |

---

## Hal yang SUDAH Diputuskan dan TIDAK Boleh Diubah
- Tidak ada jQuery, tidak ada Bootstrap, tidak ada framework apapun
- Tombol "Beli / Tanya via WA" selalu berwarna `--color-accent` (oranye), bukan biru
- Semua warna diambil dari CSS variable di `:root`, tidak boleh hardcode
- Data produk disimpan di `js/data/products.js` sebagai array
- Nomor WhatsApp toko disimpan di satu tempat: `js/whatsapp.js` (jangan tersebar)
- Halaman detail produk adalah `product-detail.html` yang dinamis via URL param `?id=`

---

## Stack yang Dipakai
- HTML5 (semantic)
- CSS3 (custom properties, flexbox, grid)
- JavaScript ES6+ (vanilla)
- Google Fonts: Inter + Poppins
- Tidak ada library eksternal

---

## Informasi Bisnis (untuk konten)
- **Nama toko**: NetStore *(sesuaikan jika owner punya nama lain)*
- **Produk**: Access Point, Router, Switch, Kabel & Aksesoris Jaringan
- **Brand yang dijual**: TP-Link, Mikrotik, Ubiquiti, Cisco, D-Link, Huawei *(sesuaikan)*
- **Channel penjualan**: WhatsApp (utama)
- **Nomor WA**: *[ISI NOMOR ASLI SEBELUM DEPLOY]*
- **Alamat**: *[ISI ALAMAT ASLI]*

---

## Cara AI Harus Bekerja di Proyek Ini

1. **Baca PRD.md** untuk tahu fitur apa yang dibangun
2. **Baca DESIGN_SYSTEM.md** sebelum menulis CSS apapun
3. **Baca STRUCTURE.md** sebelum membuat file baru
4. **Cek PROGRESS.md** untuk tahu apa yang sudah dan belum dikerjakan
5. **Patuhi RULES.md** tanpa pengecualian
6. **Update PROGRESS.md** setelah menyelesaikan task
7. **Update CHANGELOG.md** setelah membuat perubahan signifikan
8. **Update QA.md** setelah menyelesaikan task dan memastikan semua berjalan sesuai

---

## Cara Melanjutkan Proyek (Untuk AI Pengganti)

Jika kamu adalah AI baru yang melanjutkan pekerjaan AI sebelumnya:
1. Baca `CONTEXT.md` ini sampai selesai ✅
2. Buka `PROGRESS.md` → lihat task mana yang ✅ dan mana yang ⬜
3. Pilih task ⬜ pertama dan kerjakan
4. Jangan ubah kode yang sudah ada kecuali ada bug atau diminta eksplisit
5. Setelah selesai, update `PROGRESS.md` dan `CHANGELOG.md`
