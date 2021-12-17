const d = document,
w = window;
/*
Aquí  voy a hacer que las imágenes importadas cambien según el dispositívo y con el menor consumo de datos
*/
export default function responsiveMedia(id, mq, mobileContent, desktopContent){
let breakPoint = w.matchMedia(mq);
/* a mqle puedo asignar un listener  que vea en que medida esta en viewport*/

const responsive = (e)=>{
  // cuando mq se cumpla devuelve true(de 1024 hacia arriba), si no se cumple false
  if(e.matches){
    //traigo el id del elemento
    d.getElementById(id).innerHTML = desktopContent;
  } else {
    d.getElementById(id).innerHTML = mobileContent;
  }
  //console.log(e.matches);
};

//Aqui recibe el true ó false pero no activa hasta que cambie
breakPoint.addEventListener("change", responsive);
responsive(breakPoint);//Aqui activa directamente al empezar el DOM
}
