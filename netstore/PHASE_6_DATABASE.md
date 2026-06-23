# FASE 6 — Migrasi Database Dinamis (Google Sheets)

## Konteks
Kita akan mengubah sumber data produk NetStore yang sebelumnya di-hardcode di dalam array JavaScript lokal, menjadi dinamis dengan mengambil data dari Google Sheets yang dipublikasikan sebagai CSV. Ini akan memungkinkan penambahan katalog produk baru secara otomatis tanpa menyentuh kode.

## Target URL Database
URL CSV dari Google Sheets yang akan di-fetch adalah:
`https://docs.google.com/spreadsheets/d/1mZyQ3XCA79vkWjQ0TAnk7EbkDeCxWlL9-sosRkOMXmw/pub?output=csv`

---

## Tugas 1: Modifikasi `js/data/products.js`
Ubah isi file ini sepenuhnya untuk menangani logic pengambilan data (fetch) dan parsing CSV ke Object JavaScript.

**Kriteria Kode:**
1. Buat konstanta `SHEET_URL` dengan link CSV di atas.
2. Buat fungsi helper `csvToObjects(csvText)` untuk memecah teks CSV menjadi Array of Objects.
   - Pisahkan string berdasarkan koma (asumsi isi kolom tidak memakai koma biasa).
   - Pastikan nilai `price` dan `originalPrice` dikonversi menjadi Number.
   - Konversi `inStock` menjadi Boolean.
   - Gabungkan kolom `image1`, `image2`, dan `image3` ke dalam satu array bernama `images`.
   - Bangun ulang string `whatsappText` (misal: "Halo, saya ingin tanya tentang [nama_produk]").
   - Khusus kolom `specs`, karena di sheets ditulis dalam bentuk string panjang, tangani dengan benar agar bisa dirender menjadi teks atau diabaikan jika formatnya menyulitkan parsing koma sederhana (buat se-robust mungkin).
3. Buat fungsi `async function fetchProductsFromSheets()` yang melakukan `fetch()` ke `SHEET_URL`, memanggil `csvToObjects()`, dan me-return array produk.

---

## Tugas 2: Modifikasi `js/products.js` (Halaman Katalog)
Ubah alur pemanggilan data agar mendukung asynchronous fetch.

**Kriteria Kode:**
1. Buat fungsi `initKatalog()` dengan tipe `async`.
2. Panggil `await fetchProductsFromSheets()`.
3. Gunakan data dari fetch tersebut untuk dimasukkan ke fungsi render HTML produk yang sudah ada (misalnya `renderProducts(products)`).
4. Tambahkan state "Loading..." secara visual ke dalam DOM selama proses fetch berlangsung agar UX tetap bagus.
5. Jalankan `initKatalog()` saat `DOMContentLoaded`.

---

## Tugas 3: Modifikasi `js/product-detail.js` (Halaman Detail)
Halaman detail juga harus mengambil data langsung dari sumber terbaru untuk mencocokkan parameter URL (`?id=`).

**Kriteria Kode:**
1. Tangkap parameter URL `id`.
2. Buat fungsi `async` untuk memanggil `fetchProductsFromSheets()`.
3. Lakukan metode `.find()` pada array hasil fetch untuk mencari produk yang cocok dengan ID.
4. Render data produk tersebut ke galeri, deskripsi, harga, dan tombol WhatsApp.
5. Handle error/404 jika `id` tidak ditemukan dari hasil fetch Sheets.

**Pesan untuk AI (Antigravity):**
Tolong tuliskan implementasi lengkap dari ketiga file JS di atas.