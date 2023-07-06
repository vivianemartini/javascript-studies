// Retorne o url da página atual utilizando o objeto window

const hrefPage = window.location.href
console.log(hrefPage)


// Seleciona o primeiro elemento da página que
// possua a classe ativo

const classActive  = document.querySelector('.ativo')

// Retorne a linguagem do navegador

const linguagem = window.navigator.language

// Retorne a largura da janela 

const largura = window.innerWidth