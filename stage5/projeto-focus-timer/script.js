const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

function resetControls(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes,seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent) 
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0){
      resetControls()
      return
      //achou o return encontra uma parada
    }

    if (seconds <= 0) {
      seconds = 2
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds -1))
    //recursão = quando uma função chama ela mesma
    countdown()
  }, 1000)
}

// Event-driven
// programação imperativa
// callback
buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})

buttonStop.addEventListener('click', function() {
  //declarativa - digo o q não importa como
  resetControls()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
 })
  
buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})


buttonSet.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?')
    updateTimerDisplay(minutes, 0)
})
