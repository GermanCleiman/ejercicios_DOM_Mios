const d = document;

export default function contactFormValidations(){
  const $form = d.querySelector(".contact-form"),
  $inputs = d.querySelectorAll(".contact-form [required]");

  //console.log($inputs);

  $inputs.forEach((input)=>{
    const $span =d.createElement("span");
    $span.id = input.name;//el name del input
    $span.textContent = input.title;//el title del input
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);/*pongo el $spam debajo del input */
  });

  d.addEventListener("keyup", (e)=>{//ó en "submit"
    if(e.target.matches(".contact-form [required]")){
      let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;//si tiene pattern ó si tiene data-pattern
      //console.log($input, pattern);
      if(pattern && $input.value !== ""){
        //console.log("el input tiene patrón");
        let regex = new RegExp(pattern);//con el pattern creo una nueva exprecion regular
        // si $regex no cumple con la exprecion regular
        //activa el ID
        //desactiva el ID
        return !(regex).exec($input.value)
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
      }
      if(!pattern){
        //console.log("el input No tiene patron");
        return $input.value === ""
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e)=>{
    //e.preventDefault();//Si uso el formsubmit.co saco el ...
    //alert("Enviando Formulario");

    const $loader = d.querySelector(".contact-form-loader"),
    $reponse = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      $reponse.classList.remove("none");
      $form.reset();
      setTimeout(() => $reponse.classList.add("none") , 3000);
    }, 3000);

  })
}
