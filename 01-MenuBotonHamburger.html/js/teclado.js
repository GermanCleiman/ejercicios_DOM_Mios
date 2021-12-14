const d = document;

export function shortcuts(e){
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.altKey);
  // console.log(`alt: ${e.altKey}`);
  // console.log(e.ctrlKey);
  // console.log(`ctrl: ${e.ctrlKey}`);
  // console.log(e.shiftKey);
  // console.log(`shift: ${e.shiftKey}`);
  // console.log(e);
  if(e.key === "a" && e.altKey){
    alert("Lanzaste una alerta por teclado");
  }
  if(e.key === "p" && e.altKey){
    prompt("Lanzaste un prompt por teclado");
  }
  if(e.key === "c" && e.altKey){
    confirm("Lanzaste un confirm por teclado");
  }
}

let x= 0, y = 0;

export function moveBall(e, ball, stage){
  const $ball = d.querySelector(ball),
  $stage = d.querySelector(stage),
  limitsBall = $ball.getBoundingClientRect(),//Devuelve un objeto conel ancho,atlto y distancia a los laterales
  limitsStage = $stage.getBoundingClientRect();

  // console.log(e.keyCode);
  // console.log(e.key);
  // console.log(limitsBall, limitsStage);

  switch (e.keyCode) {

    case 37:
      /*Por default se mueve el $ball y es scroll del navegador, hay que bloquear el scroll con
        e.preventDefault(), solo en cada movimiento para que se pueda usar en los demas casos */
      if(limitsBall.left > limitsStage.left){
        e.preventDefault();
        x--;//si la posicion left de Ball es > a... , x--}
      }
        break;
    case 38:
      if(limitsBall.top > limitsStage.top){
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if(limitsBall.right < limitsStage.right){
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if(limitsBall.bottom < limitsStage.bottom){
        e.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  //El style transform, traslada en x e y, el $ball
}
