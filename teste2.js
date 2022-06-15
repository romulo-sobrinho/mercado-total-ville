function aumentar(e) {
  e.target.style.animation = "expand 1s";
  e.target.style.cursor = "pointer";
}

let imgBanner = document.getElementsByClassName("imgBanner");
for (let i in imgBanner) {
  imgBanner[i].addEventListener("click", aumentar);
}