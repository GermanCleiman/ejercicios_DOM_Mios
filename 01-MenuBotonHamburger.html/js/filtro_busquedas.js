const d = document;

export default function searchFilters(input, selector){
  d.addEventListener("keyup", (e)=>{
    if(e.target.matches(input)){
      //console.log(e.key);
      //console.log(e.target.value);
      // buscar entre todos los los selectores() el valor que envia el evento(todo el texto del input)

      if(e.key === "Escape") e.target.value = "";

      d.querySelectorAll(selector).forEach((el)=>
      el.textContent.toLowerCase().
      includes(e.target.value)
      ? el.classList.remove("filter")
      : el.classList.add("filter"));
      //transformo el contenido de texto del elemento del selectora minuscula y pregunto
      //si incluye el valor ingresado en el elemento input(true ó false)
      // si es cierto sacar filter si no poner filter

    }
  })
}
