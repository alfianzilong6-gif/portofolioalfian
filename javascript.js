function setLang(lang) {
  document.querySelectorAll("[data-id]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
}

// Efek interaktif teks saat hover
const texts = document.querySelectorAll("h1, p, a");

texts.forEach(text => {
  text.addEventListener("mouseenter", () => {
    text.classList.add("hovered");
  });
  text.addEventListener("mouseleave", () => {
    text.classList.remove("hovered");
  });
});
