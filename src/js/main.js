'use strict';

document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();
  scrollNav();
}

function scrollNav() {
  const enlaces = document.querySelectorAll('.navegacion-principal a');
  enlaces.forEach((enlace) => {
    enlace.addEventListener('click', function (ev) {
      ev.preventDefault();
      const seccionScroll = ev.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');
  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `<img src="assets/images/img/thumb/${i}.jpg" type="image/jpg">
    <img loading="lazy" width="200" height="300" src="assets/images/img/thumb/${i}.jpg" alt="galería de imágenes"`;
    imagen.onclick = function () {
      mostrarImagen(i);
    };
    galeria.appendChild(imagen);
  }
}

function mostrarImagen(id) {
  const imagen = document.createElement('picture');
  imagen.innerHTML = `<img src="assets/images/img/grande/${id}.jpg" type="image/jpg">
    <img loading="lazy" width="200" height="300" src="assets/images/img/grande/${id}.jpg" alt="galería de imágenes"`;
  const overlay = document.createElement('DIV');
  overlay.appendChild(imagen);
  overlay.classList.add('overlay');

  const cerrarModal = document.createElement('P');
  cerrarModal.textContent = 'X';
  cerrarModal.classList.add('btn-cerrar');
  cerrarModal.onclick = function () {
    const body = document.querySelector('body');
    body.classList.remove('fijar-body');
    overlay.remove();
  };
  overlay.appendChild(cerrarModal);

  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.classList.add('fijar-body');
}
