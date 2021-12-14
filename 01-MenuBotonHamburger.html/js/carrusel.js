const d = document;
export default function slider(){
  const $nextBtn = d.querySelector(".slider-btns .next"),
  $prevBtn = d.querySelector(".slider-btns .prev"),
  $slides = d.querySelectorAll(".slider-slide");
  let $continuo = d.querySelector("#continuo"),
  $contParar = d.querySelector("#continuo-parar");
  //console.log($nextBtn, $prevBtn, $slides);
  //console.log($nextBtn, $prevBtn, $slides);
  let i = 0;
  let intervalId;
  d.addEventListener("click", (e)=>{
    if(e.target === $prevBtn){
      e.preventDefault();
      console.log($slides[i])
      $slides[i].classList.remove("active");
      i--;
      if(i < 0){
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }
    if(e.target === $nextBtn){
      e.preventDefault();
      //console.log($slides[i])
      $slides[i].classList.remove("active");
      i++;
      if(i >= $slides.length){
        i = 0;
      }
      $slides[i].classList.add("active");
    }
    function carrusell() {
      console.log($slides[i])
      $slides[i].classList.remove("active");
      i--;
      if(i < 0){
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");

    }
    if(e.target === $continuo){
      intervalId = setInterval(carrusell,2000);
    }

    if(e.target === $contParar){
      clearInterval(intervalId);
      intervalId = null;
      console.log("parar");
    }
  });
}
