let slideActual = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const intervaloTiempo = 6000; // Cambio cada 6 segundos

function mostrarSlide(n) {
  // Resetear clases
  slides.forEach(s => s.classList.remove('activa'));
  dots.forEach(d => d.classList.remove('activa'));
  
  slideActual = (n + slides.length) % slides.length;
  
  slides[slideActual].classList.add('activa');
  dots[slideActual].classList.add('activa');
}

function cambiarSlide(paso) {
  mostrarSlide(slideActual + paso);
  reiniciarTimer();
}

function irASlide(n) {
  mostrarSlide(n);
  reiniciarTimer();
}

// Auto-play
let slideTimer = setInterval(() => cambiarSlide(1), intervaloTiempo);

function reiniciarTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => cambiarSlide(1), intervaloTiempo);
}

// Pausar cuando el mouse está encima
const contenedor = document.querySelector('.hero-container');
contenedor.addEventListener('mouseenter', () => clearInterval(slideTimer));
contenedor.addEventListener('mouseleave', () => reiniciarTimer());


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.barra-inicio');
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav-principal');

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.height = '70px';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.height = '80px';
            header.style.backgroundColor = 'rgba(253, 253, 253, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Abrir/Cerrar menú en móviles
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Opcional: animar las líneas del botón hamburguesa
    });
});