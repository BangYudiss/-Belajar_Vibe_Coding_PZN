/**
 * Script Global SentraLAN
 * Mengatur interaksi dasar seperti toggle navbar mobile, active link, dan scroll smooth.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarMobile();
  initActiveNavLink();
});

/**
 * Menginisialisasi fungsionalitas menu hamburger (navbar mobile)
 */
function initNavbarMobile() {
  const toggleBtn = document.querySelector('.navbar-toggle');
  const mobileMenu = document.querySelector('.navbar-menu-mobile');
  
  if (!toggleBtn || !mobileMenu) return;

  // Membuat overlay jika belum ada
  let overlay = document.querySelector('.navbar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'navbar-overlay';
    document.body.appendChild(overlay);
  }

  // Fungsi toggle menu
  const toggleMenu = () => {
    toggleBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Mencegah scroll pada body saat menu mobile aktif
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Menutup menu jika link di dalamnya diklik
  const mobileLinks = mobileMenu.querySelectorAll('.navbar-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/**
 * Menandai menu navigasi yang aktif berdasarkan halaman saat ini
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  // Mengambil nama file, misal 'products.html'
  const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    // Memeriksa kesamaan href dengan halaman saat ini
    if (linkHref === currentPage || (currentPage === 'index.html' && linkHref === './') || (currentPage === 'index.html' && linkHref === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
