/**
 * Script Halaman Kontak NetStore
 * Mengatur validasi formulir kirim pesan dan menampilkan notifikasi toast sukses.
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

/**
 * Menginisialisasi logika pengiriman formulir kontak
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // 1. Ambil nilai input
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');

    if (!nameInput || !emailInput || !subjectInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // 2. Validasi Sederhana
    if (name === '' || email === '' || subject === '' || message === '') {
      showToast('Galat Pengiriman', 'Mohon isi semua kolom formulir dengan benar.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showToast('Email Tidak Valid', 'Format alamat email yang Anda masukkan salah.', 'error');
      return;
    }

    // 3. Simulasi Pengiriman Sukses (karena out-of-scope backend)
    console.log('Form data submitted:', { name, email, subject, message });
    
    // Tampilkan notifikasi toast sukses
    showToast(
      'Pesan Berhasil Dikirim',
      `Terima kasih ${name}, pesan Anda telah kami terima. Kami akan segera menghubungi Anda.`,
      'success'
    );

    // Reset formulir
    form.reset();
  });
}

/**
 * Memvalidasi format email menggunakan regex
 * @param {string} email Alamat email yang akan divalidasi
 * @returns {boolean} True jika format valid
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Menampilkan notifikasi toast dinamis di pojok kanan bawah
 * @param {string} title Judul notifikasi
 * @param {string} msg Isi pesan detail
 * @param {string} type Tipe notifikasi ('success' atau 'error')
 */
function showToast(title, msg, type = 'success') {
  // Cari elemen toast yang sudah ada atau buat baru
  let toast = document.getElementById('contact-toast');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'contact-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  // Set warna border-left berdasarkan tipe
  if (type === 'success') {
    toast.style.borderLeftColor = 'var(--color-success)';
  } else {
    toast.style.borderLeftColor = 'var(--color-danger)';
  }

  // Atur ikon SVG berdasarkan tipe
  const iconSuccess = `
    <svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `;

  const iconError = `
    <svg class="toast-icon" style="color: var(--color-danger);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  `;

  const currentIcon = type === 'success' ? iconSuccess : iconError;

  // Render isi dalam toast
  toast.innerHTML = `
    ${currentIcon}
    <div class="toast-content">
      <span class="toast-title">${title}</span>
      <span class="toast-message">${msg}</span>
    </div>
  `;

  // Tampilkan toast
  toast.classList.add('show');

  // Sembunyikan otomatis setelah 4 detik
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
