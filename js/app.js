document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#nav");
  const navToggle = document.querySelector("#navToggle");
  const navLinks = document.querySelector("#navLinks");
  const typingText = document.querySelector("#typingText");
  const filters = [...document.querySelectorAll(".filter")];
  const cards = [...document.querySelectorAll(".project-card")];
  const revealItems = [...document.querySelectorAll(".reveal")];

  const titles = [
    "DevRel Lead",
    "Open Source Ecosystem Builder",
    "Embodied AI Operator",
    "Community Infrastructure Maker",
    "Vibe Coding Practitioner"
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const type = () => {
    if (!typingText) return;

    const current = titles[titleIndex];
    typingText.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex += 1;
      window.setTimeout(type, 70);
      return;
    }

    if (!deleting && charIndex === current.length) {
      deleting = true;
      window.setTimeout(type, 1400);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(type, 35);
      return;
    }

    deleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    window.setTimeout(type, 260);
  };

  const syncNav = () => {
    nav?.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks?.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  navLinks?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
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
        card.classList.toggle("is-hidden", !visible);
      });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
  window.addEventListener("scroll", syncNav, { passive: true });
  syncNav();
  type();
});
