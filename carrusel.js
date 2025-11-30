// carrusel.js (versión más robusta)
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const track = document.querySelector(".carrusel-track");

  if (!track || slides.length === 0) return; // seguridad

  let index = 0;

  function updateSlide() {
    // Asumimos que cada slide ocupa 100% del ancho del carrusel
    track.style.transform = `translateX(-${index * 100}%)`;
    // Opcional: actualizar indicadores/atributos aria
  }

  // Prev/Next con validación
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      updateSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide();
    });
  }

  // Control por teclado (flechas)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      index = (index + 1) % slides.length;
      updateSlide();
    } else if (e.key === 'ArrowLeft') {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide();
    }
  });

  // Respecta preferencia de reducir movimiento
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!prefersReduced.matches) {
    // autoplay opcional (descomenta si quieres auto-play)
    // let autoplay = setInterval(() => { index = (index + 1) % slides.length; updateSlide(); }, 5000);
    // Para detener al hacer hover:
    // track.addEventListener('mouseenter', () => clearInterval(autoplay));
    // track.addEventListener('mouseleave', () => { autoplay = setInterval(...); });
  }
});