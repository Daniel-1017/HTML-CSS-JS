const singinBtn = document.querySelector(".singinBtn");
const singupBtn = document.querySelector(".singupBtn");
const formBx = document.querySelector(".formBx");
const body = document.querySelector("body");

singupBtn.onclick = function() {
  formBx.classList.add("active");
  body.classList.add("active");
}

singinBtn.onclick = function() {
  formBx.classList.remove("active");
  body.classList.remove("active");
}
