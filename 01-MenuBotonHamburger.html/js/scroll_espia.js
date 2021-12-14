const d = document;
export default function scrollSpy(){
  const $sections = d.querySelectorAll("section[data-scroll-spy]")
  const cb = (entries)=>{
    //muestra en que seccion esta mirando en X e Y
    //console.log("entries:", entries);

    entries.forEach ((entry)=> {
      //console.log("entry:", entry);
      const id = entry.target.getAttribute("id");//trae el id del target de entry
      if(entry.isIntersecting){
        //Busca el primer a con... y href con id de id
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
        classList.add("active");// y agrega el estilo CSS active
      }else{
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).
        classList.remove("active");// y remueve el estilo CSS active
      }
    })
  }
  const observer = new IntersectionObserver(cb, {
    //Root
    //rootMargin: "-250px"//hasta que la seccion no se posicione a 250px no se marca
    // threshold:0.5// muestra a partir de que se ve un 50% (entre 0 y 1)
    threshold:[0.5, 0.75]// muestra a partir de que se ve entre 50% y 75% (entre 0 y 1)
  });
  // recibe una funcion callback y parametros en un objeto
  //console.log("observer:",observer);
  $sections.forEach((el=> observer.observe(el)));
  //para cada (elemento) de sections,crea una instancia de observer .observ
  //

}
