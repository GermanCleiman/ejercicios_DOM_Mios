const d = document,
n = navigator,
nua =n.userAgent;

export default function userDeviceInfo(id){
  const $id = d.getElementById(id),
  isMobile ={
    android: ()=> nua.match(/android/i),//con i le digo que no importa si es en mayuscula ó minuscula
    ios: ()=> nua.match(/iphone|ipad|ipod/i),// match , si coincide con / ... /
    windows: ()=> nua.match(/windows phone/i),
    any: function (){// funcion anonima para que funcione el this. interno
      return this.android() || this.ios() || this.windows();
    },
  },
  isDesktop ={
    linux: ()=> nua.match(/linux/i),
    mac: ()=> nua.match(/mac os/i),
    windows: ()=> nua.match(/windows nt/i),
    any: function (){
      return this.linux() || this.mac() || this.windows();
    },
  },
  isBrowser ={
    chrome: ()=> nua.match(/chrome/i),
    safari: ()=> nua.match(/safari/i),
    firefox: ()=> nua.match(/firefox/i),
    opera: ()=> nua.match(/opera|opera mini/i),
    ie: ()=> nua.match(/msie|iemobile/i),
    edge: ()=> nua.match(/edge/i),
    any: function (){
      return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
    },
  };

  // console.log(ua);
  // console.log(isMobile.android());
  // console.log(isMobile.any());
  // console.log(isDesktop.any());
  // console.log(isBrowser.any());
  $id.innerHTML = `
  <ul>
  <li>User Agent: <b> ${nua}</b></li>
  <br>
  <li>Plataforma: <b> ${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
  <br>
  <li>Navegador: <b> ${isBrowser.any()}</b></li>
  </ul>
  `;

  // ------ contenido exclusivo  --------
  if(isBrowser.chrome()) $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome </mark></p>`
  if(isBrowser.firefox()) $id.innerHTML += `<p><mark>Este contenido sólo se ve en Firefox </mark></p>`
  if(isBrowser.edge()) $id.innerHTML += `<p><mark>Este contenido sólo se ve en Edge </mark></p>`
  if(isBrowser.safari()) $id.innerHTML += `<p><mark>Este contenido sólo se ve en Safari </mark></p>`

  if(isDesktop.linux()) $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`
  if(isDesktop.mac()) $id.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`
  if(isDesktop.windows()) $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p>`

  // redireccion-------------
  if(isMobile.android()) window.location.href = "https://trusting-ritchie-0b8c99.netlify.app/";
}
