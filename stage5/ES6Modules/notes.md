## ES Modules

Sintaxe que entrou no JS no EcmaScript 6 (ES6) <br>
Disponibilizar qualquer tipo de dado entre arquivos <br>
Separar código em diversos arquivos <br>
Isolar escopo e código <br>

# Preparando o ambiente para usar ES Modules

Numa nova pasta, vamos criar os arquivos:<br>
index.html, main.js, utils.js<br>
Prepare o index.html<br>
Crie a estrutura e adicione o main.js com a tag <script><br>
Habilite a tag <script> para utilizar a sintaxe<br>

// para usar, precisamos adicionar o atributo<br>
// type="module" no nosso script principal<br>
<script src="main.js" type="module" ></script>

## import e export simples

Podemos importar qualquer arquivo e ele será executado imediatamente, como uma função é executada.<br>
// utils.js<br>
const message = "mensagem" // essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar<br>
alert(message)<br>
// main.js<br>
import './utils.js' // nessa linha ele importa e já executa o arquivo<br>

# default import e export

Exportamos qualquer tipo de dado e, ao importar, podemos dar qualquer nome.<br>
// utils.js<br>
export default 'algum dado'<br>
// ou, para um dado já existente<br>
const text = 'alguma coisa'<br>
export default text<br>
// main.js<br>
import qualquerNome from './utils.js'<br>
Somente 1 default por arquivo.<br>

# named export

Exportamos uma variável ou função e, ao importar, devemos colocar o mesmo nome.<br>
// utils.js<br>
export const today = Date.now()<br>
// exportando um valor já existente<br>
const double = number => number * 2<br>
export { double }<br>
// exportando diversos<br>
// export { today, double }<br>
// main.js<br>
import { today } from './utils.js'<br>
É possível ter múltiplos exports<br>

# Misto (named e default)

Poderemos usar um default export por arquivo e um (ou mais) named export.<br>
//utils.js<br>
const date = new Date()<br>
const greeting = name => `hello ${name}`<br>
export default function (argument) {<br>
console.log(date, greeting(argument))<br>
}<br>
export { date, greeting }<br>
// main.js<br>
import funcaoPadrao, { date, greeting } from './utils.js'<br>

# import as

É possível renomear um ou mais dados que foram exportados.<br>
// utils.js<br>
export function sum(a, b) {<br>
return a + b<br>
}<br>
// main.js<br>
import { sum as soma } from './utils.js<br>

# import * as
Podemos importar todos os named exports e dar um nome padrão.<br>
//utils.js<br>
export const sum = (a, b) => a + b<br>
export const multiply = (a, b) => a * b<br>
export const subtract = (a, b) => a - b<br>
export const divide = (a, b) => a / b<br>
// ou<br>
// export { sum, multiply, subtract, divide }<br>
//main.js<br>
import * as calculator from './utils.js'<br>

Referência
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export