import scrollTopButton from "./boton_scroll.js";
import countDown from "./countdown.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import searchFilters from "./filtro_busquedas.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburger.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueva_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import draw from "./sorteo.js";
import { shortcuts, moveBall } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";


const d = document;
//lee al cargar el documento
d.addEventListener("DOMContentLoaded", (e)=>{
  hamburgerMenu(".panel-btn", ".panel", ".menu a" );
  // paso .panel-btn, .panel, cualquier a que este dentro de menu
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3","#activar-alarma", "#desactivar-alarma");
  countDown("countDown", "May 30, 2022","Feliz Cumpleaños mi querida Tai 🤓" );
  scrollTopButton(".scroll-top-btn");

  responsiveMedia("youtube",
  "(min-width:1024px)",
  `<img src="./assets/hqdefault(10).jpg" alt="Queen" width="230" height="115">
  <br/>
  <a href= "https://youtu.be/fJ9rUzIMcZQ" target= "_blank" rel= "noopener">Ver Video</a>`,
  `<iframe width="460" height="230" src="https://www.youtube.com/embed/fJ9rUzIMcZQ"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  //la meidia query "(min-width:1024px)" especifica el tamaño minimo en CSS del viewPort

  responsiveMedia("googlemaps",
  "(min-width:1024px)",
  `<img src="./assets/Google_Maps_logo_PNG1.png" alt="GoogleMaps" width="230" height="115"><br/>
  <a href= "https://goo.gl/maps/RoUXGJyA6sR8hBpX8" target= "_blank" rel= "noopener">Ver Mapa</a>`,
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.869398819026!2d-58.
  4497928851951!3d-34.60746386520244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
  1!3m3!1m2!1s0x95bcca11c18564ad%3A0x7d2fce96ab8d22cb!2sAv.
  %20San%20Mart%C3%ADn%201290%2C%20C1416CRN%20CABA!5e0!3m2!1ses!2sar!4v1638900018696!5m2!1ses!2sar"
  width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam", "#start", "#pause");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

//Lee cuando hay una tecla apretada, mantenida ó suelta "keydown", "keypress", "keyup"
d.addEventListener("keydown", (e)=>{//le asigno la funcion a document, tambien lo puedo hacer a un input
  shortcuts(e);
  moveBall(e, ".ball", ".stage");

})
// fuera del DOMCountentLoaded, porque lo utilizo en su propio archivo.
darkTheme(".dark-theme-btn", "darkMode");//El data atribut no lleva  . inicial
///fuera del D.. porque no lo necesita
networkStatus();
speechReader();
