const d = document;

export default function countDown(id, limitDate, finalMessage){
  const $countDown = d.getElementById(id),
  countDownDate = new Date(limitDate).getTime();//getTime en milisegundos de limitDate

  let countDownTempo = setInterval(() => {// se pone dentro de una variable para despues poder cortarlo
    let now = new Date().getTime(),//Hoy
    limitTime = countDownDate - now,
    days = Math.floor(limitTime / (1000*60*60*24)),
    hours =
    ("0" +
    Math.floor(limitTime % (1000*60*60*24)/(1000*60*60))).slice(-2),
    /*El sobrante de dias dividido el calculo de horas
    Agrego un cero adelante y.slice(recorta) a partir del segundo caracter*/
    minutes = ("0" +
    Math.floor(limitTime % (1000*60*60)/(1000*60))).slice(-2),
    //El sobrante de horas dividido el calculo de minutos
    seconds = ("0" +
    Math.floor(limitTime % (1000*60)/(1000))).slice(-2);
    //El sobrante de minutos dividido el calculo de segundos
    $countDown.innerHTML = `<h2>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h2>`

    //console.log(countDownDate, now, limitTime);

    if(limitTime < 0){
      clearInterval(countDownTempo);
      $countDown.innerHTML = `<h2>${finalMessage}</h2>`

    }

  }, 1000);
}
