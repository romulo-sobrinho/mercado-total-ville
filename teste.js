
/* SEM USAR e.target e com função onclick direto no HTML*/
function mudarCursor() {
  let l = document.getElementsByClassName("logo__text");
  for (let i in l) {
    l[i].style.cursor = "pointer";
  }
}

/* COM e.target */
function mudarCor(e) {
  e.target.style.color = "red";
}

function mudarTexto(e) {
  e.target.innerText = "mudou 33";
}

let texto = document.getElementsByClassName("logo__text");
for (let i in texto) {
  texto[i].addEventListener("click", mudarTexto);
  texto[i].addEventListener("click", mudarCor);
}