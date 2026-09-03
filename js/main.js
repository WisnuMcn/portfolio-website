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

// About Section Category Tabs Controller
document.addEventListener("DOMContentLoaded", () => {
  const aboutPills = document.querySelectorAll(".about-pill");
  const aboutInfoContainer = document.getElementById("about-info-container");

  // Data mapping for active categories (structured with empty values to avoid dummy content)
  const aboutInfoData = {
    pendidikan: `
      <div class="flex flex-col gap-4 text-left">
        <!-- SMK Leonardo Klaten -->
        <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-leaf/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-leaf/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition-all duration-300 group-hover:scale-110 group-hover:text-leaf group-hover:border-leaf/30 group-hover:bg-leaf/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A5.905 5.905 0 018 3.44a50.45 50.45 0 019.103 0 5.905 5.905 0 014.887 5.894c0 .285-.02.569-.06.85m-18.411 0L12 14.654l8.232-4.802" />
              </svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-white tracking-wide leading-snug">SMK Leonardo Klaten</h3>
              <p class="text-sm font-medium text-white/75 mt-1.5 flex items-center gap-1.5 group-hover:text-leaf transition-colors duration-300">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-leaf transition-colors duration-300"></span>
                Teknik Mekatronika
              </p>
            </div>
          </div>
        </div>

        <!-- Universitas Sanata Dharma -->
        <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-leaf/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-leaf/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 transition-all duration-300 group-hover:scale-110 group-hover:text-leaf group-hover:border-leaf/30 group-hover:bg-leaf/5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A5.905 5.905 0 018 3.44a50.45 50.45 0 019.103 0 5.905 5.905 0 014.887 5.894c0 .285-.02.569-.06.85m-18.411 0L12 14.654l8.232-4.802" />
              </svg>
            </div>
            <div>
              <h3 class="text-[17px] font-bold text-white tracking-wide leading-snug">Universitas Sanata Dharma</h3>
              <p class="text-sm font-medium text-white/75 mt-1.5 flex items-center gap-1.5 group-hover:text-leaf transition-colors duration-300">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-leaf transition-colors duration-300"></span>
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
        <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-leaf/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-leaf/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3.5 mb-3.5">
            <div>
              <h3 class="text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">PT. Chemco Harapan Nusantara</h3>
              <p class="text-sm font-medium text-white/75 mt-1">Finishing Ã¢â‚¬â€œ Casting F2</p>
            </div>
            <div class="px-3 py-1 text-xs font-semibold text-white/50 bg-white/5 border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/80">
              15 Januari 2020 Ã¢â‚¬â€œ 14 Maret 2020
            </div>
          </div>
          <ul class="space-y-2.5 text-[14px] text-white/80 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Melakukan proses finishing pada hasil produksi sesuai standar kerja perusahaan.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Menjaga kerapian dan ketelitian selama proses pengerjaan.</span>
            </li>
          </ul>
        </div>

        <!-- PT. Panacipta Seinan Components -->
        <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-leaf/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-leaf/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3.5 mb-3.5">
            <div>
              <h3 class="text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">PT. Panacipta Seinan Components</h3>
              <p class="text-sm font-medium text-white/75 mt-1">Finishing dan Packing</p>
            </div>
            <div class="px-3 py-1 text-xs font-semibold text-white/50 bg-white/5 border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/80">
              29 Juni 2021 Ã¢â‚¬â€œ 18 April 2022
            </div>
          </div>
          <ul class="space-y-2.5 text-[14px] text-white/80 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Melakukan proses finishing produk sesuai standar operasional perusahaan.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Melaksanakan proses packing produk dengan teliti dan rapi.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Membuat dan menyusun laporan pekerjaan secara terstruktur.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    organisasi: `
      <div class="flex flex-col gap-4 text-left">
        <!-- Panitia Technofest 6.0 Ã¢â‚¬â€ Keamanan -->
        <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-leaf/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-leaf/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3.5 mb-3.5">
            <div>
              <h3 class="text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Technofest 6.0</h3>
              <p class="text-sm font-medium text-white/75 mt-1">Keamanan</p>
            </div>
            <div class="px-3 py-1 text-xs font-semibold text-white/50 bg-white/5 border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/80">
              11 Oktober 2024 Ã¢â‚¬â€œ 12 Oktober 2024
            </div>
          </div>
          <ul class="space-y-2.5 text-[14px] text-white/80 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Bertanggung jawab menjaga keamanan dan ketertiban selama kegiatan berlangsung.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Membantu mengatur kelancaran aktivitas peserta dan panitia.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Berkoordinasi dengan anggota tim untuk memastikan kegiatan berjalan dengan aman dan tertib.</span>
            </li>
          </ul>
        </div>

        <!-- Panitia Magisfest 2024 Ã¢â‚¬â€ Keamanan -->
        <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-leaf/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-leaf/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3.5 mb-3.5">
            <div>
              <h3 class="text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Magisfest 2024</h3>
              <p class="text-sm font-medium text-white/75 mt-1">Keamanan</p>
            </div>
          </div>
          <ul class="space-y-2.5 text-[14px] text-white/80 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Menjaga keamanan dan kenyamanan lingkungan selama pelaksanaan kegiatan.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Membantu pengawasan serta pengaturan jalannya acara.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Bekerja sama dengan tim dalam menjaga ketertiban dan kelancaran kegiatan.</span>
            </li>
          </ul>
        </div>

        <!-- Panitia Ngupit Fest 2025 Ã¢â‚¬â€ Penanggung Jawab Media -->
        <div class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-leaf/30 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
          <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-leaf/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3.5 mb-3.5">
            <div>
              <h3 class="text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Ngupit Fest 2025</h3>
              <p class="text-sm font-medium text-white/75 mt-1">Penanggung Jawab Media</p>
            </div>
            <div class="px-3 py-1 text-xs font-semibold text-white/50 bg-white/5 border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/80">
              31 Agustus 2025 Ã¢â‚¬â€œ 13 Desember 2025
            </div>
          </div>
          <ul class="space-y-2.5 text-[14px] text-white/80 leading-relaxed pl-0">
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Bertanggung jawab mengelola kebutuhan media dan publikasi kegiatan.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Menyiapkan serta mengoordinasikan materi informasi untuk mendukung publikasi acara.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <span class="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
              <span>Berkoordinasi dengan tim untuk memastikan informasi kegiatan tersampaikan secara jelas dan konsisten.</span>
            </li>
          </ul>
        </div>
      </div>
    `
  };

  let activeCategory = null;

  const setActiveCategory = (category) => {
    if (activeCategory === category) return;

    // Update active highlight classes on buttons
    aboutPills.forEach((pill) => {
      const pillType = pill.textContent.trim().toLowerCase();
      pill.classList.toggle("active", pillType === category);
    });

    if (activeCategory === null) {
      // First click: render immediately and trigger fade-in
      aboutInfoContainer.innerHTML = aboutInfoData[category] || "";
      // Request animation frame to ensure innerHTML changes are applied before class transition starts
      requestAnimationFrame(() => {
        aboutInfoContainer.classList.add("active");
      });
      activeCategory = category;
    } else {
      // Subsequent clicks: transition fade-out -> update html -> transition fade-in
      aboutInfoContainer.classList.remove("active");

      // Wait for CSS transition opacity to drop (250ms in CSS, 250ms here is perfect)
      setTimeout(() => {
        aboutInfoContainer.innerHTML = aboutInfoData[category] || "";
        aboutInfoContainer.classList.add("active");
        activeCategory = category;
      }, 250);
    }
  };

  // Bind click listeners
  aboutPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const category = pill.textContent.trim().toLowerCase();
      setActiveCategory(category);
    });
  });

  // Automatically activate the first category on load
  if (aboutPills.length > 0) {
    setActiveCategory(aboutPills[0].textContent.trim().toLowerCase());
  }
});

// Portfolio Section Controller
const initializePortfolioSection = () => {
  const portfolioSection = document.getElementById("portofolio");
  const portfolioCards = [...document.querySelectorAll(".portfolio-card[data-category]")];
  const statusText = document.querySelector(".portfolio-category-status");

  if (!portfolioSection || !portfolioCards.length) return;

  const categoryLabels = {
    frontend: "Front-End Development",
    "data-analysis": "Data Analysis",
    "graphic-design": "Graphic Design",
  };

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

      if (statusText) {
        statusText.textContent = `${label} dipilih. Tampilan detail kategori akan dikembangkan pada tahap berikutnya.`;
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

