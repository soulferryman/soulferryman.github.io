document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#nav");
  const navToggle = document.querySelector("#navToggle");
  const navLinks = document.querySelector("#navLinks");
  const typingText = document.querySelector("#typingText");
  const filters = [...document.querySelectorAll(".filter")];
  const cards = [...document.querySelectorAll(".project-card")];
  const revealItems = [...document.querySelectorAll(".reveal")];
  const sectionAnchors = [...document.querySelectorAll("main section[id]")];
  const yearEl = document.querySelector("#year");

  const roles = [
    "开源与开发者关系负责人",
    "Open Source Ecosystem Builder",
    "AI Agent 生态运营",
    "具身智能开源社区操盘手",
    "Developer Relations"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    if (!typingText) return;

    const current = roles[roleIndex];
    typingText.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex += 1;
      window.setTimeout(type, 80);
      return;
    }

    if (!deleting && charIndex === current.length) {
      deleting = true;
      window.setTimeout(type, 1600);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(type, 36);
      return;
    }

    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    window.setTimeout(type, 280);
  };

  const syncNav = () => {
    nav?.classList.toggle("scrolled", window.scrollY > 12);

    let currentId = "";
    sectionAnchors.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) currentId = section.id;
    });
    navLinks?.querySelectorAll("a").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("open");
    navToggle.classList.toggle("open", Boolean(isOpen));
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  navLinks?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter || "all";

      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });

      cards.forEach((card) => {
        const visible = selected === "all" || card.dataset.category === selected;
        card.classList.toggle("hidden", !visible);
      });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
  window.addEventListener("scroll", syncNav, { passive: true });
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  syncNav();
  type();
});
