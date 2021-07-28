import batatatum from 'url:./images/batataatum.png'
import batatatum from 'url:./images/batataatum.png'
import queijo from 'url:./images/queijo.png'
import sardinha from 'url:./images/sardinha.png'
import batataqueijo from 'url:./images/batataqueijo.png'
import batatacogu from 'url:./images/batatacogu.png'

function criaMenu() {
  const menu = document.createElement('div')
  menu.classList.add('menu')

  menu.appendChild(
    geraItemMenu('Pizza de Queijo', queijo, 'Pizza de queijo com molho da casa')
  )

  menu.appendChild(
    geraItemMenu(
      'Pizza de Sardinha',
      sardinha,
      'Pizza de sardinha com molho da casa'
    )
  )

  menu.appendChild(
    geraItemMenu(
      'Batata Recheada com Queijo',
      batataqueijo,
      'Batata assada recheada com queijo'
    )
  )

  menu.appendChild(
    geraItemMenu(
      'Batata Recheada com Cogumelos',
      batatacogu,
      'Batata assada recheada c cogumelos'
    )
  )

  menu.appendChild(
    geraItemMenu(
      'Batata Recheada com Atum e Milho',
      batatatum,
      'Batata assada recheada c atum e milho'
    )
  )

  return menu
}

function geraItemMenu(nome, nametag, descricao) {
  const itemMenu = document.createElement('div')
  itemMenu.classList.add('item-menu')

  const nomePrato = document.createElement('h2')
  nomePrato.textContent = nome

  const descricaoPrato = document.createElement('p')
  descricaoPrato.textContent = descricao

  const fotoPrato = document.createElement('img')
  fotoPrato.classList.add('fotoPrato')
  fotoPrato.src = nametag
  fotoPrato.alt = `${nametag}`

  itemMenu.appendChild(fotoPrato)
  itemMenu.appendChild(nomePrato)
  itemMenu.appendChild(descricaoPrato)

  return itemMenu
}

function loadMenu() {
  const principal = document.getElementById('principal')
  principal.textContent = ''
  principal.appendChild(criaMenu())
}

export default loadMenu
