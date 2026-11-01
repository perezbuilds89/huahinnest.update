// HuaHinNest – main.js

const WHATSAPP = "66839402162";

// ---------- Mobilmeny ----------
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  const setOpen = (open) => {
    mobileMenu.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Stäng meny" : "Öppna meny");
    menuBtn.firstElementChild.textContent = open ? "×" : "≡";
  };

  menuBtn.addEventListener("click", () => {
    setOpen(!mobileMenu.classList.contains("is-open"));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

// ---------- Kontaktformulär → WhatsApp ----------
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const message =
      `Hej Cristian!\n\n` +
      `Jag heter ${data.get("name")}.\n` +
      `Kontakt: ${data.get("contact")}\n\n` +
      `Jag söker: ${data.get("looking")}`;

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
    document.getElementById("form-submit").textContent = "WhatsApp öppnat ✓";
  });
}

// ---------- Årtal i footern ----------
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
