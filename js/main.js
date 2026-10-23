const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".nav-link")];
const anchorLinks = [...document.querySelectorAll('a[href^="#"]')];

const setScrolledHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const setActiveLink = (targetId) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${targetId}`);
  });
};

const getScrollOffset = (targetId) => {
  if (targetId === "tentang-saya") return 0;
  if (targetId === "beranda") return 0;

  return 72;
};

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href")?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;

    if (!target) return;

    event.preventDefault();
    setActiveLink(targetId);

    const scrollTop = target.getBoundingClientRect().top + window.scrollY - getScrollOffset(targetId);

    window.scrollTo({
      top: Math.max(scrollTop, 0),
      behavior: "smooth",
    });
  });
});

const sections = [...document.querySelectorAll("main section[id]")];

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) {
        setActiveLink(visible.target.id);
      }
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: [0, 0.2, 0.45, 0.7],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener("scroll", setScrolledHeader, { passive: true });
setScrolledHeader();

// About Section Category Modal Controller (Glassmorphism Popup)
const initAboutModal = () => {
  const aboutPills = document.querySelectorAll(".about-pill");
  const aboutModal = document.getElementById("about-modal");
  const aboutModalBackdrop = document.getElementById("about-modal-backdrop");
  const aboutModalClose = document.getElementById("about-modal-close");
  const aboutModalTitle = document.getElementById("about-modal-title");
  const aboutModalBody = document.getElementById("about-modal-body");

  if (!aboutModal || !aboutModalBody) return;

  const categoryMeta = {
    pendidikan: {
      title: "Riwayat Pendidikan",
      badge: "Pendidikan",
    },
    pengalaman: {
      title: "Pengalaman Kerja",
      badge: "Pengalaman",
    },
    organisasi: {
      title: "Pengalaman Organisasi",
      badge: "Organisasi",
    },
  };

  const aboutInfoData = {
    pendidikan: `
      <div class="flex flex-col gap-4 text-left">
        <!-- SMK Leonardo Klaten -->
        <div class="about-modal-card-item group">
          <div class="about-modal-card-glow"></div>
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition-all duration-300 group-hover:scale-110 group-hover:text-leaf group-hover:border-leaf/30 group-hover:bg-leaf/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A5.905 5.905 0 018 3.44a50.45 50.45 0 019.103 0 5.905 5.905 0 014.887 5.894c0 .285-.02.569-.06.85m-18.411 0L12 14.654l8.232-4.802" />
              </svg>
            </div>
            <div>
              <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide leading-snug">SMK Leonardo Klaten</h4>
              <p class="font-helvetica text-sm font-medium text-white/80 mt-1.5 flex items-center gap-1.5 group-hover:text-leaf transition-colors duration-300">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-leaf/70 group-hover:bg-leaf transition-colors duration-300"></span>
                Teknik Mekatronika
              </p>
            </div>
          </div>
        </div>

        <!-- Universitas Sanata Dharma -->
        <div class="about-modal-card-item group">
          <div class="about-modal-card-glow"></div>
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition-all duration-300 group-hover:scale-110 group-hover:text-leaf group-hover:border-leaf/30 group-hover:bg-leaf/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A5.905 5.905 0 018 3.44a50.45 50.45 0 019.103 0 5.905 5.905 0 014.887 5.894c0 .285-.02.569-.06.85m-18.411 0L12 14.654l8.232-4.802" />
              </svg>
            </div>
            <div>
              <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide leading-snug">Universitas Sanata Dharma</h4>
              <p class="font-helvetica text-sm font-medium text-white/80 mt-1.5 flex items-center gap-1.5 group-hover:text-leaf transition-colors duration-300">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-leaf/70 group-hover:bg-leaf transition-colors duration-300"></span>
                S1-Informatika
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    pengalaman: `
      <div class="flex flex-col gap-4 text-left">
        <!-- PT. Chemco Harapan Nusantara -->
        <div class="about-modal-card-item group">
          <div class="about-modal-card-glow"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
            <div>
              <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">PT. Chemco Harapan Nusantara</h4>
              <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Finishing – Casting F2</p>
            </div>
            <div class="font-helvetica px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.06] border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/95">
              15 Januari 2020 – 14 Maret 2020
            </div>
          </div>
          <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Melakukan proses finishing pada hasil produksi sesuai standar kerja perusahaan.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Menjaga kerapian dan ketelitian selama proses pengerjaan.</span>
            </li>
          </ul>
        </div>

        <!-- PT. Panacipta Seinan Components -->
        <div class="about-modal-card-item group">
          <div class="about-modal-card-glow"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
            <div>
              <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">PT. Panacipta Seinan Components</h4>
              <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Finishing dan Packing</p>
            </div>
            <div class="font-helvetica px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.06] border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/95">
              29 Juni 2021 – 18 April 2022
            </div>
          </div>
          <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Melakukan proses finishing produk sesuai standar operasional perusahaan.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Melaksanakan proses packing produk dengan teliti dan rapi.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Membuat dan menyusun laporan pekerjaan secara terstruktur.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    organisasi: `
      <div class="flex flex-col gap-4 text-left">
        <!-- Panitia Technofest 6.0 – Keamanan -->
        <div class="about-modal-card-item group">
          <div class="about-modal-card-glow"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
            <div>
              <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Technofest 6.0</h4>
              <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Keamanan</p>
            </div>
            <div class="font-helvetica px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.06] border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/95">
              11 Oktober 2024 – 12 Oktober 2024
            </div>
          </div>
          <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Bertanggung jawab menjaga keamanan dan ketertiban selama kegiatan berlangsung.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Membantu mengatur kelancaran aktivitas peserta dan panitia.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Berkoordinasi dengan anggota tim untuk memastikan kegiatan berjalan dengan aman dan tertib.</span>
            </li>
          </ul>
        </div>

        <!-- Panitia Magisfest 2024 – Keamanan -->
        <div class="about-modal-card-item group">
          <div class="about-modal-card-glow"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
            <div>
              <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Magisfest 2024</h4>
              <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Keamanan</p>
            </div>
          </div>
          <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Menjaga keamanan dan kenyamanan lingkungan selama pelaksanaan kegiatan.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Membantu pengawasan serta pengaturan jalannya acara.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Bekerja sama dengan tim dalam menjaga ketertiban dan kelancaran kegiatan.</span>
            </li>
          </ul>
        </div>

        <!-- Panitia Ngupit Fest 2025 – Penanggung Jawab Media -->
        <div class="about-modal-card-item group">
          <div class="about-modal-card-glow"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
            <div>
              <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Ngupit Fest 2025</h4>
              <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Penanggung Jawab Media</p>
            </div>
            <div class="font-helvetica px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.06] border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/95">
              31 Agustus 2025 – 13 Desember 2025
            </div>
          </div>
          <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Bertanggung jawab mengelola kebutuhan media dan publikasi kegiatan.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Menyiapkan serta mengoordinasikan materi informasi untuk mendukung publikasi acara.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Berkoordinasi dengan tim untuk memastikan informasi kegiatan tersampaikan secara jelas dan konsisten.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
  };

  let activeCategory = null;
  let lastFocusedElement = null;

  const openModal = (category) => {
    const meta = categoryMeta[category];
    const content = aboutInfoData[category];
    if (!meta || !content) return;

    activeCategory = category;
    lastFocusedElement = document.activeElement;

    // Highlight active pill
    aboutPills.forEach((pill) => {
      const pillCategory = (pill.getAttribute("data-category") || pill.textContent).trim().toLowerCase();
      pill.classList.toggle("active", pillCategory === category);
    });

    // Populate modal content
    if (aboutModalTitle) aboutModalTitle.textContent = meta.title;
    aboutModalBody.innerHTML = content;
    aboutModalBody.scrollTop = 0;

    // Prevent body scroll and preserve scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.add("about-modal-open");
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Show modal with transition
    aboutModal.style.display = "flex";
    requestAnimationFrame(() => {
      aboutModal.setAttribute("aria-hidden", "false");
      aboutModal.classList.add("is-open");
    });

    // Focus close button for keyboard accessibility
    setTimeout(() => {
      if (aboutModalClose && typeof aboutModalClose.focus === "function") {
        aboutModalClose.focus();
      }
    }, 60);
  };

  const closeModal = () => {
    if (!aboutModal.classList.contains("is-open")) return;

    aboutModal.classList.remove("is-open");
    aboutModal.setAttribute("aria-hidden", "true");

    // Remove active state from pills
    aboutPills.forEach((pill) => pill.classList.remove("active"));
    activeCategory = null;

    // Restore body scrolling after transition
    setTimeout(() => {
      if (!aboutModal.classList.contains("is-open")) {
        aboutModal.style.display = "none";
      }
      document.body.classList.remove("about-modal-open");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
        lastFocusedElement.focus();
      }
    }, 280);
  };

  // Bind click on about pills
  aboutPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const category = (pill.getAttribute("data-category") || pill.textContent).trim().toLowerCase();
      openModal(category);
    });
  });

  // Close handlers
  aboutModalClose?.addEventListener("click", closeModal);
  aboutModalBackdrop?.addEventListener("click", closeModal);

  // Close when clicking modal backdrop or outside dialog card
  aboutModal.addEventListener("click", (event) => {
    if (event.target === aboutModal || event.target === aboutModalBackdrop) {
      closeModal();
    }
  });

  // Keyboard Escape listener
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && aboutModal.classList.contains("is-open")) {
      closeModal();
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAboutModal);
} else {
  initAboutModal();
}

