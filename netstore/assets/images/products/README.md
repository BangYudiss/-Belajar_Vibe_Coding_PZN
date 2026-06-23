# Folder Gambar Produk NetStore

Tempatkan seluruh berkas gambar produk asli Anda di dalam folder ini. 

### Ketentuan Format File Gambar:
1. **Format File**: Disarankan menggunakan format `.jpg`, `.png`, atau `.webp`.
2. **Dimensi Rekomendasi**: Rasio **4:3** atau **16:9** (misalnya `600x450` piksel) agar tampilan kartu produk di halaman katalog tetap seragam dan tidak terdistorsi.
3. **Penamaan File**: Gunakan huruf kecil tanpa spasi (gunakan tanda hubung `-` sebagai pemisah). Contoh:
   - `tp-link-eap670.jpg` (Untuk gambar utama)
   - `tp-link-eap670-ports.jpg` (Untuk gambar ports/galeri)
   - `tp-link-eap670-box.jpg` (Untuk gambar box retail/galeri)

### Cara Mendaftarkannya di Kode:
Setelah menyalin gambar ke folder ini, buka berkas `js/data/products.js` dan perbarui array `images` pada produk terkait dengan jalur relatifnya.
Contoh:
```javascript
images: [
  "assets/images/products/tp-link-eap670.jpg",
  "assets/images/products/tp-link-eap670-ports.jpg",
  "assets/images/products/tp-link-eap670-box.jpg"
]
```
