const d = document;
export default function draw(btn, selector){
  const getWinner = (selector)=>{
    const $players = d.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];// esto es un list items
    //console.log($players, random, winner, winner.textContent);
    return `El ganador es: ${winner.textContent}`;// muestro el contenido de texto del item seleccionado
  };

  d.addEventListener("click", (e)=>{
    if (e.target.matches(btn)){
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  })
}
// para buscar directamente en la consola del navegador
// 1º pegar la funcion completa y despues ejecutar abajo
  const getWinnerComment = (selector)=>{
    const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length),
    winner = $players[random];
    return `El ganador es: ${winner.textContent}`;
  };
// prueba en YouTube
//getWinnerComment("#body #header span .style-scope ytd-comment-renderer");
