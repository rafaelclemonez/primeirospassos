function toggleMode() {
 const html = document.documentElement
html.classList.toggle('light')
const img = document.querySelector("#profile img")

//trocar a imagem
img.setAttribute("src", "./avatarbranco.png")

//se tiver lightmode colocar a branca
}