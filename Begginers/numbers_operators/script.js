// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

console.log(total)//35

// Crie duas expressões que retornem NaN

var expression1 = 'comprei 10'/2

var expression2 = 'comprei 1'  -3
console.log(expression1, expression2)

// Somar a string '200' com o número 50 e retornar 250

var value1 = +'200';
//+value1
var value2 = 50;

console.log(value1 + value2)

// Incremente o número 5 e retorne o seu valor incrementado

var x = 5
console.log(x++)
console.log(x)

var y = 5
console.log(y--)
console.log(y)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(`${+numero / 2}Kg`)

//diferente resolução

var numero = +'80' / 2
var unidade = 'kg';
var peso = numero + unidade; 

console.log(peso)


var idade = '28'
var somaIdade = 5

console.log(+idade + somaIdade)

//incluindo o + na idade ele transforma a string em numero