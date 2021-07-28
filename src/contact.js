import imglocalizacao from 'url:./images/localizacao.png'

function criaContato() {
  const contato = document.createElement('div')
  contato.classList.add('contato')

  const telefone = document.createElement('p')
  telefone.textContent = '1111-111-111'

  const endereco = document.createElement('p')
  endereco.textContent = 'Mess Road, ao sul do Castelo de Kourend'

  const localizacao = document.createElement('img')
  localizacao.classList.add('localizaimg')
  localizacao.src = imglocalizacao
  localizacao.alt = 'Localizacao do Restaurante'

  contato.appendChild(telefone)
  contato.appendChild(endereco)
  contato.appendChild(localizacao)

  return contato
}

function loadContato() {
  const principal = document.getElementById('principal')
  principal.textContent = ''
  principal.appendChild(criaContato())
}

export default loadContato
