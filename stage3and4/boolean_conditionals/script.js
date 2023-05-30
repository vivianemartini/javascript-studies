/*
var x
var possuiGraduacao = true

if(possuiGraduacao) {
    console.log('é verdadeiro')
    var x = 10
} else {
    console.log('é falso')
}

console.log(x)

var possuiDoutorado = false

if (!possuiDoutorado) {
    console.log('possui')
} */


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 34
var idadeIrma = 31

if (minhaIdade > idadeIrma) {
    console.log('é maior')
} else if (minhaIdade === idadeIrma) { //tinha colocado apenas = 
    console.log('é igual')
} else  {
    console.log('é menor')
} 

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//com && retorna sempre o ultimo valor verdadeiro ou o primeiro falso
console.log(expressao)
//3

console.log(5 - '') //5

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // Truthy 
var idade = 28; //Truthy 
var possuiDoutorado = false;// falsy
var empregoFuturo;// falsy
var dinheiroNaConta = 0;// falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log('brasil tem mais habitantts')
} else {
  console.log('brasil tem menos habitantes')
}

/*
if ((5 - 5) && (5 + 5)) {
    console.log('é verdadeiro')
} else {
  console.log('é falso')
}//se sair zero na resposta o valor é falso

*/
// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}//falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');//avalia se é verdadeiro ou falso e retorna o valor
} else {
  console.log('Falso');
}//Cão
//valor ou sempre retorna o valor verdadeiro