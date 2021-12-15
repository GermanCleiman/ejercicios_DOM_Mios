const d = document;

export default function contactFormValidations(){
const $form = d.querySelector(".contact-form"),
$inputs = d.querySelectorAll(".contact-form [required]");

console.log($inputs);

$inputs.forEach((input)=>{
  const $span =d.createElement("span");
  $span.id = input.name;//el name del input
  $span.textContent = input.title;//el title del input
  $span.classList.add("contact-form-error","none");
  input.insertAdjacentElement("afterend", $span);/*pongo el $spam debajo del input */
});

d.addEventListener("keyup", (e)=>{
  if(e.target.matches(".contact-form [required]")){
    let $input = e.target,
    pattern = $input.pattern || $input.dataset.pattern;//si tiene pattern ó si tiene data-pattern
    console.log($input, pattern);
  }
});
}
