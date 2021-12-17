const d = document,
ls = localStorage;
/* Creo una Data atribut para marcar los elementos a modificar en HTML */
export default function darkTheme(btn, classDark){
  const $themeBtn = d.querySelector(btn),
  $setectors = d.querySelectorAll("[data-dark]");
  /* Para selectorAll se usa este formato ("[nombre]")y devuelve un "node list" una especie de arraglo del DOM
  con todos los selectores que tenga data-dark */
  //console.log($setectors);
  let moon = "🌙",
  sun = "☀️";

  const lightMode = ()=>{
    $setectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");//guardo en ls light
  }

  const darkMode = ()=>{
    $setectors.forEach((el) => el.classList.add(classDark));
    /*Como $selectors es un array lo recorro y adiciono en su classList, la clase de CSS */
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");//guardo en ls dark
  }

  d.addEventListener("click", (e)=>{
    if(e.target.matches(btn)){
      if($themeBtn.textContent === moon){
        darkMode();// cambia a dark y guarda en ls
        } else {
          lightMode();// cambia a light y guarda en ls
        }
    }
  });
  /*
  Para guardar la opcion de dark ó light en localStorage y que al reiniciar este igual
  Cuando se carque el DOM hacer....
  */
  d.addEventListener("DOMContentLoaded", (e)=>{
    /*Recorda que no puede haber un evento Dom dentro de otro Dom */
    /*Si la primera vez que carga no existe la variable theme en localStorage , la créo */
    if(ls.getItem("theme")=== null) ls.setItem("theme", "light");
    if(ls.getItem("theme")=== "light") lightMode();
    if(ls.getItem("theme")=== "dark") darkMode();

  });
}
