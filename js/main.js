const header = document.querySelector(".site-header");
const navLinks = [...document.querySelectorAll(".nav-link")];
const anchorLinks = [...document.querySelectorAll('a[href^="#"]')];

const setScrolledHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const setActiveLink = (targetId) => {
  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${targetId}`,
    );
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

    const scrollTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      getScrollOffset(targetId);

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
    },
  );

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener("scroll", setScrolledHeader, { passive: true });
setScrolledHeader();

// =====================================================================
// MULTILINGUAL SYSTEM (ID | EN)
// =====================================================================
let currentPortfolioLang = "id";

const translations = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Saya",
      portfolio: "Portofolio",
      training: "Pelatihan",
      contact: "Kontak",
    },
    hero: {
      cta_heading:
        '<span class="font-miracle text-[40px] leading-none sm:text-[42px]">Mari</span> mengenal saya lebih dekat',
      cta_btn: "Tentang Saya",
      profession_1: '<strong class="font-bold">System</strong> Development',
      profession_2: 'Software <strong class="font-bold">Engineer</strong>',
      profession_3: '<strong class="font-bold">Data</strong> Analysis',
    },
    about: {
      heading_main: "Tentang",
      heading_script: "Saya",
      slogan: '<span class="font-miracle">Tempat</span> ide menjadi karya bermakna.',
      p1: "Perkenalkan, saya Wisnu Agus Wicaksono, lulusan S1 Informatika Universitas Sanata Dharma dengan fokus pada System Development dan IPK 3,52. Saya memiliki minat pada software development, pengembangan web, serta pengolahan dan analisis data. Ketertarikan tersebut terus saya kembangkan melalui pendidikan, pelatihan, dan berbagai kegiatan yang mendukung peningkatan kemampuan teknis saya.",
      p2: "Di sisi teknis, saya memiliki dasar dalam Python, JavaScript, HTML, CSS, PHP, database, dan Git. Saya juga mempelajari pengolahan dan analisis data menggunakan Excel, SQL, Python, serta Power BI. Hal tersebut membantu saya memahami proses pengembangan sistem sekaligus bagaimana data dapat diolah menjadi informasi yang bermanfaat.",
      p3: "Selain kemampuan teknis, saya turut mengembangkan kemampuan kreatif melalui kegiatan freelance dan organisasi, khususnya dalam bidang Graphic Design. Pengalaman tersebut membantu saya mengasah kemampuan komunikasi, kolaborasi, problem solving, manajemen waktu, serta ketelitian dalam menyelesaikan berbagai kebutuhan pekerjaan.",
      btn_education: "Pendidikan",
      btn_experience: "Pengalaman",
      btn_organization: "Organisasi",
      tech_cta: "<span>Mari</span> lihat teknologi yang saya gunakan.",
      tech_btn: "Jelajahi Tech Stack",
      portfolio_cta: "<span>Mari</span> lihat teknologi yang saya gunakan.",
      portfolio_btn: "Jelajahi Tech Stack",
    },
    tech: {
      title: "Tech Stack",
      subtitle: "<span>Alat</span> dan teknologi yang mendukung pekerjaan saya.",
      portfolio_cta: "<span>Mari</span> lihat bagaimana ide saya diwujudkan.",
      portfolio_btn: "Portofolio",
    },
    portfolio: {
      title: "Portofolio",
      slogan: '<span class="font-miracle">Tempat</span> ide menjadi karya bermakna.',
      card_webdev_title: "Web Development",
      card_webdev_desc: "Turning ideas into interactive experiences.",
      card_webdev_aria: "Pilih kategori Web Development",
      card_data_title: "Data Analysis",
      card_data_desc: "From raw data to clear insights.",
      card_data_aria: "Pilih kategori Data Analysis",
      training_cta:
        "<span>Mari</span> lihat bagaimana saya terus mengembangkan diri.",
      training_btn: "Pelatihan",
      webdev_slogan:
        'Rancang, <span class="portfolio-slogan-script font-miracle">Bangun</span>, Rasakan.',
      prev_aria: "Portfolio Sebelumnya",
      next_aria: "Portfolio Berikutnya",
      fallback_preview: "Preview segera hadir",
      btn_back: "Kembali",
      data_prev_aria: "Project Data Analysis sebelumnya",
      data_next_aria: "Project Data Analysis berikutnya",
    },
    cert: {
      title: "Pelatihan",
      slogan: '<span class="font-miracle">Bukti</span> proses belajar, berkembang, dan bertumbuh.',
      c1_title: "Coding Camp: Software Engineering",
      c1_desc:
        "Sertifikat kehadiran untuk kursus daring 1 minggu di bidang Rekayasa Perangkat Lunak, mencakup dasar-dasar pengembangan web dan praktik software engineering.",
      c2_title:
        "Bootcamp Sertifikasi Microsoft Office Excel, Word & Power Point Specialist",
      c2_desc:
        "Menyelesaikan Bootcamp Sertifikasi Microsoft Office tingkat Intermediate yang mencakup Microsoft Excel, Word, dan PowerPoint, meliputi pengolahan data, rumus dan fungsi, VLOOKUP, INDEX MATCH, Pivot Table, pelaporan dan dashboard interaktif, VBA Macro, serta mini project.",
      c3_title: "Bootcamp Data Analyst",
      c3_desc:
        "Menyelesaikan Bootcamp Data Analyst tingkat Intermediate yang mencakup dasar-dasar analisis data, formatting dan pembersihan data, analisis data sistematis, SQL dan Google BigQuery, Python dan Google Colab, serta visualisasi data dan pengembangan dashboard menggunakan Power BI, termasuk mini project terapan.",
      c4_title: "Membangun Website dengan Lovable AI",
      c4_desc:
        "Menyelesaikan kelas singkat yang berfokus pada pembuatan website dengan Lovable AI, mengeksplorasi pemanfaatan kecerdasan buatan dalam alur pengembangan web modern.",
      c5_title: "Index Match, Vlookup and Hlookup di Ms. Excel",
      c5_desc:
        "Kelas singkat MySkill berfokus pada fungsi INDEX MATCH, VLOOKUP, dan HLOOKUP di Microsoft Excel untuk pencarian dan analisis data tingkat lanjut.",
      c6_title: "Pengenalan Python untuk Analisis Data",
      c6_desc:
        "Menyelesaikan kelas singkat MySkill yang berfokus pada penggunaan Python untuk analisis data, mencakup sintaks Python, list, tuple, set, dictionary, conditional statement, dan manipulasi data.",
      c7_title: "Mini Course Data Analytics",
      c7_desc:
        "Menyelesaikan RevoU Mini Course Data Analytics, mencakup dasar-dasar analisis data, Big Data, tipe dan proses analisis data, analisis berbasis spreadsheet, implementasi Big Data di industri, serta peran AI dan otomasi bagi karier data analytics di masa depan.",
      c8_title: "SAP01 - SAP Overview",
      c8_desc:
        "Menyelesaikan kursus SAP01 – SAP Overview melalui program kemitraan universitas SAP, memperoleh pengetahuan dasar tentang SAP serta tinjauan umum proses bisnis dan solusi perusahaan.",
      contact_cta: "<span>Mari</span> ciptakan sesuatu bersama.",
      contact_btn: "Hubungi Saya",
    },
    contact: {
      title: "Hubungi Saya",
      desc: "Saya terbuka untuk berdiskusi, berkolaborasi, maupun menjajaki peluang baru. Jangan ragu untuk menghubungi saya melalui salah satu platform di bawah ini.",
    },
    modal: {
      close_aria: "Tutup jendela informasi",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      portfolio: "Portfolio",
      training: "Certifications",
      contact: "Contact",
    },
    hero: {
      cta_heading:
        '<span class="font-miracle text-[40px] leading-none sm:text-[42px]">Get</span> to know me closer',
      cta_btn: "About Me",
      profession_1: '<strong class="font-bold">System</strong> Development',
      profession_2: 'Software <strong class="font-bold">Engineer</strong>',
      profession_3: '<strong class="font-bold">Data</strong> Analysis',
    },
    about: {
      heading_main: "About",
      heading_script: "Me",
      slogan: '<span class="font-miracle">Where</span> ideas become meaningful work.',
      p1: "Hello, I am Wisnu Agus Wicaksono, a Bachelor of Informatics graduate from Sanata Dharma University with a focus on System Development and a GPA of 3.52. I have a passion for software development, web engineering, as well as data processing and analytics. I continuously cultivate this interest through academic education, specialized training, and various initiatives that bolster my technical skills.",
      p2: "Technically, I possess foundational proficiency in Python, JavaScript, HTML, CSS, PHP, databases, and Git. I also actively analyze and process data using Excel, SQL, Python, and Power BI. This dual skill set allows me to understand both comprehensive system architecture and how raw data is converted into meaningful, actionable insights.",
      p3: "Alongside technical capabilities, I cultivate creative problem solving through freelance projects and organizational leadership, especially within Graphic Design. These experiences have refined my communication, collaboration, troubleshooting, time management, and meticulous attention to detail across diverse workplace demands.",
      btn_education: "Education",
      btn_experience: "Experience",
      btn_organization: "Organizations",
      tech_cta: "<span>Let's</span> explore the technologies I use.",
      tech_btn: "Explore Tech Stack",
      portfolio_cta: "<span>Let's</span> explore the technologies I use.",
      portfolio_btn: "Explore Tech Stack",
    },
    tech: {
      title: "Tech Stack",
      subtitle: "<span>Tools</span> and technologies that power my work.",
      portfolio_cta: "<span>Let's</span> see how my ideas come to life.",
      portfolio_btn: "Portfolio",
    },
    portfolio: {
      title: "Portfolio",
      slogan: '<span class="font-miracle">Where</span> ideas become meaningful work.',
      card_webdev_title: "Web Development",
      card_webdev_desc: "Turning ideas into interactive experiences.",
      card_webdev_aria: "Select Web Development category",
      card_data_title: "Data Analysis",
      card_data_desc: "From raw data to clear insights.",
      card_data_aria: "Select Data Analysis category",
      training_cta:
        "<span>Let's</span> discover my journey of continuous growth.",
      training_btn: "Certifications",
      webdev_slogan:
        'Design, <span class="portfolio-slogan-script font-miracle">Build</span>, Experience.',
      prev_aria: "Previous Project",
      next_aria: "Next Project",
      fallback_preview: "Preview coming soon",
      btn_back: "Back",
      data_prev_aria: "Previous Data Analysis Project",
      data_next_aria: "Next Data Analysis Project",
    },
    cert: {
      title: "Training",
      slogan: '<span class="font-miracle">Proof</span> of learning, growth, and progress.',
      c1_title: "Coding Camp: Software Engineering",
      c1_desc:
        "Certificate of attendance for a 1-week online course in Software Engineering, covering web development fundamentals and software development practices.",
      c2_title:
        "Microsoft Office Excel, Word & PowerPoint Specialist Certification Bootcamp",
      c2_desc:
        "Completed an Intermediate-level Microsoft Office Certification Bootcamp covering Microsoft Excel, Word, and PowerPoint, including data processing, formulas and functions, VLOOKUP, INDEX MATCH, Pivot Tables, reporting and interactive dashboards, VBA Macros, and a mini project.",
      c3_title: "Data Analyst Bootcamp",
      c3_desc:
        "Completed an Intermediate-level Data Analyst Bootcamp covering data analysis fundamentals, data formatting and cleansing, systematic data analysis, SQL and Google BigQuery, Python and Google Colab, and data visualization and dashboard development using Power BI. The program also included a mini project to apply the concepts in a practical case.",
      c4_title: "Building Website with Lovable AI",
      c4_desc:
        "Completed a short class focused on building websites with Lovable AI, exploring the use of artificial intelligence in the web development process.",
      c5_title: "Index Match, Vlookup and Hlookup in Ms. Excel",
      c5_desc:
        "MySkill Short Class focused on Index Match, VLOOKUP, and HLOOKUP functions in Microsoft Excel for data lookup and analysis.",
      c6_title: "Python Introduction for Data Analysis",
      c6_desc:
        "Completed a MySkill Short Class focused on using Python for data analysis, covering Python syntax, lists, tuples, sets, dictionaries, conditional statements, and data manipulation fundamentals.",
      c7_title: "Mini Course Data Analytics",
      c7_desc:
        "Completed the RevoU Mini Course Data Analytics, covering the fundamentals of data analysis, Big Data, data analysis types and processes, spreadsheet-based analysis, the implementation of Big Data in industry, and the role of AI and automation in the future of data analytics careers.",
      c8_title: "SAP01 - SAP Overview",
      c8_desc:
        "Completed the SAP01 – SAP Overview course through the SAP University Partnership Program, gaining foundational knowledge of SAP and an overview of its business processes and enterprise solutions.",
      contact_cta: "<span>Let's</span> create something remarkable together.",
      contact_btn: "Contact Me",
    },
    contact: {
      title: "Contact Me",
      desc: "I am open to discussions, collaborations, and exploring new opportunities. Feel free to reach out to me through any of the platforms below.",
    },
    modal: {
      close_aria: "Close information modal",
    },
  },
};

const getTranslationValue = (lang, key) => {
  const parts = key.split(".");
  let cur = translations[lang];
  for (const part of parts) {
    if (!cur) return null;
    cur = cur[part];
  }
  return cur ?? null;
};

const setLanguage = (lang) => {
  if (lang !== "id" && lang !== "en") lang = "id";
  currentPortfolioLang = lang;

  try {
    localStorage.setItem("portfolio_lang", lang);
  } catch (e) {
    // localStorage may be unavailable
  }

  document.documentElement.lang = lang;

  // Update switcher buttons state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    // If element is managed by typewriter loops, avoid static overwrite
    if (
      el.classList.contains("hero-typed-line") &&
      typeof window.__restartHeroTyping === "function"
    ) {
      return;
    }
    if (
      el.classList.contains("slogan-typed") &&
      typeof window.__restartSloganTyping === "function"
    ) {
      return;
    }
    const key = el.getAttribute("data-i18n");
    const text = getTranslationValue(lang, key);
    if (text !== null) {
      if (text.includes("<") && text.includes(">")) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Update elements with data-i18n-aria
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    const text = getTranslationValue(lang, key);
    if (text !== null) {
      el.setAttribute("aria-label", text);
    }
  });

  // Restart hero typewriter loop in the newly active language
  if (typeof window.__restartHeroTyping === "function") {
    window.__restartHeroTyping(lang);
  }

  // Restart slogan typewriter loops in the newly active language
  if (typeof window.__restartSloganTyping === "function") {
    window.__restartSloganTyping(lang);
  }

  // Update active dynamic components
  if (typeof window.__refreshAboutModal === "function") {
    window.__refreshAboutModal();
  }
  if (typeof window.__updatePortfolioContent === "function") {
    window.__updatePortfolioContent();
  }
};

const initLanguageSwitcher = () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.dataset.lang;
      if (targetLang) {
        setLanguage(targetLang);
      }
    });
  });

  let savedLang = "id";
  try {
    savedLang = localStorage.getItem("portfolio_lang") || "id";
  } catch (e) {
    savedLang = "id";
  }
  if (savedLang !== "id" && savedLang !== "en") savedLang = "id";
  setLanguage(savedLang);
};

// Expose setLanguage globally for convenience
window.__setPortfolioLanguage = setLanguage;
window.__getCurrentLanguage = () => currentPortfolioLang;

// Hero Profession Typewriter Loop Controller
const initHeroTypingAnimation = () => {
  const linesElements = [
    document.querySelector('.hero-typed-line[data-line="0"]'),
    document.querySelector('.hero-typed-line[data-line="1"]'),
    document.querySelector('.hero-typed-line[data-line="2"]'),
  ];

  if (!linesElements[0] || !linesElements[1] || !linesElements[2]) return;

  const professionLines = [
    {
      segments: [
        { text: "System", isBold: true },
        { text: " Development", isBold: false },
      ],
      totalChars: 18,
    },
    {
      segments: [
        { text: "Software ", isBold: false },
        { text: "Engineer", isBold: true },
      ],
      totalChars: 17,
    },
    {
      segments: [
        { text: "Data", isBold: true },
        { text: " Analysis", isBold: false },
      ],
      totalChars: 13,
    },
  ];

  const renderLineHtml = (config, count) => {
    if (count <= 0) return "";
    let remaining = count;
    let html = "";
    for (const seg of config.segments) {
      if (remaining <= 0) break;
      const take = Math.min(remaining, seg.text.length);
      const slice = seg.text.slice(0, take);
      if (seg.isBold) {
        html += `<strong class="font-bold">${slice}</strong>`;
      } else {
        html += slice;
      }
      remaining -= take;
    }
    return html;
  };

  const renderFullLineHtml = (config) => {
    return config.segments
      .map((seg) =>
        seg.isBold
          ? `<strong class="font-bold">${seg.text}</strong>`
          : seg.text,
      )
      .join("");
  };

  // If user prefers reduced motion, render all lines in full immediately and exit
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    linesElements.forEach((el, index) => {
      const config = professionLines[index];
      if (el && config) {
        el.innerHTML = renderFullLineHtml(config);
      }
    });
    return;
  }

  const cursor = document.createElement("span");
  cursor.className = "hero-typing-cursor";
  cursor.setAttribute("aria-hidden", "true");

  let activeTimer = null;
  let isStopped = false;

  const clearTimer = () => {
    if (activeTimer !== null) {
      clearTimeout(activeTimer);
      activeTimer = null;
    }
  };

  const updateLineWithCursor = (lineIndex, count) => {
    const lineEl = linesElements[lineIndex];
    const config = professionLines[lineIndex];
    if (!lineEl || !config) return;
    lineEl.innerHTML = renderLineHtml(config, count);
    lineEl.appendChild(cursor);
  };

  const stopAnimation = () => {
    isStopped = true;
    clearTimer();
    if (cursor.parentNode) {
      cursor.remove();
    }
  };

  const startLoop = () => {
    isStopped = false;
    clearTimer();

    // Clear all lines at start of cycle (min-height prevents layout jump)
    linesElements.forEach((el) => {
      el.innerHTML = "";
    });

    let currentLine = 0;
    let currentChar = 1;

    // Phase 1: Typing Forward
    const typeStep = () => {
      if (isStopped) return;

      const config = professionLines[currentLine];
      updateLineWithCursor(currentLine, currentChar);

      if (currentChar < config.totalChars) {
        currentChar++;
        const typingDelay = 42 + Math.floor(Math.random() * 10);
        activeTimer = setTimeout(typeStep, typingDelay);
      } else {
        // Line finished typing
        if (currentLine < professionLines.length - 1) {
          currentLine++;
          currentChar = 1;
          activeTimer = setTimeout(typeStep, 260);
        } else {
          // All 3 lines complete: Phase 2 - HOLDING for reading
          activeTimer = setTimeout(startDeleting, 2300);
        }
      }
    };

    // Phase 3: Deleting Backward (Backspace reverse order: Line 2 -> Line 1 -> Line 0)
    const startDeleting = () => {
      if (isStopped) return;

      let deleteLine = professionLines.length - 1; // start from line 2
      let deleteChar = professionLines[deleteLine].totalChars - 1;

      const deleteStep = () => {
        if (isStopped) return;

        if (deleteChar > 0) {
          updateLineWithCursor(deleteLine, deleteChar);
          deleteChar--;
          const backspaceDelay = 26 + Math.floor(Math.random() * 6);
          activeTimer = setTimeout(deleteStep, backspaceDelay);
        } else {
          // Line completely erased
          linesElements[deleteLine].innerHTML = "";

          if (deleteLine > 0) {
            // Move cursor to end of previous line and continue backspacing
            deleteLine--;
            deleteChar = professionLines[deleteLine].totalChars;
            updateLineWithCursor(deleteLine, deleteChar);
            activeTimer = setTimeout(deleteStep, 180);
          } else {
            // All lines erased! Move cursor to start of line 0 and pause briefly
            linesElements[0].appendChild(cursor);
            // Phase 4: PAUSED_EMPTY -> then restart loop
            activeTimer = setTimeout(startLoop, 550);
          }
        }
      };

      deleteStep();
    };

    typeStep();
  };

  // Expose restart handler when language changes
  window.__restartHeroTyping = (newLang) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stopAnimation();
      linesElements.forEach((el, index) => {
        const config = professionLines[index];
        if (el && config) {
          el.innerHTML = renderFullLineHtml(config);
        }
      });
      return;
    }
    stopAnimation();
    startLoop();
  };

  // Initial delay synchronized with hero entrance
  activeTimer = setTimeout(startLoop, 650);
};

// =====================================================================
// Slogan Typewriter Loop Controller (Portofolio, Pelatihan, Web Development)
// =====================================================================
const initSloganTypingAnimation = () => {
  const sloganConfigs = [
    {
      id: "portfolio",
      element: document.querySelector(".portfolio-slogan"),
      initialDelay: 350,
      phrases: {
        id: [
          { text: "Tempat", isScript: true },
          { text: " ide menjadi karya bermakna.", isScript: false },
        ],
        en: [
          { text: "Where", isScript: true },
          { text: " ideas become meaningful work.", isScript: false },
        ],
      },
    },
    {
      id: "cert",
      element: document.querySelector(".certification-slogan"),
      initialDelay: 680,
      phrases: {
        id: [
          { text: "Bukti", isScript: true },
          { text: " proses belajar, berkembang, dan bertumbuh.", isScript: false },
        ],
        en: [
          { text: "Proof", isScript: true },
          { text: " of learning, growth, and progress.", isScript: false },
        ],
      },
    },
    {
      id: "webdev",
      element: document.querySelector(".portfolio-detail-slogan"),
      initialDelay: 950,
      phrases: {
        id: [
          { text: "Rancang, ", isScript: false },
          { text: "Bangun", isScript: true, scriptClass: "portfolio-slogan-script font-miracle" },
          { text: ", Rasakan.", isScript: false },
        ],
        en: [
          { text: "Design, ", isScript: false },
          { text: "Build", isScript: true, scriptClass: "portfolio-slogan-script font-miracle" },
          { text: ", Experience.", isScript: false },
        ],
      },
    },
  ];

  const activeConfigs = sloganConfigs.filter((cfg) => !!cfg.element);
  if (!activeConfigs.length) return;

  const renderSegmentsHtml = (segments, count) => {
    if (count <= 0) return "";
    let remaining = count;
    let html = "";
    for (const seg of segments) {
      if (remaining <= 0) break;
      const take = Math.min(remaining, seg.text.length);
      const slice = seg.text.slice(0, take);
      if (seg.isScript) {
        const cls = seg.scriptClass || "font-miracle";
        html += `<span class="${cls}">${slice}</span>`;
      } else {
        html += slice;
      }
      remaining -= take;
    }
    return html;
  };

  const renderFullSegmentsHtml = (segments) => {
    return segments
      .map((seg) => {
        if (seg.isScript) {
          const cls = seg.scriptClass || "font-miracle";
          return `<span class="${cls}">${seg.text}</span>`;
        }
        return seg.text;
      })
      .join("");
  };

  const getSegmentsTotalLength = (segments) => {
    return segments.reduce((sum, seg) => sum + seg.text.length, 0);
  };

  const controllers = activeConfigs.map((cfg) => {
    const el = cfg.element;
    const cursor = document.createElement("span");
    cursor.className = "slogan-typing-cursor";
    cursor.setAttribute("aria-hidden", "true");

    let timer = null;
    let isStopped = false;

    const clearActiveTimer = () => {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };

    const stop = () => {
      isStopped = true;
      clearActiveTimer();
      if (cursor.parentNode) {
        cursor.remove();
      }
    };

    const updateContent = (segments, count) => {
      el.innerHTML = renderSegmentsHtml(segments, count);
      el.appendChild(cursor);
    };

    const renderStatic = (lang) => {
      stop();
      const segments = cfg.phrases[lang] || cfg.phrases.id;
      el.innerHTML = renderFullSegmentsHtml(segments);
    };

    const startLoop = (lang, delayStart = 0) => {
      stop();
      isStopped = false;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        renderStatic(lang);
        return;
      }

      const activeSegments = cfg.phrases[lang] || cfg.phrases.id;
      const totalChars = getSegmentsTotalLength(activeSegments);

      const runCycle = () => {
        if (isStopped) return;
        el.innerHTML = "";
        el.appendChild(cursor);

        let currentChar = 1;

        // Phase 1: Typing Forward
        const typeStep = () => {
          if (isStopped) return;
          updateContent(activeSegments, currentChar);

          if (currentChar < totalChars) {
            currentChar++;
            const typingDelay = 42 + Math.floor(Math.random() * 10);
            timer = setTimeout(typeStep, typingDelay);
          } else {
            // Full phrase complete: Phase 2 - Pause while reading
            timer = setTimeout(startDeleting, 2400);
          }
        };

        // Phase 3: Deleting Backward (Backspace)
        const startDeleting = () => {
          if (isStopped) return;
          let deleteChar = totalChars - 1;

          const deleteStep = () => {
            if (isStopped) return;
            if (deleteChar > 0) {
              updateContent(activeSegments, deleteChar);
              deleteChar--;
              const backspaceDelay = 26 + Math.floor(Math.random() * 6);
              timer = setTimeout(deleteStep, backspaceDelay);
            } else {
              // Completely deleted: pause while empty, then restart
              el.innerHTML = "";
              el.appendChild(cursor);
              // Phase 4: Empty pause before next loop
              timer = setTimeout(runCycle, 520);
            }
          };

          deleteStep();
        };

        timer = setTimeout(typeStep, 60);
      };

      if (delayStart > 0) {
        timer = setTimeout(runCycle, delayStart);
      } else {
        runCycle();
      }
    };

    return {
      id: cfg.id,
      element: el,
      startLoop,
      stop,
      renderStatic,
      initialDelay: cfg.initialDelay,
    };
  });

  const restartAll = (newLang) => {
    const lang = newLang === "en" ? "en" : "id";
    controllers.forEach((ctrl) => {
      ctrl.startLoop(lang, 0);
    });
  };

  // Expose restart handler for language switching
  window.__restartSloganTyping = restartAll;

  // Expose webdev slogan restart helper for when detail view is opened
  window.__restartWebDevSlogan = () => {
    const webdevCtrl = controllers.find((c) => c.id === "webdev");
    if (webdevCtrl) {
      const lang =
        (typeof window.__getCurrentLanguage === "function"
          ? window.__getCurrentLanguage()
          : currentPortfolioLang) || "id";
      webdevCtrl.startLoop(lang, 180);
    }
  };

  const initialLang =
    (typeof window.__getCurrentLanguage === "function"
      ? window.__getCurrentLanguage()
      : currentPortfolioLang) || "id";
  controllers.forEach((ctrl) => {
    ctrl.startLoop(initialLang, ctrl.initialDelay);
  });
};

// =====================================================================
// SCROLL REVEAL ANIMATIONS (Tentang Saya & Portofolio)
// =====================================================================
const initScrollReveal = () => {
  const revealElements = document.querySelectorAll(
    "#tentang-saya .scroll-reveal, #tech-stack .scroll-reveal, #portofolio .scroll-reveal",
  );

  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Progressive enhancement: if reduced motion or IntersectionObserver unsupported, reveal immediately
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => {
      el.classList.add("is-revealed");
      if (el.classList.contains("portfolio-card")) {
        el.classList.add("is-visible");
      }
    });
    return;
  }

  // Activate CSS reveal mode (hides unrevealed elements with progressive enhancement)
  document.documentElement.classList.add("js-reveal-ready");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -40px 0px",
    threshold: 0.08,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add("is-revealed");
        if (el.classList.contains("portfolio-card")) {
          el.classList.add("is-visible");
        }
      } else {
        // Reset when element has scrolled out below the viewport (user scrolled back up),
        // so it smoothly re-animates when user scrolls down again.
        if (entry.boundingClientRect.top > window.innerHeight) {
          el.classList.remove("is-revealed");
          if (el.classList.contains("portfolio-card")) {
            el.classList.remove("is-visible");
          }
        }
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
};

const initLandingFeatures = () => {
  initHeroTypingAnimation();
  initSloganTypingAnimation();
  initLanguageSwitcher();
  initScrollReveal();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLandingFeatures);
} else {
  initLandingFeatures();
}

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
    id: {
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
    },
    en: {
      pendidikan: {
        title: "Education History",
        badge: "Education",
      },
      pengalaman: {
        title: "Work Experience",
        badge: "Experience",
      },
      organisasi: {
        title: "Organizational Experience",
        badge: "Organizations",
      },
    },
  };

  const aboutInfoData = {
    id: {
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
    },
    en: {
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
                  Mechatronics Engineering
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
                  Bachelor of Informatics
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
                15 January 2020 – 14 March 2020
              </div>
            </div>
            <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Executed finishing processes on manufacturing output adhering strictly to corporate standards.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Maintained workplace neatness and precision throughout daily tasks.</span>
              </li>
            </ul>
          </div>

          <!-- PT. Panacipta Seinan Components -->
          <div class="about-modal-card-item group">
            <div class="about-modal-card-glow"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
              <div>
                <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">PT. Panacipta Seinan Components</h4>
                <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Finishing and Packaging</p>
              </div>
              <div class="font-helvetica px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.06] border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/95">
                29 June 2021 – 18 April 2022
              </div>
            </div>
            <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Carried out product finishing according to standard operating procedures.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Handled product packaging processes with high precision and care.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Compiled and prepared structured daily work progress reports.</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      organisasi: `
        <div class="flex flex-col gap-4 text-left">
          <!-- Panitia Technofest 6.0 – Security -->
          <div class="about-modal-card-item group">
            <div class="about-modal-card-glow"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
              <div>
                <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Technofest 6.0</h4>
                <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Security Division</p>
              </div>
              <div class="font-helvetica px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.06] border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/95">
                11 October 2024 – 12 October 2024
              </div>
            </div>
            <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Responsible for maintaining security, safety, and order during all event sessions.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Assisted in coordinating smooth crowd flow for participants and committee members.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Coordinated with security team members to ensure the event ran securely and smoothly.</span>
              </li>
            </ul>
          </div>

          <!-- Panitia Magisfest 2024 – Security -->
          <div class="about-modal-card-item group">
            <div class="about-modal-card-glow"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
              <div>
                <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Magisfest 2024</h4>
                <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Security Division</p>
              </div>
            </div>
            <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Ensured security, order, and a safe venue environment throughout the event.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Assisted in crowd supervision and scheduled program coordination.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Collaborated with cross-functional committees to preserve event order.</span>
              </li>
            </ul>
          </div>

          <!-- Panitia Ngupit Fest 2025 – Media Coordinator -->
          <div class="about-modal-card-item group">
            <div class="about-modal-card-glow"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-3">
              <div>
                <h4 class="font-jakarta text-[17px] font-bold text-white tracking-wide group-hover:text-leaf transition-colors duration-300">Panitia Ngupit Fest 2025</h4>
                <p class="font-helvetica text-sm font-medium text-white/80 mt-1">Media & Publication Coordinator</p>
              </div>
              <div class="font-helvetica px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.06] border border-white/10 rounded-full w-fit sm:self-start transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-white/95">
                31 August 2025 – 13 December 2025
              </div>
            </div>
            <ul class="font-helvetica space-y-2 text-[14px] text-white/85 leading-relaxed pl-0">
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Led and managed all media requirements, branding, and event publication campaigns.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Prepared and coordinated multimedia content to drive strong event public awareness.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf"></span>
                <span>Liaised with committee leads to ensure all event details were communicated clearly and consistently.</span>
              </li>
            </ul>
          </div>
        </div>
      `,
    },
  };

  let activeCategory = null;
  let lastFocusedElement = null;

  const openModal = (category) => {
    const langMeta = categoryMeta[currentPortfolioLang] || categoryMeta.id;
    const langData = aboutInfoData[currentPortfolioLang] || aboutInfoData.id;
    const meta = langMeta[category];
    const content = langData[category];
    if (!meta || !content) return;

    activeCategory = category;
    lastFocusedElement = document.activeElement;

    // Highlight active pill
    aboutPills.forEach((pill) => {
      const pillCategory = (pill.getAttribute("data-category") || "")
        .trim()
        .toLowerCase();
      pill.classList.toggle("active", pillCategory === category);
    });

    // Populate modal content
    if (aboutModalTitle) aboutModalTitle.textContent = meta.title;
    aboutModalBody.innerHTML = content;
    aboutModalBody.scrollTop = 0;

    // Prevent body scroll and preserve scrollbar width to prevent layout shift
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
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
      if (
        lastFocusedElement &&
        typeof lastFocusedElement.focus === "function"
      ) {
        lastFocusedElement.focus();
      }
    }, 280);
  };

  // Bind click on about pills
  aboutPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const category = (pill.getAttribute("data-category") || "")
        .trim()
        .toLowerCase();
      openModal(category);
    });
  });

  // Refresh open modal when language switches
  window.__refreshAboutModal = () => {
    if (activeCategory && aboutModal.classList.contains("is-open")) {
      const langMeta = categoryMeta[currentPortfolioLang] || categoryMeta.id;
      const langData = aboutInfoData[currentPortfolioLang] || aboutInfoData.id;
      const meta = langMeta[activeCategory];
      const content = langData[activeCategory];
      if (meta && content) {
        if (aboutModalTitle) aboutModalTitle.textContent = meta.title;
        aboutModalBody.innerHTML = content;
      }
    }
  };

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
  const portfolioCards = [
    ...document.querySelectorAll(".portfolio-card[data-category]"),
  ];
  const statusText = document.querySelector(".portfolio-category-status");
  const gridView = document.getElementById("portfolio-grid-view");
  const detailView = document.getElementById("portfolio-detail-view");
  const backBtn = document.getElementById("portfolio-back-btn");
  const prevBtn = document.getElementById("portfolio-btn-prev");
  const nextBtn = document.getElementById("portfolio-btn-next");
  const dataAnalysisDetailView = document.getElementById(
    "data-analysis-detail-view",
  );
  const dataAnalysisBackBtn = document.getElementById("data-analysis-back-btn");
  const dataAnalysisPrevBtn = document.getElementById("data-analysis-btn-prev");
  const dataAnalysisNextBtn = document.getElementById("data-analysis-btn-next");

  if (!portfolioSection || !portfolioCards.length) return;

  const categoryLabels = {
    frontend: "Web Development",
    "data-analysis": "Data Analysis",
    "graphic-design": "Graphic Design",
  };

  const getI18nText = (val) => {
    if (!val) return "";
    if (typeof val === "object" && val !== null) {
      return val[currentPortfolioLang] || val.id || val.en || "";
    }
    return val;
  };

  // =====================================================================
  // DATA PROJECT WEB DEVELOPMENT
  // =====================================================================
  const webDevItems = [
    // ─── PROJECT 1 ─── Kuliner Klaten ────────────────────────────────────
    {
      title: "Kuliner Klaten",
      description: {
        id: "Sistem rekomendasi kuliner berbasis web yang membantu pengguna menemukan tempat makan di Kabupaten Klaten sesuai dengan preferensi mereka. Dikembangkan menggunakan Flask dengan pendekatan hybrid switching yang menggabungkan Popularity-Based Filtering dan Content-Based Filtering untuk menghasilkan rekomendasi yang lebih relevan.",
        en: "A web-based culinary recommendation system that helps users find dining places in Klaten Regency according to their preferences. Developed using Flask with a hybrid switching approach that combines Popularity-Based Filtering and Content-Based Filtering to produce more relevant recommendations.",
      },
      technologies:
        "Python · Flask · HTML · CSS · JavaScript · Pandas · Scikit-learn",
      github:
        "https://github.com/WisnuMcn/sistem-rekomendasi-kuliner-klaten.git",
      demo: "",
      image: "assets/images/Cap-KulinerKlaten.webp",
    },

    // ─── PROJECT 2 ─── Encre Nocturne ────────────────────────────────────
    {
      title: "Encre Nocturne",
      description: {
        id: "Website tattoo studio yang dirancang untuk memperkenalkan Encre Nocturne, menampilkan informasi layanan serta etalase kategori tattoo, dan memudahkan pengguna dalam melakukan booking. Menghadirkan visual elegan dengan animasi interaktif pada landing page untuk menciptakan pengalaman yang lebih imersif dan berkarakter.",
        en: "A tattoo studio website designed to introduce Encre Nocturne, showcasing service details and a tattoo category showcase, while enabling users to make bookings easily. Features elegant aesthetics with interactive landing page animations to create an immersive, distinctive experience.",
      },
      technologies: "HTML · CSS · JavaScript",
      github: "https://wisnumcn.github.io/encre-nocturne/",
      demo: "",
      image: "assets/images/Cap-EncreNocturne.webp",
    },

    // ─── PROJECT 3 ─── Vogency ───────────────────────────────────────────
    {
      title: "Vogency",
      description: {
        id: "Website toko pakaian online yang menghadirkan pengalaman berbelanja lebih personal melalui sistem rekomendasi berbasis Content-Based Filtering. Sistem menampilkan rekomendasi produk berdasarkan karakteristik dan preferensi pengguna, sehingga membantu menemukan pakaian yang lebih sesuai dengan minat mereka.",
        en: "An online apparel store website that delivers a personalized shopping experience through a Content-Based Filtering recommendation system. It displays product suggestions tailored to user characteristics and style preferences, making fashion discovery effortless.",
      },
      technologies: "PHP · Bootstrap",
      github: "https://github.com/WisnuMcn/Vogency.git",
      demo: "",
      image: "assets/images/Cap-Vogency.webp",
    },

    // ─── PROJECT 4 ─── Semedulur Coffee ──────────────────────────────────
    {
      title: "Semedulur Coffee",
      description: {
        id: "Website pemesanan kopi secara online untuk Semedulur Coffee di Klaten yang memudahkan pelanggan menjelajahi menu dan melakukan pemesanan dengan lebih praktis. Website dirancang dengan tampilan yang sederhana dan responsif untuk memberikan pengalaman pemesanan yang nyaman.",
        en: "An online coffee ordering website for Semedulur Coffee in Klaten that makes it seamless for customers to browse the menu and place orders conveniently. Designed with a clean, responsive layout for a smooth ordering experience.",
      },
      technologies: "PHP · Bootstrap",
      github: "https://github.com/bernadustoro/Walawe_Coffee.git",
      demo: "",
      image: "assets/images/Cap-Semedulur.webp",
    },

    // ─── PROJECT 5 ─── USD Guide ──────────────────────────────────────────
    {
      title: "USD Guide",
      description: {
        id: "USD Guide merupakan aplikasi Augmented Reality (AR) untuk membantu pengguna mengenal lingkungan Universitas Sanata Dharma secara interaktif. Pengguna dapat memindai marker yang tersedia di berbagai gedung, monumen, laboratorium, dan ruang kampus untuk menampilkan objek 3D beserta informasi dan audio penjelasan terkait lokasi tersebut.",
        en: "USD Guide is an Augmented Reality (AR) application that helps users explore the Sanata Dharma University campus interactively. Users can scan markers placed on campus buildings, monuments, labs, and halls to view 3D models with contextual facts and audio narrations.",
      },
      technologies: "HTML · Unity Hub · Augmented Reality (AR) · 3D Object",
      github: "",
      demo: "",
      image: "assets/images/Cap-USDGuide.webp",
    },
  ];

  // =====================================================================
  // DATA PROJECT DATA ANALYSIS
  // =====================================================================
  const dataAnalysisItems = [
    {
      title: {
        id: "Analisis Penjualan & Profitabilitas",
        en: "Sales & Profitability Analysis",
      },
      descriptionLeft: {
        id: "Menganalisis data transaksi Superstore untuk mengetahui performa penjualan dan profit berdasarkan kategori produk dan wilayah. Analisis mencakup eksplorasi data, perhitungan metrik, klasifikasi status profit, serta visualisasi untuk memahami pola penjualan dan profitabilitas.",
        en: "Analyzed Superstore transaction records to evaluate sales volume and profitability across diverse product categories and regional markets. The pipeline encompassed EDA, key metric computation, profit classification, and chart visualizations to detect patterns.",
      },
      descriptionRight: {
        id: "Menghasilkan insight performa penjualan dan profit, termasuk total Sales sebesar 2,30 juta, total Profit 286,40 ribu, performa kategori produk, distribusi transaksi berdasarkan region, serta hubungan antara Sales dan Profit.",
        en: "Delivered actionable revenue insights including 2.30M in total sales, 286.40K in profit, category performance breakdowns, regional transaction distributions, and correlation models between sales volume and margin.",
      },
      technologies: "Python · Google Colab · Pandas · Matplotlib",
      colab:
        "https://colab.research.google.com/drive/1WprA4d3xULcJ69CvRjru3leyh5fUilIX?usp=sharing",
      imageOne: "assets/images/projek1-1.webp",
      imageTwo: "assets/images/projek1-2.webp",
    },
    {
      title: {
        id: "Analisis Market Basket dengan Association Rule",
        en: "Market Basket Analysis with Association Rules",
      },
      descriptionLeft: {
        id: "Dari kode dan hasilnya, proyek ini berfokus pada analisis pola pembelian produk dalam transaksi grocery menggunakan dua algoritma, yaitu Apriori dan FP-Growth. Data transaksi diubah ke format one-hot menggunakan TransactionEncoder, kemudian dicari frequent itemsets dan association rules dengan minimum support 0,02 dan minimum confidence 0,3.",
        en: "Focused on identifying consumer purchasing associations in retail grocery transactions utilizing Apriori and FP-Growth algorithms. Raw transaction records were transformed into one-hot encoded format via TransactionEncoder to mine frequent itemsets with min support 0.02 and min confidence 0.3.",
      },
      descriptionRight: {
        id: "Hasilnya, kedua algoritma menghasilkan 37 association rules. Rule dengan lift tertinggi pada keduanya adalah hubungan whole milk + other vegetables → root vegetables, dengan support 0,023, confidence 0,310, dan lift 2,842. Proyek juga membandingkan waktu eksekusi Apriori 0,0922 detik dengan FP-Growth 0,0489 detik, serta menyajikan visualisasi association rules melalui scatter plot dan network graph.",
        en: "Both algorithms extracted 37 association rules. The top lift rule was whole milk + other vegetables → root vegetables (support 0.023, confidence 0.310, lift 2.842). The project benchmarked execution speed (Apriori 0.0922s vs FP-Growth 0.0489s) alongside scatter plots and interactive network graphs.",
      },
      technologies:
        "Python · Pandas · Mlxtend · Matplotlib · Seaborn · NetworkX",
      colab:
        "https://colab.research.google.com/drive/1FkUNby4rNNbMR9VFuRuuAvRrOMmq3pAR?usp=sharing",
      imageOne: "assets/images/Projek2-1.webp",
      imageTwo: "assets/images/Projek2-2.webp",
    },
    {
      title: {
        id: "Klasifikasi Kematangan Buah Tomat",
        en: "Tomato Ripeness Image Classification",
      },
      descriptionLeft: {
        id: "Mengembangkan model klasifikasi citra untuk mengenali tingkat kematangan buah tomat berdasarkan gambar ke dalam tiga kelas: Matang, Setengah Matang, dan Mentah. Model dilatih menggunakan pendekatan Convolutional Neural Network (CNN) dengan data augmentation untuk meningkatkan variasi data pelatihan.",
        en: "Trained a computer vision classifier to categorize tomato ripeness stages from imagery into three classes: Ripe, Semi-Ripe, and Unripe. Implemented with Convolutional Neural Networks (CNN) with image augmentation to improve feature generalization.",
      },
      descriptionRight: {
        id: "Menghasilkan model klasifikasi citra yang dapat mengenali tiga kategori kematangan tomat, dengan akurasi validasi terbaik sebesar 96,88% pada proses training.",
        en: "Achieved high classification accuracy across all three stages, culminating in a peak validation accuracy of 96.88% during model training and evaluation.",
      },
      technologies:
        "Python · Google Colab · TensorFlow · Keras · NumPy · Matplotlib",
      colab:
        "https://colab.research.google.com/drive/1oUmiFEHamC8ObwzFDpOgXm9tWWJqIOIa?authuser=3#scrollTo=8dkd2_0-G34x",
      imageOne: "assets/images/Projek3-1.webp",
      imageTwo: "assets/images/Projek3-2.webp",
    },
    {
      title: {
        id: "Klasifikasi Pneumonia dari Citra X-Ray",
        en: "Pneumonia Detection from Chest X-Rays",
      },
      descriptionLeft: {
        id: "Mengembangkan model klasifikasi citra untuk membedakan hasil Chest X-Ray ke dalam dua kelas, yaitu NORMAL dan PNEUMONIA, menggunakan pendekatan deep learning dengan DenseNet121 dan data augmentation.",
        en: "Developed a deep learning medical image diagnostic model to classify Chest X-Ray scans into NORMAL and PNEUMONIA classes, utilizing DenseNet121 transfer learning and robust data augmentation.",
      },
      descriptionRight: {
        id: "Menghasilkan model klasifikasi citra X-Ray dengan akurasi pengujian 90,54%, serta evaluasi menggunakan confusion matrix dan classification report untuk melihat performa klasifikasi NORMAL dan PNEUMONIA.",
        en: "Attained 90.54% test accuracy on unseen clinical scans, thoroughly validated with confusion matrices, ROC-AUC curves, and classification reports.",
      },
      technologies:
        "Python · Google Colab · TensorFlow · Keras · DenseNet121 · NumPy · Matplotlib · Seaborn · Scikit-learn",
      colab:
        "https://colab.research.google.com/drive/1wC_D90HGOuUEgKDLuIIYlZl1GQa3O45a?usp=sharing",
      imageOne: "assets/images/Projek4-1.webp",
      imageTwo: "assets/images/Projek4-2.webp",
    },
    {
      title: {
        id: "Automotive Sales Dashboard",
        en: "Automotive Sales Dashboard",
      },
      descriptionLeft: {
        id: "Mengolah dan memvisualisasikan data transaksi showroom mobil menggunakan Power BI untuk memantau penjualan berdasarkan periode, cabang, kategori, produk, metode pembayaran, dan status transaksi. Dashboard dilengkapi filter interaktif dan berbagai visualisasi untuk memudahkan analisis performa penjualan.",
        en: "Processed and visualized dealership sales transaction records in Power BI to monitor sales KPIs across timeframes, branches, vehicle categories, payment channels, and deal statuses with dynamic interactive slicers.",
      },
      descriptionRight: {
        id: "Menghasilkan dashboard interaktif dengan KPI dan visualisasi dinamis yang dapat disesuaikan melalui slicer berdasarkan periode, cabang, kategori, metode pembayaran, dan status transaksi, sehingga memudahkan pemantauan serta analisis performa penjualan.",
        en: "Produced a full-fledged business intelligence dashboard empowering stakeholders with immediate drill-downs into performance metrics, trends, and branch sales rankings.",
      },
      technologies: "Power BI",
      colab: "",
      imageOne: "assets/images/Projek5-1.webp",
      imageTwo: "assets/images/Projek5-2.webp",
    },
    {
      title: {
        id: "Dashboard Penjualan Toko Sembako",
        en: "Grocery Store Sales Dashboard",
      },
      descriptionLeft: {
        id: "Mengolah data penjualan toko sembako yang terdiri dari data transaksi, detail produk, dan konsumen untuk menganalisis omzet, tren penjualan bulanan, sumber penjualan, serta performa kasir. Hasil analisis disajikan dalam dashboard interaktif dengan slicer untuk mempermudah eksplorasi data.",
        en: "Analyzed grocery store transaction datasets, product catalogs, and customer cohorts in Microsoft Excel to model revenue streams, monthly sales trajectories, channels, and cashier productivity metrics.",
      },
      descriptionRight: {
        id: "Menghasilkan dashboard penjualan interaktif dengan visualisasi omzet berdasarkan sumber penjualan, tren omzet bulanan, dan performa kasir, serta slicer yang memungkinkan pengguna memfilter data sehingga nilai KPI dan visualisasi dapat berubah secara dinamis.",
        en: "Built a dynamic Excel executive dashboard featuring slicers, Pivot Charts, and KPI scorecards that adapt on the fly for exploratory data analysis.",
      },
      technologies: "Microsoft Excel",
      colab: "",
      imageOne: "assets/images/Projek6-1.webp",
      imageTwo: "assets/images/Projek6-2.webp",
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
        const slug = tech
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-");
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

    const itemTitle = getI18nText(item.title);
    const itemDesc = getI18nText(item.description);

    if (titleEl) titleEl.textContent = itemTitle;
    if (descEl) descEl.textContent = itemDesc;
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
      githubEl.setAttribute(
        "aria-label",
        currentPortfolioLang === "en"
          ? `Github Repository ${itemTitle}`
          : `Repository Github ${itemTitle}`,
      );
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
      demoEl.setAttribute("aria-label", `Demo ${itemTitle}`);
    }

    // Gambar project dengan fallback jika file belum tersedia
    if (imgEl && fallbackEl) {
      imgEl.style.opacity = "0";
      fallbackEl.classList.remove("is-visible");

      if (item.image) {
        const loader = new Image();
        loader.onload = () => {
          imgEl.src = item.image;
          imgEl.alt = `Screenshot ${itemTitle}`;
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
    const exitClass =
      direction === "next" ? "is-exiting-next" : "is-exiting-prev";
    const enterClass =
      direction === "next" ? "is-entering-next" : "is-entering-prev";

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
    const leftDescriptionEl = document.getElementById(
      "data-analysis-description-left",
    );
    const rightDescriptionEl = document.getElementById(
      "data-analysis-description-right",
    );
    const techEl = document.getElementById("data-analysis-tech");
    const colabEl = document.getElementById("data-analysis-colab");
    const imageOneEl = document.getElementById("data-analysis-image-one");
    const imageTwoEl = document.getElementById("data-analysis-image-two");

    const itemTitle = getI18nText(item.title);
    const itemDescLeft = getI18nText(item.descriptionLeft);
    const itemDescRight = getI18nText(item.descriptionRight);

    if (titleEl) titleEl.textContent = itemTitle;
    if (leftDescriptionEl) leftDescriptionEl.textContent = itemDescLeft;
    if (rightDescriptionEl) rightDescriptionEl.textContent = itemDescRight;
    if (techEl) techEl.innerHTML = formatTechStack(item.technologies);
    if (colabEl) {
      if (item.colab) {
        colabEl.style.display = "";
        colabEl.href = item.colab;
        colabEl.setAttribute(
          "aria-label",
          currentPortfolioLang === "en"
            ? `Open ${itemTitle} in Google Colab`
            : `Buka ${itemTitle} di Google Colab`,
        );
      } else {
        colabEl.style.display = "none";
      }
    }

    updateDataAnalysisImage(
      imageOneEl,
      item.imageOne,
      `Dashboard ${itemTitle}`,
    );
    updateDataAnalysisImage(imageTwoEl, item.imageTwo, `Insight ${itemTitle}`);
    updateDataAnalysisNavigation();
  };

  // Expose portfolio view content refresh on language change
  window.__updatePortfolioContent = () => {
    updateWebDevContent();
    updateDataAnalysisContent();
  };

  const navigateDataAnalysis = (newIndex, direction) => {
    if (isDataAnalysisAnimating || dataAnalysisItems.length <= 1) return;

    const card = document.querySelector(".data-analysis-main-card");
    if (!card) return;

    isDataAnalysisAnimating = true;
    const exitClass =
      direction === "next" ? "is-exiting-next" : "is-exiting-prev";
    const enterClass =
      direction === "next" ? "is-entering-next" : "is-entering-prev";

    card.classList.add(exitClass);
    setTimeout(() => {
      card.classList.remove(exitClass);
      currentDataAnalysisIndex = newIndex;
      updateDataAnalysisContent();
      void card.offsetWidth;
      card.classList.add(enterClass);

      card.addEventListener(
        "animationend",
        () => {
          card.classList.remove(enterClass);
          isDataAnalysisAnimating = false;
        },
        { once: true },
      );

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

    if (typeof window.__restartWebDevSlogan === "function") {
      window.__restartWebDevSlogan();
    }

    // Trigger animasi enter pada detail view
    void detailView.offsetWidth; // force reflow
    detailView.classList.add("is-entering");
    detailView.addEventListener(
      "animationend",
      () => {
        detailView.classList.remove("is-entering");
      },
      { once: true },
    );

    updateWebDevContent();

    // Simpan state ke browser history agar tombol Back browser berfungsi
    if (!skipPushState) {
      history.pushState({ portfolioView: "frontend" }, "");
    }

    // Scroll ke section portofolio secara smooth
    const scrollTop =
      portfolioSection.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({
      top: Math.max(scrollTop, 0),
      behavior: "smooth",
    });
  };

  // Animasi Kembali: detail view slide out → grid view slide in
  const showGridView = (detailViewToHide) => {
    const targetView =
      detailViewToHide && detailViewToHide.classList
        ? detailViewToHide
        : detailView;
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
      gridView.addEventListener(
        "animationend",
        () => {
          gridView.classList.remove("is-entering");
        },
        { once: true },
      );

      // Safety timeout jika animationend tidak terpanggil
      setTimeout(() => gridView.classList.remove("is-entering"), 500);
    }, 350);
  };

  // Fungsi helper: cek apakah saat ini sedang menampilkan detail view
  const isDetailViewActive = () => {
    return (
      (detailView && !detailView.classList.contains("hidden")) ||
      (dataAnalysisDetailView &&
        !dataAnalysisDetailView.classList.contains("hidden"))
    );
  };

  // Fungsi helper: mendapatkan detail view yang aktif saat ini
  const getActiveDetailView = () => {
    if (detailView && !detailView.classList.contains("hidden"))
      return detailView;
    if (
      dataAnalysisDetailView &&
      !dataAnalysisDetailView.classList.contains("hidden")
    )
      return dataAnalysisDetailView;
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
    dataAnalysisDetailView.addEventListener(
      "animationend",
      () => {
        dataAnalysisDetailView.classList.remove("is-entering");
      },
      { once: true },
    );

    updateDataAnalysisContent();

    // Simpan state ke browser history agar tombol Back browser berfungsi
    if (!skipPushState) {
      history.pushState({ portfolioView: "data-analysis" }, "");
    }

    const scrollTop =
      portfolioSection.getBoundingClientRect().top + window.scrollY - 72;
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
      const newIndex =
        (currentWebDevIndex - 1 + webDevItems.length) % webDevItems.length;
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
      const newIndex =
        (currentDataAnalysisIndex + 1) % dataAnalysisItems.length;
      navigateDataAnalysis(newIndex, "next");
    });
  }

  if (dataAnalysisPrevBtn) {
    dataAnalysisPrevBtn.addEventListener("click", () => {
      const newIndex =
        (currentDataAnalysisIndex - 1 + dataAnalysisItems.length) %
        dataAnalysisItems.length;
      navigateDataAnalysis(newIndex, "prev");
    });
  }

  const revealCards = () => {
    portfolioCards.forEach((card) => {
      card.classList.add("is-visible", "is-revealed");
    });
  };

  document
    .querySelectorAll(".portfolio-card-cover[data-src]")
    .forEach((cover) => {
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

      portfolioCards.forEach((item) =>
        item.classList.toggle("is-selected", item === card),
      );
      portfolioSection.dataset.activeCategory = category;

      if (category === "frontend") {
        showDetailView();
      } else if (category === "data-analysis") {
        showDataAnalysisDetail();
      } else {
        if (statusText) {
          statusText.textContent =
            currentPortfolioLang === "en"
              ? `${label} selected. Category detail view will be developed in the next stage.`
              : `${label} dipilih. Tampilan detail kategori akan dikembangkan pada tahap berikutnya.`;
        }
      }

      portfolioSection.dispatchEvent(
        new CustomEvent("portfolio:category-selected", {
          bubbles: true,
          detail: { category, label },
        }),
      );
    });
  });

  if (!("IntersectionObserver" in window)) {
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
  const certificationCards = [
    ...document.querySelectorAll(".certification-card"),
  ];

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

    return (
      rect.top < window.innerHeight * 0.82 &&
      rect.bottom > window.innerHeight * 0.12
    );
  };

  const revealIfInView = () => {
    if (window.location.hash === "#sertifikasi" || isCertificationInView())
      revealSection();
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
      },
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
      },
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
