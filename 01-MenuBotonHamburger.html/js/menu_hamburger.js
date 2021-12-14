export default function hamburgerMenu(panelBtn, panel, menuLink){
  const d = document;

  d.addEventListener("click", (e)=>{
    // si el evento.target.matches es de panelBtn ó de cualquier cosa dentro de panelBtn
    if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} * `)){
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");//cambio el dibujo del boton
    }
    if(e.target.matches(menuLink)){
      d.querySelector(panel).classList.remove("is-active");// saca el panel
      d.querySelector(panelBtn).classList.remove("is-active");// devuelve el boton original
    }
  });
}
