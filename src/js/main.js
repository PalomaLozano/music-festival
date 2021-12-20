'use strict';

document.addEventListener('DOMContentLoaded', function () {
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes');
  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `<img src="assets/images/img/thumb/${i}.jpg" type="image/jpg">
    <img loading="lazy" width="200" height="300" src="assets/images/img/thumb/${i}.jpg" alt="galería de imágenes"`;
    galeria.appendChild(imagen);
  }
}
