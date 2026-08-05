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

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href")?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;

    if (!target) return;

    event.preventDefault();
    setActiveLink(targetId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
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
