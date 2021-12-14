const d = document,
n = navigator;

export default function webCam(id, start, pause){
  //utilizo el objeto .mediaDevices y su metodo .getUserMedia()
  const $videos = d.getElementById(id);
  //console.log(n.mediaDevices.getUserMedia);
  //console.log(id);
  d.addEventListener("click", (e)=>{
    if(e.target.matches(start)){
      if(n.mediaDevices.getUserMedia){
        // este get es una promesa que utilizamos con then.catch
        //En video puedo poner la medida{width: 150, height: 75}
        n.mediaDevices.getUserMedia({video: {width: 300, height: 250}, audio:false}).then((stream)=>{
          console.log(stream);
          $videos.srcObject= stream;
          $videos.play();
        })
        .catch((err)=>{
          $videos.insertAdjacentHTML("beforebegin",`<p>¡Sucedió el siguiente error!: ${err}</p>`);
          console.log(`¡Sucedió el siguiente error!: ${err}`);
        });
      }
    }
    if(e.target.matches(pause)){
      $videos.pause();
      $videos.removeAttribute(1);

    }
  });
}



