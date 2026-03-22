/* ======= CARRUSEL EQUIPO (PÁGINA EMPRESA) ======= */
const track = document.querySelector('.carrusel-track');
const slidesEquipo = document.querySelectorAll('.slide-equipo');
const btnNext = document.querySelector('.carrusel-btn.next');
const btnPrev = document.querySelector('.carrusel-btn.prev');

if (track && slidesEquipo.length > 0) {
    let indexEquipo = 0;
    let autoPlayEquipo;

    const moverEquipo = () => {
        track.style.transform = `translateX(-${indexEquipo * 100}%)`;
    };

    const siguienteEquipo = () => {
        indexEquipo = (indexEquipo + 1) % slidesEquipo.length;
        moverEquipo();
    };

    const anteriorEquipo = () => {
        indexEquipo = (indexEquipo - 1 + slidesEquipo.length) % slidesEquipo.length;
        moverEquipo();
    };

    // Función para iniciar/reiniciar el temporizador automático
    const iniciarAutoPlay = () => {
        clearInterval(autoPlayEquipo);
        autoPlayEquipo = setInterval(siguienteEquipo, 5000); // Cambia cada 5 segundos
    };

    // Eventos de botones
    btnNext.addEventListener('click', () => {
        siguienteEquipo();
        iniciarAutoPlay(); // Reinicia el tiempo al hacer clic
    });

    btnPrev.addEventListener('click', () => {
        anteriorEquipo();
        iniciarAutoPlay(); // Reinicia el tiempo al hacer clic
    });

    // Iniciar el carrusel automático al cargar
    iniciarAutoPlay();

    // Opcional: Pausar cuando el mouse está encima
    track.addEventListener('mouseenter', () => clearInterval(autoPlayEquipo));
    track.addEventListener('mouseleave', iniciarAutoPlay);
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