function toggleMode() {
 const html = document.documentElement
html.classList.toggle('light')
const img = document.querySelector("#profile img")

if(html.classList.contains ("light")) {
//trocar a imagem
img.setAttribute("src", "./avatarbranco.png")
}
else {
  img.setAttribute("src", "/avatar.png")
}
//se tiver lightmode colocar a branca
}