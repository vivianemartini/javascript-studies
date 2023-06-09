const buttoPlay = document.querySelector('.play')
const buttoPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonStep = document.querySelector('.step')

// Event-driven
// programação imperativa
// callback
buttonPlay.addEventListener('click', function() {
  play.classList.add('hide')
  pause.classList.remove('hide')
})

buttonPause.addEventListener('click', function() {
  pause.classList.add('hide')
  play.classList.remove('hide')
})