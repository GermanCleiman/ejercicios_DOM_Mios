const d = document,
w = window;
export default function scrollTopButton(btn){
  const $scrollBtn = d.querySelector(btn);// guardo la posicion de el boton
  //console.log($scrollBtn);
  w.addEventListener("scroll", (e)=>{
    let scrollTop =  w.pageXOffset || d.documentElement.scrollTop; //por window ó por HTML
    if(scrollTop > 198){
      //saco el hidden
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
    //console.log(d.documentElement.scrollTop);// posicion de scroll en el document HTML
  });

  d.addEventListener("click", (e)=>{
    if(e.target.matches(btn)){
      w.scrollTo(0, 0);
    }
  })
}
