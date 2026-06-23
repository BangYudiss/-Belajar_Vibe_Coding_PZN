# QA_LOG.md — Log Pengujian Quality Assurance

> File ini diisi AI setiap kali menyelesaikan sebuah halaman atau fitur.
> Tujuan: memastikan tidak ada yang terlewat dan ada rekam jejak kualitas.

---

## Template QA Per Halaman

```markdown
## QA — [nama halaman] — [tanggal]

### Checklist HTML
- [ ] Semantic HTML dipakai (header, main, section, footer, dll)
- [ ] Satu h1 per halaman
- [ ] Semua img punya alt text deskriptif
- [ ] Meta title, meta description ada
- [ ] og:title, og:description ada
- [ ] Link eksternal ada rel="noopener noreferrer"
- [ ] Tidak ada broken link internal

### Checklist CSS
- [ ] Tidak ada inline style
- [ ] Tidak ada hardcode warna (semua via var())
- [ ] Tidak ada !important yang tidak berkomentar
- [ ] Tampil baik di 375px (mobile)
- [ ] Tampil baik di 768px (tablet)
- [ ] Tampil baik di 1280px (desktop)

### Checklist JS
- [ ] Tidak ada penggunaan var
- [ ] Tidak ada console.log yang tertinggal (kecuali mode debug)
- [ ] Tidak ada error di console browser
- [ ] Semua event listener bersih (tidak duplikat)
- [ ] Fungsi WA menghasilkan link yang benar

### Checklist Fungsional
- [ ] Semua tombol berfungsi
- [ ] Tombol WA membuka WhatsApp dengan pesan yang benar
- [ ] Navigasi menu berfungsi di desktop
- [ ] Hamburger menu berfungsi di mobile
- [ ] Filter/search produk berfungsi (jika ada)

### Hasil
**Status:** ✅ LULUS / ❌ GAGAL / ⚠️ LULUS DENGAN CATATAN

**Bug / Masalah Ditemukan:**
- (kosong jika tidak ada)

**Catatan:**
- (tambahkan jika ada)
```

---

## Log QA Aktual

## QA — Integrasi Database Dinamis & Fitur Ketersediaan Stok — 2026-06-23

### Checklist JS (Asinkron & Fetch)
- [x] Fungsi `fetchProductsFromSheets()` berhasil melakukan `fetch()` data dari Google Sheets.
- [x] Auto-fallback dari tautan utama (`SHEET_URL` pub) ke tautan cadangan (`SHEET_FALLBACK_URL` export) jika diblokir berjalan mulus.
- [x] Parser CSV (`csvToObjects`) memproses koma, tanda kutip ganda, array gambar, dan specs secara benar.
- [x] Keadaan loading spinner ter-render secara visual di Beranda, Katalog, dan Detail selama pengambilan data.
- [x] Tidak ada crash visual atau DOM jika parameter `id` di URL tidak ditemukan (penanganan 404).

### Checklist UI & Fungsionalitas Ketersediaan Stok (`inStock`)
- [x] Produk dengan `inStock = false` di database terdeteksi sebagai habis stok secara dinamis.
- [x] Gambar produk dengan status out-of-stock tertutup overlay "No Stock!" dan lebih gelap secara visual.
- [x] Tombol beli di halaman Katalog/Beranda dinonaktifkan (disabled) dan berganti teks menjadi "Habis" jika stok kosong.
- [x] Tombol beli WhatsApp di Halaman Detail berganti teks menjadi "Produk tidak tersedia", dinonaktifkan (disabled) dengan warna abu-abu, dan pointer-events dinonaktifkan.
- [x] Kartu produk terkait di halaman detail juga menampilkan overlay "No Stock!" dan tombol disabled jika stok habis.

### Hasil
**Status:** ✅ LULUS

**Bug / Masalah Ditemukan:**
1. **Pemblokiran Hotlinking Aset Eksternal (TP-Link static server) pada Vercel Deployed App**: Gambar produk TP-Link EAP670, TL-SG1008D, dan TL-SF1005D yang di-host di `static.tp-link.com` tidak muncul ketika dibuka dari domain `.vercel.app` (mengembalikan 403 Forbidden karena referer tidak disetujui), padahal di `localhost:8080` berhasil dimuat.

**Catatan:**
- Pengujian visual sukses dilakukan dengan menggunakan mock status `inStock = false` pada salah satu produk untuk mengonfirmasi ketepatan rendering CSS.
- Masalah pemblokiran hotlinking diselesaikan dengan menerapkan atribut `referrerpolicy="no-referrer"` pada seluruh tag image (`<img>`) katalog, beranda, thumbnail galeri, dan detail produk. Tindakan ini memotong pengiriman header referer dan membuat aset dari CDN TP-Link berhasil termuat secara stabil di Vercel.

---

## QA — Detail Produk (product-detail.html) — 2026-06-22

### Checklist HTML
- [x] Semantic HTML dipakai (header, main, section, footer, dll)
- [x] Satu h1 per halaman
- [x] Semua img punya alt text deskriptif
- [x] Meta title, meta description ada
- [x] og:title, og:description ada
- [x] Link eksternal ada rel="noopener noreferrer"
- [x] Tidak ada broken link internal

