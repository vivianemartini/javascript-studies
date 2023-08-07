/* const animais = document.getElementById('animais')
console.log(animais.innerText) */

// Retorne no console todas as imagens do site

const images = document.getElementsByTagName('img')
//or querySelectorAll

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imageAnimals = document.querySelectorAll('img[src^="./assets/image"]')

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]')

// Selecione o primeiro h2 dentro de .animais-descricao

const h2 = document.querySelector('.animais-descricao h2')


//or

const animais = document.querySelector('.animais-descricao')
const h2Animais = animais.querySelector('h2')

// Selecione o último p do site

const p = document.querySelector('p:last-child')

/* or
const paragraphs = document.querySelectorAll('p')
console.log(paragraphs[--paragraphs.length])
 */