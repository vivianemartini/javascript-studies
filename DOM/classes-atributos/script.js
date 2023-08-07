// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach((item) => {
    item.classList.add('active')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
    item.classList.remove('active')
})

itensMenu[0].classList.add('active')

// Verifique se as imagens possuem o atributo alt

/* const img = document.querySelectorAll('img')
console.log(img.getAttribute('alt'))

//ou

const src = img.getAttribute('alt')
console.log(src)

//ou

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt) */

const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt')
    console.log(img, possuiAtributo)
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')

link.setAttribute('href', 'https://www.google.com/')

console.log(link)
