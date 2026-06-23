/**
 * Basis Data Produk NetStore (Dinamis dari Google Sheets)
 * Mengambil data katalog produk secara realtime dari Google Sheets API (CSV).
 */

let products = [];

// URL utama dari panduan migrasi
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1mZyQ3XCA79vkWjQ0TAnk7EbkDeCxWlL9-sosRkOMXmw/pub?output=csv';

// URL cadangan jika spreadsheet tidak dipublikasikan ke web secara eksplisit (hanya dibagikan dengan link)
const SHEET_FALLBACK_URL = 'https://docs.google.com/spreadsheets/d/1mZyQ3XCA79vkWjQ0TAnk7EbkDeCxWlL9-sosRkOMXmw/export?format=csv';

/**
 * Memecah baris CSV menjadi array kolom, menangani tanda kutip ganda secara robust
 * @param {string} line Baris teks CSV
 * @returns {string[]} Array kolom
 */
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // lewati kutip berikutnya
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

/**
 * Mengonversi teks CSV dari Google Sheets menjadi Array of Objects
 * @param {string} csvText Konten CSV mentah
 * @returns {Object[]} Array objek produk
 */
function csvToObjects(csvText) {
  if (!csvText) return [];
  
  // Pisahkan baris dengan regex untuk menangani ujung baris CRLF atau LF
  const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
  if (lines.length < 2) return [];

  // Parse header
  const headers = parseCSVLine(lines[0]).map(h => h.trim());
  const parsedProducts = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length < headers.length) continue;

    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] !== undefined ? values[index].trim() : '';
    });

    // Validasi ID produk
    if (!obj.id) continue;

    // Parsing tipe data & rekonstruksi struktur objek
    const product = {
      id: obj.id,
      name: obj.name || '',
      brand: obj.brand || '',
      category: obj.category || '',
      price: Number(obj.price) || 0,
      originalPrice: obj.originalPrice ? (Number(obj.originalPrice) || null) : null,
      badge: obj.badge || null,
      images: [obj.image1, obj.image2, obj.image3].filter(img => img !== undefined && img !== ''),
      shortDesc: obj.shortDesc || '',
      description: obj.description || '',
      inStock: obj.inStock ? obj.inStock.toUpperCase() === 'TRUE' : false,
      whatsappText: `Halo, saya ingin tanya tentang ${obj.name || ''}`
    };

    // Parsing specs yang ditulis dalam format: "Key1: Value1 | Key2: Value2"
    product.specs = {};
    if (obj.specs) {
      const parts = obj.specs.split('|');
      parts.forEach(part => {
        const colonIndex = part.indexOf(':');
        if (colonIndex !== -1) {
          const key = part.substring(0, colonIndex).trim();
          const value = part.substring(colonIndex + 1).trim();
          if (key && value) {
            product.specs[key] = value;
          }
        }
      });
    }

    parsedProducts.push(product);
  }

  return parsedProducts;
}

/**
 * Mengambil data produk dari Google Sheets secara asynchronous
 * @returns {Promise<Object[]>}
 */
async function fetchProductsFromSheets() {
  try {
    const response = await fetch(SHEET_URL);
    let csvText = '';
    
    if (response.ok) {
      csvText = await response.text();
      // Deteksi jika respon adalah HTML (redirect halaman login Google)
      if (csvText.trim().startsWith('<') || csvText.includes('<!doctype html>') || csvText.includes('<!DOCTYPE html>')) {
        throw new Error("Respon SHEET_URL berbentuk HTML. Mencoba URL cadangan...");
      }
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const fetchedProducts = csvToObjects(csvText);
    products = fetchedProducts;
    return fetchedProducts;
  } catch (error) {
    console.warn("Gagal fetch dari SHEET_URL utama, beralih ke SHEET_FALLBACK_URL:", error);
    try {
      const responseFallback = await fetch(SHEET_FALLBACK_URL);
      if (!responseFallback.ok) {
        throw new Error(`HTTP error (fallback)! status: ${responseFallback.status}`);
      }
      const csvText = await responseFallback.text();
      
      if (csvText.trim().startsWith('<') || csvText.includes('<!doctype html>') || csvText.includes('<!DOCTYPE html>')) {
        throw new Error("Respon SHEET_FALLBACK_URL berbentuk HTML.");
      }
      
      const fetchedProducts = csvToObjects(csvText);
      products = fetchedProducts;
      return fetchedProducts;
    } catch (fallbackError) {
      console.error("Gagal total mengambil data dari Google Sheets:", fallbackError);
      throw fallbackError;
    }
  }
}
