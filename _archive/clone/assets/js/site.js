(function () {
  const header = document.getElementById("site-header");
  const backdrop = document.getElementById("gl-mega-backdrop");
  const body = document.body;
  const servicesTrigger = document.getElementById("mega-services-trigger");
  const companyTrigger = document.getElementById("mega-company-trigger");
  const servicesPanel = document.getElementById("mega-services-panel");
  const companyPanel = document.getElementById("mega-company-panel");
  const wraps = document.querySelectorAll("[data-mega-wrap]");
  let megaMode = null;

  function syncMega() {
    const servicesOpen = megaMode === "services";
    const companyOpen = megaMode === "company";
    if (servicesPanel) servicesPanel.classList.toggle("is-open", servicesOpen);
    if (companyPanel) companyPanel.classList.toggle("is-open", companyOpen);
    if (servicesTrigger) servicesTrigger.setAttribute("aria-expanded", String(servicesOpen));
    if (companyTrigger) companyTrigger.setAttribute("aria-expanded", String(companyOpen));
    wraps.forEach((w) => w.classList.toggle("is-open", w.getAttribute("data-mega-wrap") === megaMode));
    body.classList.toggle("gl-mega-open", !!megaMode);
  }
  function setMega(mode) {
    megaMode = mode;
    syncMega();
  }

  servicesTrigger && servicesTrigger.addEventListener("click", () => setMega(megaMode === "services" ? null : "services"));
  companyTrigger && companyTrigger.addEventListener("click", () => setMega(megaMode === "company" ? null : "company"));
  backdrop && backdrop.addEventListener("click", () => setMega(null));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMega(null);
  });

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("mobile-overlay");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileClose = document.getElementById("mobile-close");
  function closeDrawer() {
    drawer && drawer.classList.remove("open");
    overlay && overlay.classList.remove("open");
    mobileToggle && mobileToggle.classList.remove("open");
    mobileToggle && mobileToggle.setAttribute("aria-expanded", "false");
    body.style.overflow = "";
  }
  function openDrawer() {
    setMega(null);
    drawer && drawer.classList.add("open");
    overlay && overlay.classList.add("open");
    mobileToggle && mobileToggle.classList.add("open");
    mobileToggle && mobileToggle.setAttribute("aria-expanded", "true");
    body.style.overflow = "hidden";
  }
  mobileToggle &&
    mobileToggle.addEventListener("click", () => {
      const isOpen = drawer && drawer.classList.contains("open");
      if (isOpen) closeDrawer();
      else openDrawer();
    });
  mobileClose && mobileClose.addEventListener("click", closeDrawer);
  overlay && overlay.addEventListener("click", closeDrawer);

  const lines = Array.from(document.querySelectorAll(".gl-util-rotator__line"));
  let i = 0;
  if (lines.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => {
      lines[i].classList.remove("is-visible");
      i = (i + 1) % lines.length;
      lines[i].classList.add("is-visible");
    }, 4800);
  }

  const revealNodes = Array.from(document.querySelectorAll(".reveal"));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealNodes.forEach((n) => n.classList.add("visible"));
  } else if ("IntersectionObserver" in window) {
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            ro.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
    );
    revealNodes.forEach((n) => ro.observe(n));
  }

  const counters = Array.from(document.querySelectorAll(".stat-cell[data-counter]"));
  const startCounter = (el) => {
    if (el.dataset.started === "true") return;
    el.dataset.started = "true";
    const target = Number(el.getAttribute("data-counter") || 0);
    const valueEl = el.querySelector(".counter-value");
    if (!valueEl) return;
    const duration = 1800;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      valueEl.textContent = String(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else valueEl.textContent = String(target);
    }
    requestAnimationFrame(tick);
  };
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounter(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach(startCounter);
  }

  const testimonialData = [
    {
      quote:
        "Ground Level mobilized faster than any contractor we'd used before. Site was prepped and ready two days ahead of our concrete pour - that kind of reliability is rare.",
      name: "Marcus T.",
      role: "Project Manager - Commercial Developer, Barrie",
    },
    {
      quote:
        "We brought them in on a challenging Simcoe County site with heavy rock. They diagnosed the issue, adjusted their approach same day, and kept us on schedule.",
      name: "Diane P.",
      role: "Site Supervisor - General Contractor, Midland",
    },
    {
      quote:
        "Professional, communicative, and thorough. The drainage install was clean, documented properly, and the final grading passed inspection first time.",
      name: "James R.",
      role: "Construction Coordinator - Simcoe County",
    },
  ];
  const quoteEl = document.getElementById("tst-quote");
  const nameEl = document.getElementById("tst-name");
  const roleEl = document.getElementById("tst-role");
  const tabs = Array.from(document.querySelectorAll(".tst5__sel[data-tst]"));
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const idx = Number(tab.getAttribute("data-tst") || 0);
      const item = testimonialData[idx];
      if (!item) return;
      tabs.forEach((t) => {
        t.classList.remove("tst5__sel--active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("tst5__sel--active");
      tab.setAttribute("aria-selected", "true");
      if (quoteEl) quoteEl.textContent = item.quote;
      if (nameEl) nameEl.textContent = item.name;
      if (roleEl) roleEl.textContent = item.role;
    });
  });
})();

