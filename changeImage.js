
function changeImage(e) {
  if(e.target.id == "imgBanner1") {
    e.target.src = './images/teste/11.PNG';
    e.target.style.animation = "expand 1s";
  } else if(e.target.id == "imgBanner2") {
    e.target.src = './images/teste/12.PNG';
    e.target.style.animation = "expand 1s";
  } else if(e.target.id == "imgBanner3") {
    e.target.src = './images/teste/13.PNG';
    e.target.style.animation = "expand 1s";
  } else if(e.target.id == "imgBanner4") {
    e.target.src = './images/teste/14.PNG';
    e.target.style.animation = "expand 1s";
  }
}

let imageBanner = document.getElementsByClassName("imgBanner");
for (let indice in imageBanner) {
  imageBanner[indice].addEventListener("click", changeImage);
}