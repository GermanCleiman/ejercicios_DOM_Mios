const d = document;

export default function contactFormValidations(){
const $form = d.querySelector(".contact-form"),
$inputs = d.querySelectorAll(".contact-form [required]");

console.log($inputs);

$inputs.forEach((input)=>{
  const $span =d.createElement("span");
  $span.id = input.name;//el name del input
  $span.textContent = input.title;//el title del input
  input.insertAdjacentElement("afterend", $span)/*pongo el $spam debajo del input */
})
}