// Portfolio Section Controller
const initializePortfolioSection = () => {
  const portfolioSection = document.getElementById("portofolio");
  const portfolioCards = [...document.querySelectorAll(".portfolio-card[data-category]")];
  const statusText = document.querySelector(".portfolio-category-status");
  const gridView = document.getElementById("portfolio-grid-view");
  const detailView = document.getElementById("portfolio-detail-view");
  const backBtn = document.getElementById("portfolio-back-btn");
  const prevBtn = document.getElementById("portfolio-btn-prev");
  const nextBtn = document.getElementById("portfolio-btn-next");
  const dataAnalysisDetailView = document.getElementById("data-analysis-detail-view");
  const dataAnalysisBackBtn = document.getElementById("data-analysis-back-btn");
  const dataAnalysisPrevBtn = document.getElementById("data-analysis-btn-prev");
  const dataAnalysisNextBtn = document.getElementById("data-analysis-btn-next");

  if (!portfolioSection || !portfolioCards.length) return;

  const categoryLabels = {
    frontend: "Web Development",
    "data-analysis": "Data Analysis",
    "graphic-design": "Graphic Design",
  };

  // =====================================================================
  // DATA PROJECT WEB DEVELOPMENT
  // Untuk menambah project baru: duplikat objek di bawah, isi datanya.
  // Untuk mengisi URL GitHub/Demo: lihat field github & demo di tiap project.
  // =====================================================================
  const webDevItems = [

    // ─── PROJECT 1 ─── Kuliner Klaten ────────────────────────────────────
    {
      title: "Kuliner Klaten",
      description:
        "Sistem rekomendasi kuliner berbasis web yang membantu pengguna menemukan tempat makan di Kabupaten Klaten sesuai dengan preferensi mereka. Dikembangkan menggunakan Flask dengan pendekatan hybrid switching yang menggabungkan Popularity-Based Filtering dan Content-Based Filtering untuk menghasilkan rekomendasi yang lebih relevan.",
      technologies: "Python · Flask · HTML · CSS · JavaScript · Pandas · Scikit-learn",
      github: "https://github.com/WisnuMcn/sistem-rekomendasi-kuliner-klaten.git",
      demo: "",  // ← Tambahkan URL Demo di sini jika sudah tersedia
      image: "assets/images/Cap-KulinerKlaten.png",
    },

    // ─── PROJECT 2 ─── Encre Nocturne ────────────────────────────────────
    // CATATAN:
    //   image  → simpan file gambar ke path di bawah, lalu image otomatis tampil.
    //   github → isi URL repository GitHub jika sudah tersedia.
    //   demo   → isi URL TikTok/demo jika sudah tersedia.
    {
      title: "Encre Nocturne",
      description:
        "Website tattoo studio yang dirancang untuk memperkenalkan Encre Nocturne, menampilkan informasi layanan serta etalase kategori tattoo, dan memudahkan pengguna dalam melakukan booking. Menghadirkan visual elegan dengan animasi interaktif pada landing page untuk menciptakan pengalaman yang lebih imersif dan berkarakter.",
      technologies: "HTML · CSS · JavaScript",
      github: "https://wisnumcn.github.io/encre-nocturne/",  // ← Tambahkan URL GitHub di sini jika sudah tersedia
      demo: "",  // ← Tambahkan URL Demo (TikTok) di sini jika sudah tersedia
      image: "assets/images/Cap-EncreNocturne.png", // ← Simpan file gambar ke path ini
    },

    // ─── PROJECT 3 ─── Vogency ───────────────────────────────────────────
    // CATATAN:
    //   demo → isi URL TikTok/demo jika sudah tersedia.
    {
      title: "Vogency",
      description:
        "Website toko pakaian online yang menghadirkan pengalaman berbelanja lebih personal melalui sistem rekomendasi berbasis Content-Based Filtering. Sistem menampilkan rekomendasi produk berdasarkan karakteristik dan preferensi pengguna, sehingga membantu menemukan pakaian yang lebih sesuai dengan minat mereka.",
      technologies: "PHP · Bootstrap",
      github: "https://github.com/WisnuMcn/Vogency.git",
      demo: "",  // ← Tambahkan URL Demo (TikTok) di sini jika sudah tersedia
      image: "assets/images/Cap-Vogency.png",
    },

    // ─── PROJECT 4 ─── Semedulur Coffee ──────────────────────────────────
    // CATATAN:
    //   demo → isi URL TikTok/demo jika sudah tersedia.
    {
      title: "Semedulur Coffee",
      description:
        "Website pemesanan kopi secara online untuk Semedulur Coffee di Klaten yang memudahkan pelanggan menjelajahi menu dan melakukan pemesanan dengan lebih praktis. Website dirancang dengan tampilan yang sederhana dan responsif untuk memberikan pengalaman pemesanan yang nyaman.",
      technologies: "PHP · Bootstrap",
      github: "https://github.com/bernadustoro/Walawe_Coffee.git",
      demo: "",  // ← Tambahkan URL Demo (TikTok) di sini jika sudah tersedia
      image: "assets/images/Cap-Semedulur.png",
    },
    // ─── PROJECT 5 ─── USD Guide ──────────────────────────────────────────
    // TODO: Tambahkan URL demo USD Guide ketika link sudah tersedia
    //   github → isi URL repository GitHub jika sudah tersedia.
    //   demo   → isi URL TikTok/demo jika sudah tersedia.
    {
      title: "USD Guide",
      description:
        "USD Guide merupakan aplikasi Augmented Reality (AR) untuk membantu pengguna mengenal lingkungan Universitas Sanata Dharma secara interaktif. Pengguna dapat memindai marker yang tersedia di berbagai gedung, monumen, laboratorium, dan ruang kampus untuk menampilkan objek 3D beserta informasi dan audio penjelasan terkait lokasi tersebut.",
      technologies: "HTML · Unity Hub · Augmented Reality (AR) · 3D Object",
      github: "",  // ← Tambahkan URL GitHub di sini jika sudah tersedia
      demo: "",  // ← TODO: Tambahkan URL Demo (TikTok/link demo) di sini jika sudah tersedia
      image: "assets/images/Cap-USDGuide.png",
    },

  ];

  // =====================================================================
  // DATA PROJECT DATA ANALYSIS
  // Tambahkan project berikutnya ke array ini; tombol navigasi akan aktif
  // otomatis saat jumlah project lebih dari satu.
  // =====================================================================
  const dataAnalysisItems = [
    {
      title: "Analisis Penjualan & Profitabilitas",
      descriptionLeft:
        "Menganalisis data transaksi Superstore untuk mengetahui performa penjualan dan profit berdasarkan kategori produk dan wilayah. Analisis mencakup eksplorasi data, perhitungan metrik, klasifikasi status profit, serta visualisasi untuk memahami pola penjualan dan profitabilitas.",
      descriptionRight:
        "Menghasilkan insight performa penjualan dan profit, termasuk total Sales sebesar 2,30 juta, total Profit 286,40 ribu, performa kategori produk, distribusi transaksi berdasarkan region, serta hubungan antara Sales dan Profit.",
      technologies: "Python · Google Colab · Pandas · Matplotlib",
      colab: "https://colab.research.google.com/drive/1WprA4d3xULcJ69CvRjru3leyh5fUilIX?usp=sharing",
      imageOne: "assets/images/projek1-1.png",
      imageTwo: "assets/images/projek1-2.png",
    },
    {
      title: "Analisis Market Basket dengan Association Rule",
      descriptionLeft:
        "Dari kode dan hasilnya, proyek ini berfokus pada analisis pola pembelian produk dalam transaksi grocery menggunakan dua algoritma, yaitu Apriori dan FP-Growth. Data transaksi diubah ke format one-hot menggunakan TransactionEncoder, kemudian dicari frequent itemsets dan association rules dengan minimum support 0,02 dan minimum confidence 0,3.",
      descriptionRight:
        "Hasilnya, kedua algoritma menghasilkan 37 association rules. Rule dengan lift tertinggi pada keduanya adalah hubungan whole milk + other vegetables → root vegetables, dengan support 0,023, confidence 0,310, dan lift 2,842. Proyek juga membandingkan waktu eksekusi Apriori 0,0922 detik dengan FP-Growth 0,0489 detik, serta menyajikan visualisasi association rules melalui scatter plot dan network graph.",
      technologies: "Python · Pandas · Mlxtend · Matplotlib · Seaborn · NetworkX",
      colab: "https://colab.research.google.com/drive/1FkUNby4rNNbMR9VFuRuuAvRrOMmq3pAR?usp=sharing",
      imageOne: "assets/images/Projek2-1.png",
      imageTwo: "assets/images/Projek2-2.png",
    },
    {
      title: "Klasifikasi Kematangan Buah Tomat",
      descriptionLeft:
        "Mengembangkan model klasifikasi citra untuk mengenali tingkat kematangan buah tomat berdasarkan gambar ke dalam tiga kelas: Matang, Setengah Matang, dan Mentah. Model dilatih menggunakan pendekatan Convolutional Neural Network (CNN) dengan data augmentation untuk meningkatkan variasi data pelatihan.",
      descriptionRight:
        "Menghasilkan model klasifikasi citra yang dapat mengenali tiga kategori kematangan tomat, dengan akurasi validasi terbaik sebesar 96,88% pada proses training.",
      technologies: "Python · Google Colab · TensorFlow · Keras · NumPy · Matplotlib",
      colab: "https://colab.research.google.com/drive/1oUmiFEHamC8ObwzFDpOgXm9tWWJqIOIa?authuser=3#scrollTo=8dkd2_0-G34x",
      imageOne: "assets/images/Projek3-1.png",
      imageTwo: "assets/images/Projek3-2.png",
    },
    {
      title: "Klasifikasi Pneumonia dari Citra X-Ray",
      descriptionLeft:
        "Mengembangkan model klasifikasi citra untuk membedakan hasil Chest X-Ray ke dalam dua kelas, yaitu NORMAL dan PNEUMONIA, menggunakan pendekatan deep learning dengan DenseNet121 dan data augmentation.",
      descriptionRight:
        "Menghasilkan model klasifikasi citra X-Ray dengan akurasi pengujian 90,54%, serta evaluasi menggunakan confusion matrix dan classification report untuk melihat performa klasifikasi NORMAL dan PNEUMONIA.",
      technologies: "Python · Google Colab · TensorFlow · Keras · DenseNet121 · NumPy · Matplotlib · Seaborn · Scikit-learn",
      colab: "https://colab.research.google.com/drive/1wC_D90HGOuUEgKDLuIIYlZl1GQa3O45a?usp=sharing",
      imageOne: "assets/images/Projek4-1.png",
      imageTwo: "assets/images/Projek4-2.png",
    },
    {
      title: "Automotive Sales Dashboard",
      descriptionLeft:
        "Mengolah dan memvisualisasikan data transaksi showroom mobil menggunakan Power BI untuk memantau penjualan berdasarkan periode, cabang, kategori, produk, metode pembayaran, dan status transaksi. Dashboard dilengkapi filter interaktif dan berbagai visualisasi untuk memudahkan analisis performa penjualan.",
      descriptionRight:
        "Menghasilkan dashboard interaktif dengan KPI dan visualisasi dinamis yang dapat disesuaikan melalui slicer berdasarkan periode, cabang, kategori, metode pembayaran, dan status transaksi, sehingga memudahkan pemantauan serta analisis performa penjualan.",
      technologies: "Power BI",
      colab: "",
      imageOne: "assets/images/Projek5-1.png",
      imageTwo: "assets/images/Projek5-2.png",
    },
    {
      title: "Dashboard Penjualan Toko Sembako",
      descriptionLeft:
        "Mengolah data penjualan toko sembako yang terdiri dari data transaksi, detail produk, dan konsumen untuk menganalisis omzet, tren penjualan bulanan, sumber penjualan, serta performa kasir. Hasil analisis disajikan dalam dashboard interaktif dengan slicer untuk mempermudah eksplorasi data.",
      descriptionRight:
        "Menghasilkan dashboard penjualan interaktif dengan visualisasi omzet berdasarkan sumber penjualan, tren omzet bulanan, dan performa kasir, serta slicer yang memungkinkan pengguna memfilter data sehingga nilai KPI dan visualisasi dapat berubah secara dinamis.",
      technologies: "Microsoft Excel",
      colab: "",
      imageOne: "assets/images/Projek6-1.png",
      imageTwo: "assets/images/Projek6-2.png",
    },
  ];

  let currentDataAnalysisIndex = 0;
  let isDataAnalysisAnimating = false;

  let currentWebDevIndex = 0;
  let isWebDevAnimating = false;

  const formatTechStack = (techString) => {
    if (!techString) return "";
    return techString
      .split(" · ")
      .map((tech) => {
        const slug = tech.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return `<span class="tech-name tech-${slug}">${tech.trim()}</span>`;
      })
      .join(' <span class="tech-dot">·</span> ');
  };

  // Perbarui konten DOM dengan data project pada index tertentu (tanpa animasi)
  const updateWebDevContent = () => {
    const item = webDevItems[currentWebDevIndex];
    if (!item) return;

    const titleEl = document.getElementById("webdev-title");
    const descEl = document.getElementById("webdev-description");
    const techEl = document.getElementById("webdev-tech");
    const githubEl = document.getElementById("webdev-github");
    const demoEl = document.getElementById("webdev-demo");
    const imgEl = document.getElementById("webdev-screenshot");
    const fallbackEl = document.getElementById("webdev-screenshot-fallback");

    if (titleEl) titleEl.textContent = item.title;
    if (descEl) descEl.textContent = item.description;
    if (techEl) techEl.innerHTML = formatTechStack(item.technologies);

    // Tombol GitHub — disabled jika URL kosong
    if (githubEl) {
      if (item.github) {
        githubEl.href = item.github;
        githubEl.removeAttribute("aria-disabled");
        githubEl.classList.remove("portfolio-action-btn--disabled");
        githubEl.onclick = null;
      } else {
        githubEl.href = "#";
        githubEl.setAttribute("aria-disabled", "true");
        githubEl.classList.add("portfolio-action-btn--disabled");
        githubEl.onclick = (e) => e.preventDefault();
      }
      githubEl.setAttribute("aria-label", `Repository Github ${item.title}`);
    }

    // Tombol Demo — disabled jika URL kosong
    if (demoEl) {
      if (item.demo) {
        demoEl.href = item.demo;
        demoEl.removeAttribute("aria-disabled");
        demoEl.classList.remove("portfolio-action-btn--disabled");
        demoEl.onclick = null;
      } else {
        demoEl.href = "#";
        demoEl.setAttribute("aria-disabled", "true");
        demoEl.classList.add("portfolio-action-btn--disabled");
        demoEl.onclick = (e) => e.preventDefault();
      }
      demoEl.setAttribute("aria-label", `Demo ${item.title}`);
    }

    // Gambar project dengan fallback jika file belum tersedia
    if (imgEl && fallbackEl) {
      imgEl.style.opacity = "0";
      fallbackEl.classList.remove("is-visible");

      if (item.image) {
        const loader = new Image();
        loader.onload = () => {
          imgEl.src = item.image;
          imgEl.alt = `Screenshot ${item.title}`;
          imgEl.style.opacity = "1";
          fallbackEl.classList.remove("is-visible");
        };
        loader.onerror = () => {
          imgEl.src = "";
          imgEl.style.opacity = "0";
          fallbackEl.classList.add("is-visible");
        };
        loader.src = item.image;
      } else {
        imgEl.src = "";
        imgEl.style.opacity = "0";
        fallbackEl.classList.add("is-visible");
      }
    }
  };

  // Navigasi antar project dengan animasi slide horizontal
  // direction: "next" → slide kiri; direction: "prev" → slide kanan
  const navigateWebDev = (newIndex, direction) => {
    if (isWebDevAnimating) return;
    isWebDevAnimating = true;

    const card = document.querySelector(".portfolio-main-card");
    if (!card) {
      // Fallback tanpa animasi jika card tidak ditemukan
      currentWebDevIndex = newIndex;
      updateWebDevContent();
      isWebDevAnimating = false;
      return;
    }

    // Tentukan class animasi berdasarkan arah navigasi
    const exitClass = direction === "next" ? "is-exiting-next" : "is-exiting-prev";
    const enterClass = direction === "next" ? "is-entering-next" : "is-entering-prev";

    // Fase 1: slide exit — card saat ini bergerak keluar
    card.classList.add(exitClass);

    setTimeout(() => {
      card.classList.remove(exitClass);
      currentWebDevIndex = newIndex;
      updateWebDevContent();

      // Force reflow agar browser mereset animasi sebelum enter dimulai
      void card.offsetWidth;

      // Fase 2: slide enter — project baru masuk dari sisi berlawanan
      card.classList.add(enterClass);

      const onEnterEnd = () => {
        card.classList.remove(enterClass);
        isWebDevAnimating = false;
      };

      card.addEventListener("animationend", onEnterEnd, { once: true });

      // Safety timeout — pastikan flag direset meski animationend tidak terpanggil
      setTimeout(() => {
        card.classList.remove(enterClass);
        isWebDevAnimating = false;
      }, 500);

    }, 290);
  };

  // Alias untuk kompatibilitas fungsi yang sudah ada
  const renderWebDevItem = (index) => {
    currentWebDevIndex = index;
    updateWebDevContent();
  };

  const updateDataAnalysisImage = (imageElement, source, alt) => {
    if (!imageElement) return;

    imageElement.style.opacity = "0";
    const loader = new Image();
    loader.onload = () => {
      imageElement.src = source;
      imageElement.alt = alt;
      imageElement.style.opacity = "1";
    };
    loader.onerror = () => {
      imageElement.removeAttribute("src");
      imageElement.alt = "";
    };
    loader.src = source;
  };

  const updateDataAnalysisNavigation = () => {
    const isSingleProject = dataAnalysisItems.length <= 1;

    [dataAnalysisPrevBtn, dataAnalysisNextBtn].forEach((button) => {
      if (!button) return;
      button.disabled = isSingleProject;
      button.setAttribute("aria-disabled", String(isSingleProject));
    });
  };

  const updateDataAnalysisContent = () => {
    const item = dataAnalysisItems[currentDataAnalysisIndex];
    if (!item) return;

    const titleEl = document.getElementById("data-analysis-title");
    const leftDescriptionEl = document.getElementById("data-analysis-description-left");
    const rightDescriptionEl = document.getElementById("data-analysis-description-right");
    const techEl = document.getElementById("data-analysis-tech");
    const colabEl = document.getElementById("data-analysis-colab");
    const imageOneEl = document.getElementById("data-analysis-image-one");
    const imageTwoEl = document.getElementById("data-analysis-image-two");

    if (titleEl) titleEl.textContent = item.title;
    if (leftDescriptionEl) leftDescriptionEl.textContent = item.descriptionLeft;
    if (rightDescriptionEl) rightDescriptionEl.textContent = item.descriptionRight;
    if (techEl) techEl.innerHTML = formatTechStack(item.technologies);
    if (colabEl) {
      if (item.colab) {
        colabEl.style.display = "";
        colabEl.href = item.colab;
        colabEl.setAttribute("aria-label", `Buka ${item.title} di Google Colab`);
      } else {
        colabEl.style.display = "none";
      }
    }

    updateDataAnalysisImage(imageOneEl, item.imageOne, `Dashboard ${item.title}`);
    updateDataAnalysisImage(imageTwoEl, item.imageTwo, `Insight ${item.title}`);
    updateDataAnalysisNavigation();
  };

  const navigateDataAnalysis = (newIndex, direction) => {
    if (isDataAnalysisAnimating || dataAnalysisItems.length <= 1) return;

    const card = document.querySelector(".data-analysis-main-card");
    if (!card) return;

    isDataAnalysisAnimating = true;
    const exitClass = direction === "next" ? "is-exiting-next" : "is-exiting-prev";
    const enterClass = direction === "next" ? "is-entering-next" : "is-entering-prev";

    card.classList.add(exitClass);
    setTimeout(() => {
      card.classList.remove(exitClass);
      currentDataAnalysisIndex = newIndex;
      updateDataAnalysisContent();
      void card.offsetWidth;
      card.classList.add(enterClass);

      card.addEventListener("animationend", () => {
        card.classList.remove(enterClass);
        isDataAnalysisAnimating = false;
      }, { once: true });

      setTimeout(() => {
        card.classList.remove(enterClass);
        isDataAnalysisAnimating = false;
      }, 500);
    }, 290);
  };

  const showDetailView = (skipPushState) => {
    if (!gridView || !detailView) return;
    // Reset ke project pertama setiap kali masuk ke detail view
    currentWebDevIndex = 0;
    isWebDevAnimating = false;

    // Tampilkan detail view dengan animasi masuk
    gridView.classList.add("hidden");
    detailView.classList.remove("hidden");

    // Trigger animasi enter pada detail view
    void detailView.offsetWidth; // force reflow
    detailView.classList.add("is-entering");
    detailView.addEventListener("animationend", () => {
      detailView.classList.remove("is-entering");
    }, { once: true });

    updateWebDevContent();

    // Simpan state ke browser history agar tombol Back browser berfungsi
    if (!skipPushState) {
      history.pushState({ portfolioView: "frontend" }, "");
    }

    // Scroll ke section portofolio secara smooth
    const scrollTop = portfolioSection.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({
      top: Math.max(scrollTop, 0),
      behavior: "smooth",
    });
  };

  // Animasi Kembali: detail view slide out → grid view slide in
  const showGridView = (detailViewToHide) => {
    const targetView = (detailViewToHide && detailViewToHide.classList) ? detailViewToHide : detailView;
    if (!gridView || !targetView) return;

    // Fase 1: detail view bergerak keluar (slide down + fade out)
    targetView.classList.add("is-exiting");

    setTimeout(() => {
      // Fase 2: sembunyikan detail, tampilkan grid
      targetView.classList.remove("is-exiting");
      targetView.classList.add("hidden");
      gridView.classList.remove("hidden");

      // Trigger animasi masuk pada grid view
      void gridView.offsetWidth; // force reflow
      gridView.classList.add("is-entering");
      gridView.addEventListener("animationend", () => {
        gridView.classList.remove("is-entering");
      }, { once: true });

      // Safety timeout jika animationend tidak terpanggil
      setTimeout(() => gridView.classList.remove("is-entering"), 500);

    }, 350);
  };

  // Fungsi helper: cek apakah saat ini sedang menampilkan detail view
  const isDetailViewActive = () => {
    return (detailView && !detailView.classList.contains("hidden")) ||
           (dataAnalysisDetailView && !dataAnalysisDetailView.classList.contains("hidden"));
  };

  // Fungsi helper: mendapatkan detail view yang aktif saat ini
  const getActiveDetailView = () => {
    if (detailView && !detailView.classList.contains("hidden")) return detailView;
    if (dataAnalysisDetailView && !dataAnalysisDetailView.classList.contains("hidden")) return dataAnalysisDetailView;
    return null;
  };

  const showDataAnalysisDetail = (skipPushState) => {
    if (!gridView || !dataAnalysisDetailView) return;

    currentDataAnalysisIndex = 0;
    isDataAnalysisAnimating = false;
    gridView.classList.add("hidden");
    detailView?.classList.add("hidden");
    dataAnalysisDetailView.classList.remove("hidden");
    void dataAnalysisDetailView.offsetWidth;
    dataAnalysisDetailView.classList.add("is-entering");
    dataAnalysisDetailView.addEventListener("animationend", () => {
      dataAnalysisDetailView.classList.remove("is-entering");
    }, { once: true });

    updateDataAnalysisContent();

    // Simpan state ke browser history agar tombol Back browser berfungsi
    if (!skipPushState) {
      history.pushState({ portfolioView: "data-analysis" }, "");
    }

    const scrollTop = portfolioSection.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: Math.max(scrollTop, 0), behavior: "smooth" });
  };

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      // Gunakan history.back() agar sinkron dengan browser history
      // popstate handler akan memanggil showGridView
      if (history.state && history.state.portfolioView) {
        history.back();
      } else {
        showGridView(detailView);
      }
    });
  }

  // Tombol Next → slide ke kanan (project berikutnya masuk dari kanan)
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const newIndex = (currentWebDevIndex + 1) % webDevItems.length;
      navigateWebDev(newIndex, "next");
    });
  }

  // Tombol Prev → slide ke kiri (project sebelumnya masuk dari kiri)
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const newIndex = (currentWebDevIndex - 1 + webDevItems.length) % webDevItems.length;
      navigateWebDev(newIndex, "prev");
    });
  }

  if (dataAnalysisBackBtn) {
    dataAnalysisBackBtn.addEventListener("click", () => {
      // Gunakan history.back() agar sinkron dengan browser history
      // popstate handler akan memanggil showGridView
      if (history.state && history.state.portfolioView) {
        history.back();
      } else {
        showGridView(dataAnalysisDetailView);
      }
    });
  }

  // =====================================================================
  // BROWSER HISTORY API — popstate handler
  // Menangani tombol Back/Forward browser untuk navigasi portfolio
  // =====================================================================
  window.addEventListener("popstate", (event) => {
    // Jika state saat ini TIDAK memiliki portfolioView,
    // berarti user menekan Back dari detail view → kembali ke grid
    if (!event.state || !event.state.portfolioView) {
      const activeView = getActiveDetailView();
      if (activeView) {
        showGridView(activeView);
      }
    } else {
      // User menekan Forward → masuk kembali ke detail view
      const view = event.state.portfolioView;
      if (view === "frontend") {
        showDetailView(true); // true = skip pushState
      } else if (view === "data-analysis") {
        showDataAnalysisDetail(true); // true = skip pushState
      }
    }
  });

  if (dataAnalysisNextBtn) {
    dataAnalysisNextBtn.addEventListener("click", () => {
      const newIndex = (currentDataAnalysisIndex + 1) % dataAnalysisItems.length;
      navigateDataAnalysis(newIndex, "next");
    });
  }

  if (dataAnalysisPrevBtn) {
    dataAnalysisPrevBtn.addEventListener("click", () => {
      const newIndex = (currentDataAnalysisIndex - 1 + dataAnalysisItems.length) % dataAnalysisItems.length;
      navigateDataAnalysis(newIndex, "prev");
    });
  }

  let hasRevealedPortfolio = false;

  const revealCards = () => {
    if (hasRevealedPortfolio) return;

    hasRevealedPortfolio = true;

    portfolioCards.forEach((card, index) => {
      const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : index * 140;
      window.setTimeout(() => card.classList.add("is-visible"), delay);
    });
  };

  document.querySelectorAll(".portfolio-card-cover[data-src]").forEach((cover) => {
    const coverPath = cover.dataset.src;
    const card = cover.closest(".portfolio-card");

    if (!coverPath || !card) return;

    const coverLoader = new Image();
    coverLoader.onload = () => {
      cover.src = coverPath;
      card.classList.add("has-cover");
    };
    coverLoader.onerror = () => {
      cover.removeAttribute("src");
      card.classList.add("has-fallback-cover");
    };
    coverLoader.src = coverPath;
  });

  portfolioCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty("--glow-x", `${x}%`);
      card.style.setProperty("--glow-y", `${y}%`);
    });

    card.addEventListener("click", () => {
      const category = card.dataset.category;
      const label = categoryLabels[category] || category;

      portfolioCards.forEach((item) => item.classList.toggle("is-selected", item === card));
      portfolioSection.dataset.activeCategory = category;

      if (category === "frontend") {
        showDetailView();
      } else if (category === "data-analysis") {
        showDataAnalysisDetail();
      } else {
        if (statusText) {
          statusText.textContent = `${label} dipilih. Tampilan detail kategori akan dikembangkan pada tahap berikutnya.`;
        }
      }

      portfolioSection.dispatchEvent(
        new CustomEvent("portfolio:category-selected", {
          bubbles: true,
          detail: { category, label },
        })
      );
    });
  });

  const isPortfolioInView = () => {
    const rect = portfolioSection.getBoundingClientRect();

    return rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
  };

  const revealIfInView = () => {
    if (window.location.hash === "#portofolio" || isPortfolioInView()) revealCards();
  };

  if ("IntersectionObserver" in window) {
    const portfolioObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          revealCards();
          observer.unobserve(portfolioSection);
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18,
      }
    );

    portfolioObserver.observe(portfolioSection);
    requestAnimationFrame(revealIfInView);
    window.setTimeout(revealIfInView, 250);
  } else {
    revealCards();
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePortfolioSection);
} else {
  initializePortfolioSection();
}

