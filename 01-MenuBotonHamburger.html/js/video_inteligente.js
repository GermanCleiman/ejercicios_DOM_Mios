const d = document,
w = window;

export default function smartVideo(){
  const $videos = d.querySelectorAll("video[data-smart-video]");
  const cb = (entries)=>{
    entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.play();
    } else {
      entry.target.pause();
    }
    /*Si se produce un cambio de ventana del navegador
    y el evento esta en estado "visible" play sino pause*/
    w.addEventListener("visibilitychange", (e)=>{
      d.visibilityState === "visible"
      ? entry.target.play()
      : entry.target.pause()
    })
  });
  }
  const observer = new IntersectionObserver(cb, {threshold: 0.5});
  //va a ejecutar el video a partir de que se muestre el 50%

  $videos.forEach((el)=>{
    observer.observe(el);
  })
}
