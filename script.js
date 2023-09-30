function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // se isso for verdadeiro, então faça isso

  /////////////////////////////////////////////////

  // imagem

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Imagem de perfil fundo amarelo")
  } else {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Imagem de perfil fundo degrade")
  }
}
