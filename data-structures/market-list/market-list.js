/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.

  i++  = sinal de incremento
*/

alert("Vamos fazer a lista do mercado, diga o que precisa:")

let marketList = [];

for(let i = 0; i < 10; i++) {
  let itemName = prompt("Digite o item " + (i + 1))

  marketList[i] = itemName
}

alert(marketList)