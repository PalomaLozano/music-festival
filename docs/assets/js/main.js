"use strict";function iniciarApp(){crearGaleria()}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`<img src="assets/images/img/thumb/${t}.jpg" type="image/jpg">\n    <img loading="lazy" width="200" height="300" src="assets/images/img/thumb/${t}.jpg" alt="galería de imágenes"`,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`<img src="assets/images/img/grande/${e}.jpg" type="image/jpg">\n    <img loading="lazy" width="200" height="300" src="assets/images/img/grande/${e}.jpg" alt="galería de imágenes"`;const n=document.createElement("DIV");n.appendChild(t),n.classList.add("overlay");const a=document.createElement("P");a.textContent="X",a.classList.add("btn-cerrar"),a.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()},n.appendChild(a);const i=document.querySelector("body");i.appendChild(n),i.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));