/**
 * Basis Data Produk NetStore
 * Berisi array objek produk yang berfungsi sebagai sumber data utama website.
 */

const products = [
  {
    id: "tp-link-eap670",
    name: "TP-Link EAP670",
    brand: "TP-Link",
    category: "access-point",
    price: 1850000,
    originalPrice: 2100000,
    badge: "best-seller",
    images: [
      "assets/images/products/tp-link-eap670-1.jpg",
      "assets/images/products/tp-link-eap670-2.jpg",
      "assets/images/products/tp-link-eap670-3.jpg"
    ],
    shortDesc: "AX3000 Ceiling Mount Wi-Fi 6 Access Point",
    description: "TP-Link EAP670 adalah Access Point kelas bisnis yang mendukung teknologi Wi-Fi 6 (802.11ax). Menawarkan kecepatan sinyal nirkabel super cepat hingga 3000 Mbps (2402 Mbps pada frekuensi 5 GHz dan 574 Mbps pada 2.4 GHz). Dilengkapi dengan port Ethernet 2.5 Gbps untuk konektivitas uplink berkecepatan ultra-tinggi yang mendukung PoE+. AP ini sangat cocok untuk kantor, sekolah, hotel, dan area padat pengguna lainnya yang membutuhkan jaringan Wi-Fi stabil, cepat, dan mudah dikelola melalui Omada SDN controller.",
    specs: {
      "Standar Wi-Fi": "Wi-Fi 6 (802.11ax)",
      "Kecepatan Sinyal": "AX3000 (2402 Mbps + 574 Mbps)",
      "Port Ethernet": "1x 2.5 Gbps RJ45 Port",
      "Power Supply": "802.3at PoE+ / 12V DC Adapter",
      "Kapasitas Pengguna": "250+ Perangkat"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang TP-Link EAP670"
  },
  {
    id: "mikrotik-hap-ac2",
    name: "MikroTik hAP ac2 (RBD52G-5HacD2HnD-TC)",
    brand: "MikroTik",
    category: "router",
    price: 1150000,
    originalPrice: 1250000,
    badge: "best-seller",
    images: [
      "assets/images/products/mikrotik-hap-ac2-1.jpg",
      "assets/images/products/mikrotik-hap-ac2-2.jpg",
      "assets/images/products/mikrotik-hap-ac2-3.jpg"
    ],
    shortDesc: "Dual-Concurrent 2.4/5GHz Access Point & Gigabit Router",
    description: "MikroTik hAP ac2 adalah router nirkabel dual-concurrent yang menyediakan cakupan Wi-Fi untuk frekuensi 2.4 GHz dan 5 GHz secara bersamaan. Dilengkapi dengan 5 port Gigabit Ethernet untuk koneksi kabel berkecepatan tinggi. Didukung oleh CPU 4-core 716 MHz and RAM 128 MB, router ini sangat andal untuk mengelola jaringan rumah atau kantor kecil dengan fitur routing canggih bawaan RouterOS (Lisensi Level 4). Perangkat dapat diposisikan berdiri secara vertikal maupun horizontal.",
    specs: {
      "Frekuensi": "2.4 GHz & 5 GHz (Dual Band)",
      "Port Ethernet": "5x 10/100/1000 Mbps Gigabit Ports",
      "Sistem Operasi": "RouterOS (Lisensi Level 4)",
      "CPU": "4-Core 716 MHz (IPQ-4018)",
      "RAM": "128 MB"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang MikroTik hAP ac2"
  },
  {
    id: "ubiquiti-u6-lite",
    name: "Ubiquiti UniFi U6 Lite",
    brand: "Ubiquiti",
    category: "access-point",
    price: 1950000,
    originalPrice: 2200000,
    badge: "new",
    images: [
      "assets/images/products/ubiquiti-u6-lite-1.jpg",
      "assets/images/products/ubiquiti-u6-lite-2.jpg",
      "assets/images/products/ubiquiti-u6-lite-3.jpg"
    ],
    shortDesc: "Compact Wi-Fi 6 Access Point with 1.5 Gbps aggregate throughput",
    description: "Ubiquiti UniFi U6 Lite adalah Access Point Wi-Fi 6 berkinerja tinggi yang didesain ringkas untuk kebutuhan rumah tangga dan bisnis berskala kecil hingga menengah. Mampu menyajikan aggregate throughput rate hingga 1.5 Gbps dengan antena internal MIMO 2x2. AP ini dapat dipasang secara estetis di langit-langit maupun dinding dan dikelola penuh menggunakan UniFi Network Application secara terpusat untuk monitoring real-time dan skalabilitas tak terbatas.",
    specs: {
      "Standar Wi-Fi": "Wi-Fi 6 (802.11ax)",
      "Throughput Rate": "Hingga 1.5 Gbps",
      "Port Ethernet": "1x 10/100/1000 Mbps RJ45 Port",
      "Power Method": "802.3af PoE, Passive PoE (48V)",
      "Dimensi": "Ø160 x 33 mm"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang Ubiquiti UniFi U6 Lite"
  },
  {
    id: "cisco-catalyst-c9200l",
    name: "Cisco Catalyst C9200L-24T-4G-E",
    brand: "Cisco",
    category: "switch",
    price: 24500000,
    originalPrice: 27000000,
    badge: "limited",
    images: [
      "assets/images/products/cisco-catalyst-c9200l-1.jpg",
      "assets/images/products/cisco-catalyst-c9200l-2.jpg",
      "assets/images/products/cisco-catalyst-c9200l-3.jpg"
    ],
    shortDesc: "Catalyst 9200L 24-port Data only Switch, Network Essentials",
    description: "Cisco Catalyst C9200L Switch memperluas kekuatan jaringan berbasis niat serta inovasi perangkat keras dan perangkat lunak Catalyst 9000 ke tingkat penyebaran yang lebih luas. Dengan silsilah keluarganya, switch seri C9200L menawarkan kesederhanaan tanpa kompromi—aman, selalu aktif, dan IT yang disederhanakan. Switch Layer 3 berkinerja tinggi ini memiliki 24 port data Gigabit dengan 4 uplink 1G terintegrasi tipe SFP.",
    specs: {
      "Total Port": "24 Port Gigabit Ethernet",
      "Uplink Ports": "4x 1G SFP",
      "Switching Capacity": "56 Gbps",
      "Forwarding Rate": "41.66 Mpps",
      "Fitur L3": "Static Routing, RIP, OSPF (Basic)"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang Cisco Catalyst C9200L"
  },
  {
    id: "tp-link-sg1008d",
    name: "TP-Link TL-SG1008D",
    brand: "TP-Link",
    category: "switch",
    price: 325000,
    originalPrice: 380000,
    badge: null,
    images: [
      "assets/images/products/tp-link-sg1008d-1.jpg",
      "assets/images/products/tp-link-sg1008d-2.jpg",
      "assets/images/products/tp-link-sg1008d-3.jpg"
    ],
    shortDesc: "8-Port Gigabit Desktop Switch",
    description: "TP-Link TL-SG1008D Switch Desktop Gigabit 8-Port menyediakan cara mudah untuk beralih ke Gigabit Ethernet. Tingkatkan kecepatan server jaringan Anda dan koneksi backbone, atau jadikan Gigabit ke desktop sebagai kenyataan. Dilengkapi dengan teknologi hemat energi inovatif, TL-SG1008D dapat menghemat konsumsi daya hingga 80%, menjadikannya solusi ramah lingkungan untuk jaringan rumah atau kantor Anda.",
    specs: {
      "Jumlah Port": "8 Port RJ45 Auto-Negotiation",
      "Kecepatan Port": "10/100/1000 Mbps (Gigabit)",
      "Fitur": "Green Technology, Flow Control, Auto-MDI/MDIX",
      "Casing": "Plastik (Desktop)",
      "Metode Transmisi": "Store and Forward"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang TP-Link TL-SG1008D"
  },
  {
    id: "kabel-belden-cat6-usa",
    name: "Kabel UTP Belden CAT6 USA (Original)",
    brand: "Belden",
    category: "aksesoris",
    price: 2450000,
    originalPrice: 2750000,
    badge: null,
    images: [
      "assets/images/products/kabel-belden-cat6-usa-1.jpg",
      "assets/images/products/kabel-belden-cat6-usa-2.jpg",
      "assets/images/products/kabel-belden-cat6-usa-3.jpg"
    ],
    shortDesc: "Kabel UTP Belden Category 6 (CAT6) Non-Plenum 1 Roll (305m)",
    description: "Kabel UTP Belden CAT6 Original USA dengan panjang 1 roll (305 meter) adalah kabel jaringan berkualitas premium standar industri. Dirancang untuk aplikasi Gigabit Ethernet berkecepatan tinggi dengan crosstalk dan kebisingan minimal. Menggunakan konduktor tembaga murni berkualitas tinggi (Solid Bare Copper) untuk transmisi data yang andal dan jarak jauh yang optimal.",
    specs: {
      "Tipe Kabel": "UTP (Unshielded Twisted Pair)",
      "Kategori": "CAT6",
      "Panjang": "305 Meter (1000 Feet)",
      "Bahan Konduktor": "Solid Bare Copper",
      "Kecepatan Bandwidth": "Hingga 250 MHz"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang Kabel Belden CAT6 USA"
  },
  {
    id: "mikrotik-rb941-2nd",
    name: "MikroTik hAP Lite (RB941-2nD)",
    brand: "MikroTik",
    category: "router",
    price: 385000,
    originalPrice: 420000,
    badge: "best-seller",
    images: [
      "assets/images/products/mikrotik-rb941-2nd-1.jpg",
      "assets/images/products/mikrotik-rb941-2nd-2.jpg",
      "assets/images/products/mikrotik-rb941-2nd-3.jpg"
    ],
    shortDesc: "Home Access Point Lite with 4 Fast Ethernet ports",
    description: "MikroTik hAP Lite (RB941-2nD) adalah perangkat router nirkabel kecil yang ideal untuk apartemen, rumah, atau kantor kecil Anda. Mendukung WPS yang dipicu tombol untuk kemudahan menghubungkan perangkat nirkabel. Dilengkapi dengan CPU 650MHz yang andal, RAM 32MB, Wi-Fi 2.4 GHz onboard, dan 4 port Fast Ethernet. Router ini bertenaga RouterOS yang fleksibel untuk manajemen bandwidth tingkat dasar.",
    specs: {
      "Frekuensi Wi-Fi": "2.4 GHz (802.11b/g/n)",
      "Port Ethernet": "4x 10/100 Mbps Fast Ethernet Ports",
      "Sistem Operasi": "RouterOS (Lisensi Level 4)",
      "RAM": "32 MB",
      "Sumber Daya": "MicroUSB 5V"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang MikroTik hAP Lite"
  },
  {
    id: "ubiquiti-edgerouter-x",
    name: "Ubiquiti EdgeRouter X (ER-X)",
    brand: "Ubiquiti",
    category: "router",
    price: 1050000,
    originalPrice: 1200000,
    badge: "limited",
    images: [
      "assets/images/products/ubiquiti-edgerouter-x-1.jpg",
      "assets/images/products/ubiquiti-edgerouter-x-2.jpg",
      "assets/images/products/ubiquiti-edgerouter-x-3.jpg"
    ],
    shortDesc: "Advanced 5-Port Gigabit Router with Passive PoE Passthrough",
    description: "Ubiquiti EdgeRouter X menawarkan kinerja routing Gigabit yang sangat efisien dalam faktor bentuk ultra-ringkas yang hemat biaya. Dilengkapi dengan 5 port Gigabit RJ45 independen yang dapat dikonfigurasi untuk switching layer-2 atau routing layer-3. Didukung oleh sistem operasi EdgeOS dengan antarmuka grafis yang ramah pengguna serta CLI lengkap untuk fitur keamanan dan manajemen tingkat lanjut.",
    specs: {
      "Port Ethernet": "5x 10/100/1000 Mbps Gigabit Ports",
      "PoE Passthrough": "Passive PoE Passthrough on Port 5",
      "Processor": "Dual-Core 880 MHz, MIPS1004Kc",
      "RAM": "256 MB DDR3",
      "Storage": "256 MB NAND Flash"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang Ubiquiti EdgeRouter X"
  },
  {
    id: "tp-link-sf1005d",
    name: "TP-Link TL-SF1005D",
    brand: "TP-Link",
    category: "switch",
    price: 95000,
    originalPrice: 120000,
    badge: null,
    images: [
      "assets/images/products/tp-link-sf1005d-1.jpg",
      "assets/images/products/tp-link-sf1005d-2.jpg",
      "assets/images/products/tp-link-sf1005d-3.jpg"
    ],
    shortDesc: "5-Port 10/100Mbps Desktop Switch",
    description: "TP-Link TL-SF1005D Switch Ethernet 5-Port 10/100Mbps menyediakan cara termudah untuk memperluas jaringan kabel Anda. Kelima port mendukung auto-MDI/MDIX, menghilangkan kekhawatiran tentang jenis kabel yang digunakan. Dilengkapi dengan mode full duplex, TL-SF1005D dapat memproses data dengan kecepatan hingga 200Mbps, menjadikannya pilihan ideal untuk memperluas jaringan kabel rumah dengan kinerja tinggi.",
    specs: {
      "Jumlah Port": "5 Port RJ45 Auto-Negotiation",
      "Kecepatan Port": "10/100 Mbps (Fast Ethernet)",
      "Casing": "Plastik (Desktop)",
      "Konsumsi Daya": "Maksimal 1.87W",
      "Dimensi": "103.5 x 70 x 22 mm"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang TP-Link TL-SF1005D"
  },
  {
    id: "konektor-rj45-amp-cat6",
    name: "Konektor RJ45 AMP/Commscope CAT6 (Original)",
    brand: "Commscope",
    category: "aksesoris",
    price: 350000,
    originalPrice: 400000,
    badge: "new",
    images: [
      "assets/images/products/konektor-rj45-amp-cat6-1.jpg",
      "assets/images/products/konektor-rj45-amp-cat6-2.jpg",
      "assets/images/products/konektor-rj45-amp-cat6-3.jpg"
    ],
    shortDesc: "Konektor RJ45 UTP Commscope/AMP Category 6 (1 Box Isi 50 Pcs)",
    description: "Konektor RJ45 UTP CAT6 merk Commscope (dahulah AMP) Original berkualitas tinggi untuk terminasi kabel jaringan CAT6. Menggunakan pin kontak berlapis emas berukuran 50 micro-inch untuk menjamin konduktivitas data yang andal dan tahan korosi. Sangat cocok digunakan bersama kabel UTP CAT6 untuk mendukung transmisi data berkecepatan tinggi hingga Gigabit Ethernet.",
    specs: {
      "Tipe Konektor": "RJ45 UTP",
      "Kategori": "CAT6",
      "Isi": "50 Pieces Per Box",
      "Material Kontak": "Phosphor Bronze, Gold Plating 50u",
      "Aplikasi": "Kabel UTP Solid/Stranded"
    },
    inStock: true,
    whatsappText: "Halo, saya ingin tanya tentang Konektor RJ45 Commscope CAT6"
  }
];
