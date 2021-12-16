const d = document,
w = window;

export default function speechReader(){
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();//crea hijo para leer

    //console.log(speechMessage);// su atributo voice lo puedo ver despues de cargar el dom
    /*w.SpeechSynthesis en su onvoiceschanged, w.SpeechSynthesis.getVoices(); su name*/

    let voices = [];

  d.addEventListener("DOMContentLoaded", (e)=>{
    //console.log(w.SpeechSynthesis.getVoices());//primero hay que ejecutar el metodo onvoiceschanged
    w.speechSynthesis.addEventListener("voiceschanged", (e)=>{//sin on
      //console.log(e);
      voices = w.speechSynthesis.getVoices();
      //console.log(voices);

      voices.forEach((voice)=>{
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} *** ${voice.lang}`;

        $speechSelect.appendChild($option);
      })
    })
  });

  d.addEventListener("change", (e)=>{//si algo cambia
    if(e.target === $speechSelect){//dentro de $speechselect
      speechMessage.voice = voices.find((voice)=> e.target.value === voice.name)
      // busco en voices el valor del evento que sea igual a voice.name
    }
    //console.log(speechMessage);
  });

  d.addEventListener("click", (e)=>{
    if(e.target === $speechBtn){
      speechMessage.text = $speechTextarea.value;//al text le agreco el valor del text area
      w.speechSynthesis.speak(speechMessage);//llamo a la funcion speak y le paso..
    }
  });



}
