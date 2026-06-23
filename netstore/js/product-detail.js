/**
 * Script Halaman Detail Produk NetStore
 * Menangani parsing query ID, memuat data produk, rendering galeri foto, dan tabel spesifikasi.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProductDetail();
});

/**
 * Menginisialisasi halaman detail produk berdasarkan ID di parameter URL
 */
function initProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  const detailLayout = document.getElementById('product-detail-layout');
  const errorContainer = document.getElementById('error-container');

  if (!detailLayout || !errorContainer) return;

  // 1. Memeriksa ketersediaan database produk
  if (typeof products === 'undefined' || !Array.isArray(products)) {
    console.error('Error: Basis data produk tidak ditemukan.');
    showErrorState('Gagal Memuat Sistem', 'Terjadi kesalahan sistem internal saat memuat data produk. Hubungi tim teknis kami.');
    return;
  }

  // 2. Jika ID kosong, tampilkan error
  if (!productId) {
    showErrorState('Produk Tidak Ditentukan', 'Anda belum memilih produk untuk dilihat. Silakan kembali ke katalog produk kami.');
    return;
  }

  // 3. Cari produk berdasarkan ID (slug string)
  const product = products.find(p => p.id === productId);

  // 4. Jika produk tidak ditemukan, tampilkan error
  if (!product) {
    showErrorState('Produk Tidak Ditemukan', `Maaf, produk dengan ID "${productId}" tidak terdaftar di NetStore atau telah dihapus.`);
    return;
  }

  // 5. Render Detail Produk
  detailLayout.style.display = 'block';
  errorContainer.classList.remove('active');

  // Update Page Title and SEO Meta Description
  document.title = `${product.name} | NetStore`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', `${product.shortDesc}. Beli ${product.name} dengan garansi resmi dan penawaran terbaik hanya di NetStore.`);
  }

  // Breadcrumbs
  const breadcrumbCategory = document.getElementById('breadcrumb-category');
  const breadcrumbProduct = document.getElementById('breadcrumb-product');
  if (breadcrumbCategory && breadcrumbProduct) {
    // Format nama kategori agar rapi (kapital)
    const categoryName = product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    breadcrumbCategory.textContent = categoryName;
    breadcrumbCategory.href = `products.html?category=${product.category}`;
    breadcrumbProduct.textContent = product.name;
  }

  // Badge Status
  const badgeContainer = document.getElementById('product-badge-wrap');
  if (badgeContainer) {
    if (product.badge) {
      const badgeClass = `badge-${product.badge.replace('-', '')}`;
      badgeContainer.innerHTML = `<span class="badge ${badgeClass}">${product.badge}</span>`;
      badgeContainer.style.display = 'block';
    } else {
      badgeContainer.style.display = 'none';
    }
  }

  // Brand, Nama, Deskripsi Singkat
  const brandEl = document.getElementById('product-brand');
  const titleEl = document.getElementById('product-title');
  const shortDescEl = document.getElementById('product-short-desc');

  if (brandEl) brandEl.textContent = product.brand;
  if (titleEl) titleEl.textContent = product.name;
  if (shortDescEl) shortDescEl.textContent = product.shortDesc;

  // Harga & Diskon
  const priceContainer = document.getElementById('product-price-wrap');
  if (priceContainer) {
    let originalPriceHTML = '';
    if (product.originalPrice) {
      originalPriceHTML = `<span class="info-price-original">Rp ${product.originalPrice.toLocaleString('id-ID')}</span>`;
    }
    priceContainer.innerHTML = `
      ${originalPriceHTML}
      <span class="info-price">Rp ${product.price.toLocaleString('id-ID')}</span>
    `;
  }

  // Deskripsi Panjang
  const longDescEl = document.getElementById('product-long-desc');
  if (longDescEl) {
    // Membagi paragraf berdasarkan baris baru (\n) agar tampilan rapi
    const paragraphs = product.description.split('\n').filter(p => p.trim() !== '');
    longDescEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  // Tabel Spesifikasi Teknis
  const specsBody = document.getElementById('specs-table-body');
  if (specsBody) {
    specsBody.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <th>${key}</th>
        <td>${value}</td>
      `;
      specsBody.appendChild(row);
    }
  }

  // Tombol Beli & Tanya Konsultasi
  const buyBtn = document.getElementById('btn-buy-now');
  const consultBtn = document.getElementById('btn-consult-now');

  if (buyBtn) {
    buyBtn.onclick = () => {
      // Memanggil helper whatsapp.js untuk buka chat
      if (typeof openWhatsApp === 'function') {
        openWhatsApp(product.name, product.id);
      } else {
        console.error('Error: Fungsi openWhatsApp tidak tersedia.');
      }
    };
  }

  if (consultBtn) {
    consultBtn.onclick = () => {
      if (typeof openWhatsAppGeneral === 'function') {
        openWhatsAppGeneral();
      }
    };
  }

  // Galeri Foto
  initProductGallery(product);

  // Render Produk Terkait
  renderRelatedProducts(product);
}

/**
 * Mengatur interaktivitas galeri foto utama dan thumbnail produk
 * @param {Object} product Objek data produk
 */
function initProductGallery(product) {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbsContainer = document.getElementById('gallery-thumbnails');

  if (!mainImg || !thumbsContainer) return;

  // Bersihkan thumbnail
  thumbsContainer.innerHTML = '';

  const images = product.images;

  // Set gambar utama awal
  mainImg.src = images[0];
  mainImg.alt = product.name;
  
  // Set fallback gambar utama
  mainImg.onerror = () => {
    mainImg.onerror = null;
    mainImg.src = `https://placehold.co/600x450?text=${encodeURIComponent(product.name)}`;
  };

  // Render Thumbnails
  images.forEach((imgSrc, index) => {
    const thumb = document.createElement('img');
    thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
    thumb.src = imgSrc;
    thumb.alt = `${product.name} - Foto ${index + 1}`;
    
    // Fallback thumbnail jika berkas fisik tidak ada
    thumb.onerror = () => {
      thumb.onerror = null;
      thumb.src = `https://placehold.co/100x75?text=Foto+${index + 1}`;
    };

    // Event listener saat thumbnail diklik
    thumb.addEventListener('click', () => {
      // Hapus kelas aktif dari seluruh thumbnail
      const allThumbs = thumbsContainer.querySelectorAll('.gallery-thumb');
      allThumbs.forEach(t => t.classList.remove('active'));

      // Aktifkan thumbnail yang diklik
      thumb.classList.add('active');

      // Animasi pergantian foto utama (fade out -> ubah src -> fade in)
      mainImg.classList.add('fade-out');
      setTimeout(() => {
        mainImg.src = thumb.src;
        mainImg.classList.remove('fade-out');
      }, 200);
    });

    thumbsContainer.appendChild(thumb);
  });
}

