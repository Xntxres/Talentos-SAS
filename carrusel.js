/* ======= CARRUSEL HOME (HERO) ======= */
let slideActual = 0;
const slidesHero = document.querySelectorAll('.hero-container .slide');
const dots = document.querySelectorAll('.dot');

if (slidesHero.length > 0) {
    function mostrarSlideHero(n) {
        slidesHero.forEach(s => s.classList.remove('activa'));
        dots.forEach(d => d.classList.remove('activa'));
        slideActual = (n + slidesHero.length) % slidesHero.length;
        slidesHero[slideActual].classList.add('activa');
        if (dots[slideActual]) dots[slideActual].classList.add('activa');
    }

    window.cambiarSlide = (paso) => {
        mostrarSlideHero(slideActual + paso);
        reiniciarTimer();
    };

    window.irASlide = (n) => {
        mostrarSlideHero(n);
        reiniciarTimer();
    };

    let slideTimer = setInterval(() => cambiarSlide(1), 6000);
    function reiniciarTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(() => cambiarSlide(1), 6000);
    }
}

/* ======= CARRUSEL EQUIPO (PÁGINA EMPRESA) ======= */
const track = document.querySelector('.carrusel-track');
const slidesEquipo = document.querySelectorAll('.slide-equipo');
const btnNext = document.querySelector('.carrusel-btn.next');
const btnPrev = document.querySelector('.carrusel-btn.prev');

if (track && slidesEquipo.length > 0) {
    let indexEquipo = 0;
    const moverEquipo = () => {
        track.style.transform = `translateX(-${indexEquipo * 100}%)`;
    };

    btnNext.addEventListener('click', () => {
        indexEquipo = (indexEquipo + 1) % slidesEquipo.length;
        moverEquipo();
    });

    btnPrev.addEventListener('click', () => {
        indexEquipo = (indexEquipo - 1 + slidesEquipo.length) % slidesEquipo.length;
        moverEquipo();
    });
}

/* ======= HEADER Y MENÚ MÓVIL ======= */
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.barra-inicio');
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav-principal');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.background = "rgba(255,255,255,0.98)";
            header.style.height = "70px";
        } else {
            header.classList.remove('scrolled');
            header.style.background = "rgba(253, 253, 253, 0.95)";
            header.style.height = "80px";
        }
    });

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }

    // Cerrar menú al hacer clic en un link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });
});