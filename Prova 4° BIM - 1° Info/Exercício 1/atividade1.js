function teclas() {
var imagem = document.querySelector("img")
var corpo = document.querySelector("body")
var texto = document.querySelector("p")


if (event.keyCode == "39"){
imagem.src = "seta-direita.png"
corpo.style.backgroundColor = "green"
texto.innerHTML = "Seta direita"
}

    if (event.keyCode == "37"){
    imagem.src = "seta-esquerda.png"
    corpo.style.backgroundColor = "yellow"
    texto.innerHTML = "Seta esquerda"
    }
}