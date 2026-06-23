# DESIGN_SYSTEM.md — Sistem Desain

## Tema Visual
**Profesional, Modern, Terpercaya** — kesan teknologi yang bersih dan tidak berlebihan.
Tidak terlalu formal, tapi juga tidak kasual. Target: IT staff dan pemilik bisnis.

---

## Warna (CSS Custom Properties)

Semua warna WAJIB didefinisikan sebagai variabel di `:root` dan dipakai dari sana.

```css
:root {
  /* Primary — Biru teknologi, warna utama brand */
  --color-primary:        #0B5CFF;
  --color-primary-dark:   #0040CC;
  --color-primary-light:  #E8F0FF;

  /* Accent — Oranye untuk CTA penting (tombol beli, WhatsApp) */
  --color-accent:         #FF6B00;
  --color-accent-dark:    #CC5500;
  --color-accent-light:   #FFF0E6;

  /* Neutral */
  --color-bg:             #F8F9FC;   /* background halaman */
  --color-surface:        #FFFFFF;   /* background card, navbar */
  --color-border:         #E2E8F0;   /* garis pembatas */

  /* Text */
  --color-text-primary:   #1A202C;   /* teks utama */
  --color-text-secondary: #4A5568;   /* teks pendukung */
  --color-text-muted:     #A0AEC0;   /* placeholder, label kecil */
  --color-text-inverse:   #FFFFFF;   /* teks di atas background gelap */

  /* Status */
  --color-success:        #22C55E;
  --color-warning:        #F59E0B;
  --color-danger:         #EF4444;
}
```

---

## Typography

```css
:root {
  --font-heading: 'Poppins', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;

  /* Scale */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */

  /* Weight */
  --font-normal:    400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;

  /* Line height */
  --leading-tight:  1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Aturan Heading
- `h1` — font-size: `--text-4xl`, weight: `--font-bold`, font: `--font-heading`
- `h2` — font-size: `--text-3xl`, weight: `--font-bold`, font: `--font-heading`
- `h3` — font-size: `--text-2xl`, weight: `--font-semibold`, font: `--font-heading`
- `h4` — font-size: `--text-xl`, weight: `--font-semibold`, font: `--font-body`
- Body — font-size: `--text-base`, weight: `--font-normal`, font: `--font-body`

---

## Spacing

```css
:root {
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
}
```

---

## Border Radius

```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;  /* untuk pill/badge */
}
```

---

## Shadow

```css
:root {
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
  --shadow-card: 0 2px 8px rgba(11,92,255,0.08);
}
```

---

## Komponen UI

### Tombol (Button)

```
.btn-primary   → background: --color-primary, text: putih
.btn-accent    → background: --color-accent, text: putih  [untuk beli/WA]
.btn-outline   → border: --color-primary, text: --color-primary
.btn-ghost     → tanpa border, text: --color-primary, hover: --color-primary-light
```

Semua tombol:
- border-radius: `--radius-md`
- padding: `--space-3` vertical, `--space-6` horizontal
- font-weight: `--font-semibold`
- transition: `all 0.2s ease`
- cursor: pointer

### Card Produk

- background: `--color-surface`
- border: `1px solid var(--color-border)`
- border-radius: `--radius-lg`
- shadow: `--shadow-card`
- overflow: hidden
- Hover: `transform: translateY(-4px)`, shadow: `--shadow-md`
- transition: `all 0.25s ease`

### Navbar

- background: `--color-surface`
- border-bottom: `1px solid var(--color-border)`
- height: 64px (desktop), 56px (mobile)
- position: sticky, top: 0, z-index: 100
- Logo kiri, menu tengah/kanan, tombol WA paling kanan

### Badge / Label

```
.badge-new       → background: --color-success (hijau)
.badge-bestseller→ background: --color-accent (oranye)
.badge-limited   → background: --color-danger (merah)
```

Semua badge: font-size `--text-xs`, font-weight `--font-semibold`, border-radius `--radius-full`, padding 2px 8px, text: putih

---

## Layout

- Max-width konten: `1200px`, centered dengan `margin: 0 auto`
- Padding horizontal halaman: `--space-4` (mobile), `--space-8` (desktop)
- Section padding vertical: `--space-16` (desktop), `--space-10` (mobile)
- Grid produk: 4 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile)

---

## Breakpoints

```css
/* Mobile first */
/* sm  */ @media (min-width: 640px)  { }
/* md  */ @media (min-width: 768px)  { }
/* lg  */ @media (min-width: 1024px) { }
/* xl  */ @media (min-width: 1280px) { }
```

---

## Aturan Desain Wajib
- ✅ Selalu gunakan variabel CSS, jangan hardcode warna/ukuran
- ✅ Setiap gambar wajib ada `alt` text yang deskriptif
- ✅ Kontras warna minimum 4.5:1 (aksesibilitas)
- ✅ Semua link/tombol harus punya `:focus` state yang terlihat
- ✅ Tombol WhatsApp SELALU berwarna accent (oranye), bukan biru
- ❌ Jangan pakai warna selain yang ada di variabel di atas tanpa izin eksplisit
