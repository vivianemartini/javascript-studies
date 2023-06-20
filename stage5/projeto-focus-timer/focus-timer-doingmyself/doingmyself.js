// step 1- qdo apertar no play precisa aparecer o pause
//pegar o play

const buttonPlay = document.querySelector('.play')
/* play.classList.add('hide') */


/* teste para ver se tinha pego o play
function log(){
    console.log('hey')

    --inclui onclick='log()' no html
} */
const buttonPause = document.querySelector('.pause')


/* pause.classList.remove('hide') */

//Dom - event-driven
//Evento de click 

//callback - função passada como argumento, só vai acontecer quando chamar de volta

function countdown(){
    setTimeout(function(){
        //o seconds tem que voltar para 60
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        
       //quando chegar no zero
        secondsDisplay.textContent = '00'
        

        if (minutes <= 0){

            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            buttonStop.classList.add('hide')
            buttonSet.classList.remove('hide')

            //para parar o cronometro
            return
        }

    
        if (seconds <= 0){
            seconds = 2

            minutesDisplay.textContent = String(minutes - 1).padStart(2,'0')
        }

        //para que o primeiro segundo receba do numero ex. 25:08
        secondsDisplay.textContent = String(seconds - 1).padStart(2,'0')
        
      
            countdown() //chamando a função aqui - vai seguir diminuindo o numero - recursividade - a funcao executando novamente ate parar ela
        }, 1000)
        //setTimeOutdepois de um tempo vai realizar a funcao
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    //quando clicar no play o Set muda para stop
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    //criou a função para que seja repetida a dfunção
    countdown()

})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
})

// fazer para os outros botões

const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')

buttonStop.addEventListener('click', function() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
})

const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})

// quando clicar no set tem que abrir um prompt

let minutes //pq vai ser alterado

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

console.log(minutesDisplay.textContent)

buttonSet.addEventListener('click', function(){
    minutes = prompt('Quantos minutes?')
    //pegar os minutes com minutesDisplay
    minutesDisplay.textContent = String(minutes).padStart(2,'0')

    //textContent - posso mudar o conteudo de um elmento
})

//quando der o play os minutos tem que mudar - la no buttonPlay

//refatoração do código ver no script do outro arquivo

/* colocando em função os:


buttonPlay.classList.remove('hide')
buttonPause.classList.add('hide')
buttonStop.classList.add('hide')

ficou assim:

function resetControls(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

*/

//colocar nomes significativos para funções e variaveis

/* 

   minutesDisplay.textContent = String(minutes).padStart(2,'0')

   function updateTimerDisplay(minutes,seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}


*/