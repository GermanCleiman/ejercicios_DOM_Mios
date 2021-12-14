const d = document,
w = window,
n = navigator;

export default function networkStatus(){
  //eventos de js online y offline
  const isOnline =()=>{
    //const $div = d.createElement("div");
    const $contenedor= d.querySelector(".modal-content"),
    $titulo= d.getElementById("titulo-modal")
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));//Llama al modal de Boostrap
    if(n.onLine){
      // $div.textContent = " Conexión Reestablecida ";
      // $div.classList.add("online");// clases de CSS
      // $div.classList.remove("offline");
      $titulo.innerHTML = "Conexión Reestablecida";
      $contenedor.classList.add("online");
      $contenedor.classList.remove("offline");
    } else {
      $titulo.innerHTML = "Conexión Perdida";
      $contenedor.classList.add("offline");
      $contenedor.classList.remove("online");

      myModal.show();
    };
    //d.body.insertAdjacentElement("afterbegin", $div);//Lo agrego en el body del documento antes de empezar
    //setTimeout(() => d.body.removeChild($div), 1500);// remover despues de 2seg.
  };
  w.addEventListener("online", (e)=> isOnline());
  w.addEventListener("offline", (e)=> isOnline());
}
