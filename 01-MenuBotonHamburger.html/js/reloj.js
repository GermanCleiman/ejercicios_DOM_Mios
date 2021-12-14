const d = document;
export function digitalClock(clock, btnPlay, btnStop){
  let clockTempo ;
  d.addEventListener("click", (e)=>{
    if(e.target.matches(btnPlay)){
     clockTempo =  setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h2>${clockHour}</h2>`
      }, 1000);
      e.target.disabled = true;// desabilito el boton de inicio de reloj que viene seleccionado por el evento
    }

    if(e.target.matches(btnStop)){
      clearInterval(clockTempo);//elimino el interval
      d.querySelector(clock).innerHTML = null;//Borro el reloj
      d.querySelector(btnPlay).disabled = false;// habilito nuevamente el boton de inicio de reloj
    }
  })
}

export function alarm(sound, btnPlay, btnStop){
  let alarmaTempo;

  const $alarm = d.createElement("audio");//Creo la etiqueta de audio
  $alarm.src = sound;//le indico el archivo de audio

  d.addEventListener("click", (e)=>{
    if(e.target.matches(btnPlay)){
     alarmaTempo = setTimeout(() => {
        $alarm.play();//Activo el archivo de audio
      }, 2000);
      e.target.disabled = true;
    }

    if(e.target.matches(btnStop)){
      clearInterval(alarmaTempo);//elimino el interval
      $alarm.pause();//pauso el sonido
      $alarm.currentTime = 0;//Vuelve al inicio del audio
      d.querySelector(btnPlay).disabled = false;// habilito nuevamente el boton de inicio de reloj
    }
  })
}
