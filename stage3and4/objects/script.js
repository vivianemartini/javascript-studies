var pessoa = {
    nome: 'Vivi',
    idade: 34,
    profissao: 'Dev',
    possuiFaculdade: true,
}
  
pessoa.nome; // 'vivi'
pessoa.possuiFaculdade; // true

var quadrado = {
    lados: 4,
    area: function(lado) {
      return lado * lado;
    },
    perimetro: function(lado) {
      return this.lados * lado; //usando this para fazer referencia
    },
}
  
quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20
  
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi.toFixed(2)); // 3.14


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
    nome: 'Viviane',
    sobrenome: 'Martini',
    idade: 34,
    profissao: 'Dev',
    possuiFaculdade: true,

}

dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}


// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000
console.log(carro.preco)
  
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
  
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
        if (pessoa === 'homem') {
        return 'latir'
        } else {
            return 'Nada'
        }
    }
}