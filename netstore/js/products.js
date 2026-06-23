/**
 * Script Halaman Katalog Produk NetStore
 * Menangani pencarian, filter kategori, reset filter, dan render katalog dinamis.
 */

document.addEventListener('DOMContentLoaded', () => {
  initKatalog();
});

/**
 * Menginisialisasi katalog produk secara asynchronous dengan memanggil fetch API
 */
async function initKatalog() {
  const productsGrid = document.getElementById('products-grid');
  
  if (productsGrid) {
    // Tampilkan Loading State visual secara elegan
    productsGrid.innerHTML = `
      <div class="loading-state" style="grid-column: 1 / -1; text-align: center; padding: var(--space-12) 0;">
        <div class="spinner" style="border: 4px solid rgba(255,255,255,0.1); border-left-color: var(--color-accent); border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto var(--space-4) auto;"></div>
        <p style="color: var(--color-text-muted);">Memuat katalog produk NetStore...</p>
      </div>
    `;
    
    // Inject spinner animation keyframes if not exists
    if (!document.getElementById('spinner-style')) {
      const style = document.createElement('style');
      style.id = 'spinner-style';
      style.innerHTML = `@keyframes spin { to { transform: rotate(360deg); } }`;
      document.head.appendChild(style);
    }
  }

  try {
    // Ambil data produk secara realtime
    await fetchProductsFromSheets();
    
    // Setelah data berhasil terambil (global variable 'products' sudah terisi), inisialisasi filter
    initCatalogFilters();
  } catch (error) {
    console.error('Gagal menginisialisasi katalog produk:', error);
    if (productsGrid) {
      productsGrid.innerHTML = `
        <div class="error-state" style="grid-column: 1 / -1; text-align: center; padding: var(--space-12) 0; color: var(--color-danger);">
          <p class="error-msg">Gagal memuat produk dari server. Silakan muat ulang halaman atau hubungi administrator.</p>
        </div>
      `;
    }
  }
}


/**
 * Menginisialisasi sistem filter, pencarian, dan render produk
 */
function initCatalogFilters() {
  const searchInput = document.getElementById('search-input');
  const tabs = document.querySelectorAll('.filter-tab');
  const productsGrid = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-state');
  const resetBtn = document.getElementById('btn-reset-filter');

  if (!productsGrid || !emptyState) return;

  // Memastikan data produk dari products.js global termuat
  if (typeof products === 'undefined' || !Array.isArray(products)) {
    console.error('Error: Data produk tidak dapat dimuat.');
    productsGrid.innerHTML = '<p class="error-msg">Gagal memuat produk. Hubungi administrator.</p>';
    return;
  }

  // State pencarian & filter
  let activeCategory = 'all';
  let searchQuery = '';

  // 1. Membaca parameter URL (?category=xxx) jika diklik dari beranda
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  
  if (categoryParam) {
    // Memvalidasi apakah kategori parameter ada di daftar tab
    let isValidCategory = false;
    tabs.forEach(tab => {
      if (tab.dataset.category === categoryParam) {
        isValidCategory = true;
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    if (isValidCategory) {
      activeCategory = categoryParam;
    } else {
      // Jika kategori di parameter ngawur, set ke 'all' (semua)
      const allTab = document.querySelector('.filter-tab[data-category="all"]');
      if (allTab) allTab.classList.add('active');
    }
  } else {
    // Set default 'all' active jika tidak ada param
    const allTab = document.querySelector('.filter-tab[data-category="all"]');
    if (allTab) allTab.classList.add('active');
  }

  // 2. Fungsi utama filter dan render
  const filterAndRender = () => {
    // Filter berdasarkan kategori dan pencarian kata kunci
    const filteredProducts = products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
                            product.name.toLowerCase().includes(searchLower) || 
                            product.brand.toLowerCase().includes(searchLower) ||
                            product.shortDesc.toLowerCase().includes(searchLower);

      return matchesCategory && matchesSearch;
    });

    // Mengosongkan grid
    productsGrid.innerHTML = '';

    if (filteredProducts.length === 0) {
      // Tampilkan empty state, sembunyikan grid
      productsGrid.style.display = 'none';
      emptyState.classList.add('active');
    } else {
      // Sembunyikan empty state, tampilkan grid
      productsGrid.style.display = 'grid';
      emptyState.classList.remove('active');

      // Render setiap kartu produk
      filteredProducts.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';

        // Badge status
        let badgeHTML = '';
        if (product.badge) {
          const badgeClass = `badge-${product.badge.replace('-', '')}`;
          badgeHTML = `<span class="badge ${badgeClass} product-card-badge">${product.badge}</span>`;
        }

        // Harga coret
        let originalPriceHTML = '';
        if (product.originalPrice) {
          originalPriceHTML = `<span class="product-card-price-original">Rp ${product.originalPrice.toLocaleString('id-ID')}</span>`;
        }

        card.innerHTML = `
          ${badgeHTML}
          <div class="product-card-image-wrap ${product.inStock ? '' : 'out-of-stock'}">
            <!-- TODO: ganti dengan foto asli produk -->
            <img 
              src="${product.images[0]}" 
              alt="${product.name}" 
              class="product-card-image"
              loading="lazy"
              referrerpolicy="no-referrer"
              onerror="this.onerror=null; this.src='https://placehold.co/600x450?text=${encodeURIComponent(product.name)}';"
            >
          </div>
          <div class="product-card-body">
            <span class="product-card-brand">${product.brand}</span>
            <h3 class="product-card-title">${product.name}</h3>
            <p class="product-card-desc">${product.shortDesc}</p>
            <div class="product-card-price-wrap">
              ${originalPriceHTML}
              <span class="product-card-price">Rp ${product.price.toLocaleString('id-ID')}</span>
            </div>
            <div class="product-card-actions">
              <a href="product-detail.html?id=${product.id}" class="btn btn-outline" id="btn-detail-${product.id}">Detail Produk</a>
              <button class="btn btn-accent" id="btn-buy-${product.id}" onclick="openWhatsApp('${product.name}', '${product.id}')" ${product.inStock ? '' : 'disabled'}>
                ${product.inStock ? 'Beli via WA' : 'Habis'}
              </button>
            </div>
          </div>
        `;
        productsGrid.appendChild(card);
      });
    }
  };

  // 3. Event Listener untuk Tab Kategori
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Mengubah tab aktif
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      activeCategory = tab.dataset.category;
      filterAndRender();

      // Perbarui URL secara halus tanpa reload
      const newUrl = activeCategory === 'all' 
        ? window.location.pathname 
        : `${window.location.pathname}?category=${activeCategory}`;
      window.history.replaceState({ path: newUrl }, '', newUrl);
    });
  });

  // 4. Event Listener untuk Input Pencarian
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      filterAndRender();
    });
  }

  // 5. Event Listener untuk Tombol Reset pada Empty State
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      searchQuery = '';
      activeCategory = 'all';
      if (searchInput) searchInput.value = '';
      
      tabs.forEach(t => {
        if (t.dataset.category === 'all') {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });

      // Kembalikan URL ke polos
      window.history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
      filterAndRender();
    });
  }

  // Render Pertama Kali
  filterAndRender();
}