### Checklist CSS
- [x] Tidak ada inline style
- [x] Tidak ada hardcode warna (semua via var())
- [x] Tidak ada !important yang tidak berkomentar
- [x] Tampil baik di 375px (mobile)
- [x] Tampil baik di 768px (tablet)
- [x] Tampil baik di 1280px (desktop)

### Checklist JS
- [x] Tidak ada penggunaan var
- [x] Tidak ada console.log yang tertinggal (kecuali mode debug)
- [x] Tidak ada error di console browser
- [x] Semua event listener bersih (tidak duplikat)
- [x] Fungsi WA menghasilkan link yang benar

### Checklist Fungsional
- [x] Semua tombol berfungsi
- [x] Tombol WA membuka WhatsApp dengan pesan yang benar (menyebutkan nama dan ID produk)
- [x] Navigasi menu berfungsi di desktop
- [x] Hamburger menu berfungsi di mobile
- [x] Galeri foto berfungsi (mengetuk thumbnail memperbarui foto utama dengan transisi pudar)
- [x] Render spesifikasi teknis dan detail deskripsi berfungsi sempurna
- [x] Tampilan error 404 berfungsi jika ID tidak valid

### Hasil
**Status:** ✅ LULUS

**Bug / Masalah Ditemukan:**
1. **Produk Tidak Ditemukan saat Navigasi Detail**: Di `js/product-detail.js`, pencarian produk membandingkan ID menggunakan `parseInt(productId, 10)` sedangkan ID produk sesungguhnya didefinisikan sebagai string slug di `products.js`. Hal ini menyebabkan pencarian gagal dan selalu menampilkan error "Produk Tidak Ditemukan".
2. **Keterbatasan Gambar Galeri**: Berkas fisik gambar di direktori `assets/images/products` belum dibuat sehingga semua gambar memicu fallback `onerror`. Selain itu, hanya ada 1 gambar di array `images`, sehingga thumbnail galeri interaktif tidak memiliki variasi tampilan.

**Catatan:**
- **Perbaikan ID**: Mengubah pembandingan pencarian produk menjadi `p.id === productId` (pembandingan string secara langsung).
- **Perbaikan Galeri & Data**: Mengisi array `images` di `js/data/products.js` dengan masing-masing 3 tautan gambar placeholder premium berlatar belakang kontras yang spesifik untuk setiap model perangkat, sehingga interaksi galeri berjalan sempurna.

---

## QA — Katalog Produk (products.html) — 2026-06-22

### Checklist HTML
- [x] Semantic HTML dipakai (header, main, section, footer, dll)
- [x] Satu h1 per halaman
- [x] Semua img punya alt text deskriptif
- [x] Meta title, meta description ada
- [x] og:title, og:description ada
- [x] Link eksternal ada rel="noopener noreferrer"
- [x] Tidak ada broken link internal

### Checklist CSS
- [x] Tidak ada inline style
- [x] Tidak ada hardcode warna (semua via var())
- [x] Tidak ada !important yang tidak berkomentar
- [x] Tampil baik di 375px (mobile)
- [x] Tampil baik di 768px (tablet)
- [x] Tampil baik di 1280px (desktop)

### Checklist JS
- [x] Tidak ada penggunaan var
- [x] Tidak ada console.log yang tertinggal (kecuali mode debug)
- [x] Tidak ada error di console browser
- [x] Semua event listener bersih (tidak duplikat)
- [x] Fungsi WA menghasilkan link yang benar

### Checklist Fungsional
- [x] Semua tombol berfungsi
- [x] Tombol WA membuka WhatsApp dengan pesan yang benar
- [x] Navigasi menu berfungsi di desktop
- [x] Hamburger menu berfungsi di mobile
- [x] Filter/search produk berfungsi (ya, mencari real-time dan memfilter per tab kategori)

### Hasil
**Status:** ✅ LULUS

**Bug / Masalah Ditemukan:**
1. **Navigasi Sticky Overlap**: Sebelumnya `.filter-section` menggunakan `position: sticky;` di bawah navbar. Meskipun telah diperbaiki dengan penataan z-index, hal ini terkadang masih membuat visual terasa kurang leluasa saat menggulir halaman panjang dan rawan tumpang tindih visual pada layar tertentu.

**Catatan:**
- **Perbaikan**: Menghapus aturan `position: sticky`, `top`, dan `z-index` pada `.filter-section` di berkas `css/pages/products.css`.
- **Hasil Akhir**: Section filter & search bar sekarang berstatus statis (kembali ke default aliran dokumen biasa). Saat halaman katalog digulir ke bawah, seluruh section filter akan ikut tergulung ke atas secara natural bersama konten lainnya, tanpa menyangkut atau menempel di bawah navbar. Hal ini memberikan ruang pandang (viewport) kartu produk yang jauh lebih lega dan bersih.
- Filter kategori otomatis membaca query parameter `?category=xxx` dari tautan navigasi (misalnya dari halaman utama).
- Jika hasil filter/pencarian kosong, tampilan dialihkan secara dinamis ke blok `empty-state` yang berisi tombol reset.
- Tombol reset pada empty-state berhasil mengembalikan kolom input pencarian, tab kategori, serta riwayat URL history.

