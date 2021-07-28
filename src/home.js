import fornoimg from 'url:./images/forno.png'

function criaHome() {
  const home = document.createElement('div')
  home.classList.add('home')

  const homeimg = document.createElement('img')
  homeimg.classList.add('homeimg')
  homeimg.src = fornoimg
  homeimg.alt = 'Imagem do restaurante'

  home.appendChild(criaP('O melhor restaurante de Gielinor'))
  home.appendChild(homeimg)

  return home
}

function criaP(texto) {
  const parag = document.createElement('h1')
  parag.textContent = texto
  return parag
}

function loadHome() {
  const principal = document.getElementById('principal')
  principal.textContent = ''
  principal.appendChild(criaHome())
}
export default loadHome
