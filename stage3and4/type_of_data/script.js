// Declare uma variável contendo uma string

var lastConcert = 'Harry Styles'

// Declare uma variável contendo um número dentro de uma string

var age = '34'

// Declare uma variável com a sua idade

var age = 34

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var firstname = 'viviane'

var lastName = 'martini'

var fullName = firstname + ' ' + lastName
var fullName2 = `${firstname} ${lastName}`
console.log(fullName)
console.log(fullName2)

// Coloque a seguinte frase em uma variável: It's time

var sentence = `It's time`
var sentence2 = 'It\'s time again'
console.log(sentence)
console.log(sentence2)

var sentence2 = "Esse é o \"melhor\" jogo"
console.log(sentence2)

// Verifique o tipo da variável que contém o seu nome

console.log(typeof firstname)


var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
console.log(frase2)