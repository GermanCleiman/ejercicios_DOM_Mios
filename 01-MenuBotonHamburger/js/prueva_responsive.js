const d = document;
export default function responsiveTester(form){
  const $form = d.getElementById(form);
  let tester;// va a almacenar la ventana externa

  d.addEventListener("submit", (e)=>{
    if(e.target === $form){
      //cancelo la accion por default del submit(que no mande los datos del formulario)
      e.preventDefault();
      /* En tester abro una ventana con la direccion del valor del id dirreccion del formulario y
      con sus medidas */
      tester = window.open(
        $form.direccion.value,//Lee la URL ingresada en input id direccion de form
        "teste",//campo obligatorio
        `innerWidth= ${$form.ancho.value},
        innerHeight= ${$form.alto.value}`
        );
    }
  });
  d.addEventListener("click", (e)=>{ if(e.target === $form.cerrar) tester.close();})
}