// Certification Section Controller
const initializeCertificationSection = () => {
  const certificationSection = document.getElementById("sertifikasi");
  const certificationCards = [...document.querySelectorAll(".certification-card")];

  if (!certificationSection) return;

  const revealSection = () => {
    certificationSection.classList.add("is-visible");
    certificationCards.forEach((card, index) => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        card.style.animationDelay = `${300 + index * 100}ms`;
      }
    });
  };

  certificationCards.forEach((card) => {
    const image = card.querySelector(".certification-card-image[data-src]");
    const imagePath = image?.dataset.src;

    if (!image || !imagePath) return;

    const loader = new Image();
    loader.onload = () => {
      image.src = imagePath;
      card.classList.add("has-image");
    };
    loader.onerror = () => {
      image.removeAttribute("src");
      card.classList.add("has-fallback-image");
    };
    loader.src = imagePath;
  });

  const isCertificationInView = () => {
    const rect = certificationSection.getBoundingClientRect();

    return rect.top < window.innerHeight * 0.82 && rect.bottom > window.innerHeight * 0.12;
  };

  const revealIfInView = () => {
    if (window.location.hash === "#sertifikasi" || isCertificationInView()) revealSection();
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealSection();
    return;
  }

  if ("IntersectionObserver" in window) {
    const certificationObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          revealSection();
          observer.unobserve(certificationSection);
        }
      },
      {
        rootMargin: "0px 0px -18% 0px",
        threshold: 0.18,
      }
    );

    certificationObserver.observe(certificationSection);
    requestAnimationFrame(revealIfInView);
    window.setTimeout(revealIfInView, 250);
  } else {
    revealSection();
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeCertificationSection);
} else {
  initializeCertificationSection();
}

// Kontak Section Controller
const initializeKontakSection = () => {
  const kontakSection = document.getElementById("kontak");
  const kontakCard = document.querySelector(".kontak-card");

  if (!kontakSection || !kontakCard) return;

  const revealSection = () => {
    kontakCard.classList.add("kontak-animate-visible");
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealSection();
    return;
  }

  if ("IntersectionObserver" in window) {
    const kontakObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          revealSection();
          observer.unobserve(kontakSection);
        }
      },
      {
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.15,
      }
    );

    kontakObserver.observe(kontakSection);
  } else {
    revealSection();
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeKontakSection);
} else {
  initializeKontakSection();
}

