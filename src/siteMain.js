import loadMenu from './menu'
import loadContato from './contact'
import loadHome from './home'

function criaPainel() {
  const painel = document.createElement('header')
  painel.classList.add('header')

  const nomeRestaurante = document.createElement('h1')
  nomeRestaurante.classList.add('nome-restaurante')
  nomeRestaurante.textContent = 'HOSIDIUS KITCHEN'

  painel.appendChild(nomeRestaurante)
  painel.appendChild(criaNav())

  return painel
}

function criaNav() {
  const nav = document.createElement('nav')
  nav.classList.add('nav')
  const homeBtn = document.createElement('button')
  homeBtn.classList.add('button-nav')

  homeBtn.textContent = 'Principal'
  homeBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return
    setActiveButton(homeBtn)
    loadHome()
  })

  const menuBtn = document.createElement('button')
  menuBtn.classList.add('button-nav')
  menuBtn.textContent = 'Cardapio'
  menuBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return
    setActiveButton(menuBtn)
    loadMenu()
  })

  const contatoBtn = document.createElement('button')
  contatoBtn.classList.add('button-nav')
  contatoBtn.textContent = 'Contatos'
  contatoBtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return
    setActiveButton(contatoBtn)
    loadContato()
  })

  nav.appendChild(homeBtn)
  nav.appendChild(menuBtn)
  nav.appendChild(contatoBtn)

  return nav
}

function setActiveButton(button) {
  const botoes = document.querySelectorAll('.button-nav')

  botoes.forEach((button) => {
    if (button !== this) {
      button.classList.remove('active')
    }
  })

  button.classList.add('active')
}

function criaMain() {
  const principal = document.createElement('main')
  principal.classList.add('principal')
  principal.setAttribute('id', 'principal')
  return principal
}

function iniciaSite() {
  const content = document.getElementById('content')

  content.appendChild(criaPainel())
  content.appendChild(criaMain())

  setActiveButton(document.querySelector('.button-nav'))
  loadHome()
}

export default iniciaSite
