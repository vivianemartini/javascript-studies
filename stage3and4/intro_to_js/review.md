- sintaxe e boas práticas <br>

ponto e virgula é facultativo <br>

escrever com camelCase <br>

procurar escrever código em inglês <br>

- variáveis <br>

const <br>
let<br>
var<br>

- tipos de dados <br>

String <br>
Number<br>
Boolean<br>
undefined  <br>
null<br>

- estruturas de dados <br>

// Array<br>
const myArray = [1, 2, "a", "b", true]<br>

// Object<br>
const myObject = { property: "value" }<br>

- funções <br>

// 1. Criação e tipos de funções<br>
// named<br>
function myFunction() {}<br>

// Anonymous<br>
const myFunction = function() {}<br>

// Arrow<br>
const myFunction = () => {}<br>

// arguments & return<br>
function sum(a, b) {
	return a + b
}

const sum = (a, b) => a + b<br>

// 2. Excecução<br>
myFunction()<br>
sum(1, 2)

- fluxo da aplicação <br>

// if, else if, else<br>
const isRainning = true<br>
if (isRainning) {
	alert("Está chovendo, pega o guarda chuvas 🌧")
} else {
	alert("Dia limpo ⛅️")
}

// switch<br>
const water = "com gás"

switch(water) {
	case "com gás": 
		alert("Essa água é com gás")
		break
	case "sem gás":
		alert("Essa água é sem gás")
		break
	case "da fonte":
		alert("Água fresquiha da fonte")
		break	
	default:
		alert("cadê minha água?")
}

- estruturas de repetição <br>

// while <br>
let play = true
while(play) {
	// fazer algo até o play ser falso
	// criar uma lógica para o play se tornar falso
	// se não, loop eterno
} <br>

// for (tradicional) <br>
let text = "abc"
for (let i = 0; i < text.length; i++){
	alert(text[i])
}

// for..of <br>
for (let char of text) {
	alert(char)
}

- operadores <br>

() // group operator - agrupamento <br>

// matemáticos <br>
* // multiplicação <br>
** // exponeciação <br>
/ // divisão <br>
% // resto da divisão <br>
+ // soma <br>
- // subtração <br>

// lógicos<br>
&& // E lógico <br>
|| // OU lógico<br>
! // Não lógico<br>

// comparação - relacional<br>
> // maior<br>
< // menor<br>
>= // maior igual<br>
<= // menor igual<br>
== // igualdade<br>
=== // igual no valor e do mesmo tipo (estritamente igual)<br>
!= // desigualdade<br>
!== // diferente do valor ou do tipo (estritamente diferente)<br>

// Atribuição <br>
= // atribuição de valor <br>
*= // multiplicação e atribuição de valor <br>
/= // divisão e atribuição de valor<br>
+= // soma e atribui valor<br>
-= // diminui e atribui<br>


// outros operadores/expressões<br>

typeof // tipo do dado<br>
++ // incremento<br>
-- // decremento<br>
{} // objeto vazio ou bloco de código<br>
[] // array vazio<br>
, // separa elementos de um array, objeto ou criação de multiplas variáveis<br>