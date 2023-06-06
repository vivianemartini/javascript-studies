/* const message = "mensagem" // essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar
//alert(message)

export default message
// o default não tem nome especifico */

//posso export função
/* export default function() {
    return 'alo'
} */

//quero exportar mais de um como lista
/* const text = "texto"
const message = "outra messagem"

export { text, message} */

//outra maneira 
/* export const text = "texto"
export const message = "outra messagem" */

// Named export

/* export const today = Date.now()

// exportando um valor já existente
const double = number => number * 2
export { double }
// exportando diversos
// export { today, double } */

// Misto export

/* const date = new Date()

const greeting = name => `hello ${name}`

export default function (argument) {
console.log(date, greeting(argument))
}

export { date, greeting } */

//import as 
/* 
export function sum(a, b) {
    return a + b
} */

//import * as

export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b

// export { sum, multiply, subtract, divide }