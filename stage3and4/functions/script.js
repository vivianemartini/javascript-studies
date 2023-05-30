function areaQuadrado(lado) {
    return lado * lado;
  }
  
console.log(areaQuadrado(4)) // 16
console.log(areaQuadrado(5)) // 25
console.log(areaQuadrado(2))// 4


function pi() {
    return 3.14;
}
 
var total = 5 * pi(); // 15.7 
console.log(total.toFixed(2))
console.log(pi)//print o objeto
  
// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
  }
  
//console.log(imc(80, 1.80).toFixed(2)) // 80 e 1.80 são os argumentos
//console.log (imc(60, 1.70).toFixed(2)) // 60 e 1.70 são os argumentos
  
function corFavorita(cor) {
    if(cor === 'azul') {
      return 'Você gosta do céu';
    } else if(cor === 'verde') {
      return 'Você gosta de mato';
    } else {
      return 'Você não gosta de nada';
    }
  }

console.log(corFavorita()); // retorna 'Você não gosta de nada'

//ARGUMENTOS PODEM SER FUNÇÕES

addEventListener('click', function() {
    console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
  
addEventListener('click', function() {
    console.log('gotta be bad');
});

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
  }
  
imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined
  

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
      return 'Informe a sua idade!';
    } else if(idade >= 60) {
      return true;
    } else {
      return false;
    }
}

console.log(terceiraIdade(60))


