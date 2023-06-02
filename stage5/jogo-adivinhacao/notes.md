<img src="jogo.png">


## Intro to DOM

Document Object Model<br>
Modelagem do documento como objeto JavaScript

Representação do HTML em objetos JavaScript<br>
Atributos (propriedades) e métodos (funcionalidades)

Criado pelo navegador (browser)<br>
É uma interface (API) usada no navegador

Pra que serve?

JavaScript usa a DOM para se conectar ao HTML
DOM não é o JavaScript

Manipular o HTML com JavaScript<br>
Modificar o HTML, os estilos e até disparar ações

Dev Tools
Através das ferramentas do desenvolvedor Dev Tools , observaremos a DOM.

// Objeto global presente em qualquer página no navegador<br>

window<br>

// Representação do documento<br>
document

<br>

## Manipulando elementos

Element e Node<br>
As tags HTML, quando usadas pela DOM, podemos chamar de node (nó) ou de element <br>(elemento)


// Pegando um elemento<br>
const h1 = document.querySelector('h1') //HTMLElement<br>
// Pegando vários elementos<br>
const links = document.querySelectorAll('a') // NodeList <br>

Recebendo e modificando valores<br>
Podemos pegar qualquer valor das tags e, também, alterar eles<br>

// innerText<br>
console.log(h1.innerText)<br>
// innerHTML<br>
console.log(h1.innerHTML)<br>
// alterando o texto (ou o HTML)<br>
h1.innerText = "Novo título"<br>

Alterando estilos<br>
Podemos alterar estilos ou adicionar classes em elementos<br>

// alterando o estilo<br>
h1.style.backgroundColor = "red"<br>
// adicionando classes<br>
h1.classList.add('hide')<br>
// removendo classes<br>
h1.classList.remove('hide')<br>
// alternando entre classes<br>
h1.classList.toggle('hide')<br>