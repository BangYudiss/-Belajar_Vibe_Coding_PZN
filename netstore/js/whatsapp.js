/**
 * WhatsApp Helper
 * Berisi fungsi untuk mengarahkan pengguna ke WhatsApp dengan nomor tujuan dummy.
 */

const WHATSAPP_PHONE = "6281234567890"; // Nomor dummy toko

/**
 * Membuka chat WhatsApp untuk pemesanan/tanya produk
 * @param {string} productName - Nama produk yang ditanyakan
 * @param {string} productId - ID unik produk
 */
function openWhatsApp(productName, productId) {
  const text = `Halo NetStore, saya tertarik dengan produk: ${productName} (ID: ${productId}). Apakah stoknya tersedia?`;
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

/**
 * Membuka chat WhatsApp untuk konsultasi umum
 */
function openWhatsAppGeneral() {
  const text = "Halo NetStore, saya ingin bertanya mengenai solusi perangkat jaringan.";
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}