/**
 * Menampilkan tampilan error jika produk tidak terdaftar atau bermasalah
 * @param {string} title Judul error
 * @param {string} desc Deskripsi error
 */
function showErrorState(title, desc) {
  const detailLayout = document.getElementById('product-detail-layout');
  const errorContainer = document.getElementById('error-container');
  const errTitle = document.getElementById('error-title');
  const errDesc = document.getElementById('error-desc');

  if (detailLayout) detailLayout.style.display = 'none';
  if (errorContainer) {
    errorContainer.classList.add('active');
    if (errTitle) errTitle.textContent = title;
    if (errDesc) errDesc.textContent = desc;
  }
}

/**
 * Merender daftar produk terkait di bagian bawah halaman detail
 * @param {Object} currentProduct Objek produk yang sedang aktif dibuka
 */
function renderRelatedProducts(currentProduct) {
  const relatedGrid = document.getElementById('related-products-grid');
  if (!relatedGrid) return;

  // 1. Saring produk kategori yang sama (selain produk saat ini)
  let filtered = products.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id);

  // 2. Jika produk sejenis kurang dari 4, tambahkan produk dari kategori lain
  if (filtered.length < 4) {
    const otherProducts = products.filter(p => p.id !== currentProduct.id && p.category !== currentProduct.category);
    filtered = filtered.concat(otherProducts);
  }

  // 3. Batasi hanya maksimal 4 produk terkait yang ditampilkan
  const relatedList = filtered.slice(0, 4);

  // 4. Bersihkan dan render
  relatedGrid.innerHTML = '';
  relatedList.forEach(prod => {
    const card = document.createElement('article');
    card.className = 'product-card';

    // Badge status
    let badgeHTML = '';
    if (prod.badge) {
      const badgeClass = `badge-${prod.badge.replace('-', '')}`;
      badgeHTML = `<span class="badge ${badgeClass} product-card-badge">${prod.badge}</span>`;
    }

    // Harga coret
    let originalPriceHTML = '';
    if (prod.originalPrice) {
      originalPriceHTML = `<span class="product-card-price-original">Rp ${prod.originalPrice.toLocaleString('id-ID')}</span>`;
    }

    card.innerHTML = `
      ${badgeHTML}
      <div class="product-card-image-wrap">
        <img 
          src="${prod.images[0]}" 
          alt="${prod.name}" 
          class="product-card-image"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://placehold.co/600x450?text=${encodeURIComponent(prod.name)}';"
        >
      </div>
      <div class="product-card-body">
        <span class="product-card-brand">${prod.brand}</span>
        <h3 class="product-card-title">${prod.name}</h3>
        <p class="product-card-desc">${prod.shortDesc}</p>
        <div class="product-card-price-wrap">
          ${originalPriceHTML}
          <span class="product-card-price">Rp ${prod.price.toLocaleString('id-ID')}</span>
        </div>
        <div class="product-card-actions">
          <a href="product-detail.html?id=${prod.id}" class="btn btn-outline" id="btn-detail-${prod.id}">Detail Produk</a>
          <button class="btn btn-accent" id="btn-buy-${prod.id}" onclick="openWhatsApp('${prod.name}', '${prod.id}')">
            Beli via WA
          </button>
        </div>
      </div>
    `;
    relatedGrid.appendChild(card);
  });
}