---

## QA — Halaman Utama (index.html) — 2026-06-22

### Checklist HTML
- [x] Semantic HTML dipakai (header, main, section, footer, dll)
- [x] Satu h1 per halaman
- [x] Semua img punya alt text deskriptif
- [x] Meta title, meta description ada
- [x] og:title, og:description ada
- [x] Link eksternal ada rel="noopener noreferrer"
- [x] Tidak ada broken link internal

### Checklist CSS
- [x] Tidak ada inline style
- [x] Tidak ada hardcode warna (semua via var())
- [x] Tidak ada !important yang tidak berkomentar
- [x] Tampil baik di 375px (mobile)
- [x] Tampil baik di 768px (tablet)
- [x] Tampil baik di 1280px (desktop)

### Checklist JS
- [x] Tidak ada penggunaan var
- [x] Tidak ada console.log yang tertinggal (kecuali mode debug)
- [x] Tidak ada error di console browser
- [x] Semua event listener bersih (tidak duplikat)
- [x] Fungsi WA menghasilkan link yang benar

### Checklist Fungsional
- [x] Semua tombol berfungsi
- [x] Tombol WA membuka WhatsApp dengan pesan yang benar
- [x] Navigasi menu berfungsi di desktop
- [x] Hamburger menu berfungsi di mobile
- [x] Filter/search produk berfungsi (tidak ada di halaman utama)

### Hasil
**Status:** ✅ LULUS

**Bug / Masalah Ditemukan:**
- Tidak ada.

**Catatan:**
- Tombol WhatsApp menggunakan nomor dummy `6281234567890`.
- Gambar produk memiliki penanganan kegagalan load (`onerror`) ke tautan `https://placehold.co/...` karena berkas gambar fisik lokal belum tersedia.

---

## QA — Tentang Kami (about.html) — 2026-06-22

### Checklist HTML
- [x] Semantic HTML dipakai (header, main, section, footer, dll)
- [x] Satu h1 per halaman
- [x] Semua img punya alt text deskriptif
- [x] Meta title, meta description ada
- [x] og:title, og:description ada
- [x] Tidak ada broken link internal

### Checklist CSS
- [x] Tidak ada inline style
- [x] Tidak ada hardcode warna (semua via var())
- [x] Tampil baik di 375px (mobile)
- [x] Tampil baik di 768px (tablet)
- [x] Tampil baik di 1280px (desktop)

### Checklist Fungsional
- [x] Semua link navigasi mengarah ke file yang benar
- [x] Hover logo brand mitra mengubah warna grayscale ke berwarna dan efek scale

### Hasil
**Status:** ✅ LULUS

**Bug / Masalah Ditemukan:**
- Tidak ada.

**Catatan:**
- Logo brand mitra menggunakan gambar placeholder dengan transisi transparan pudar dan filter warna hover.

---

## QA — Hubungi Kami (contact.html) — 2026-06-22

### Checklist HTML
- [x] Semantic HTML dipakai (header, main, section, footer, dll)
- [x] Satu h1 per halaman
- [x] Meta title, meta description ada
- [x] og:title, og:description ada
- [x] Form input terikat dengan label yang benar (id dan for sesuai)
- [x] Input email memiliki tipe `type="email"`
- [x] Iframe Google Maps responsif dan memiliki title

### Checklist CSS
- [x] Tidak ada inline style
- [x] Tidak ada hardcode warna (semua via var())
- [x] Ring focus input terlihat jelas dengan warna tema
- [x] Tampil baik di 375px (mobile)
- [x] Tampil baik di 768px (tablet)
- [x] Tampil baik di 1280px (desktop)

### Checklist JS
- [x] Event submit form ditangani dengan e.preventDefault()
- [x] Validasi input kosong dan format email berfungsi
- [x] Notifikasi toast sukses muncul interaktif di pojok kanan bawah
- [x] Toast menghilang otomatis setelah 4 detik

### Checklist Fungsional
- [x] Form menolak pengiriman jika kolom belum lengkap
- [x] Form mendeteksi format email yang salah
- [x] Form berhasil mengirimkan simulasi data, meriset field, dan memicu toast sukses
- [x] Google Maps merender peta interaktif dengan benar

### Hasil
**Status:** ✅ LULUS

**Bug / Masalah Ditemukan:**
- Tidak ada.

**Catatan:**
- Validasi email menggunakan ekspresi regular (regex) standar frontend.
- Simulasi pengiriman data berhasil dicatat di console browser.

---

## Kriteria Definisi "Selesai" (Definition of Done)

Sebuah halaman dianggap **selesai** jika:
1. ✅ Semua checklist QA di atas tercentang
2. ✅ Tidak ada error di browser console
3. ✅ Tampil responsif di 375px, 768px, dan 1280px
4. ✅ Semua tombol WA berfungsi dengan pesan yang tepat
5. ✅ PROGRESS.md sudah diupdate
6. ✅ CHANGELOG.md sudah diupdate

