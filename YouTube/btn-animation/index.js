const buttons = document.querySelectorAll("a");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let repples = document.createElement("span");
    repples.style.left = x + "px";
    repples.style.top = y + "px";
    this.appendChild(repples);

    setTimeout(() => {
      repples.remove();
    }, 1000);
  });
});
