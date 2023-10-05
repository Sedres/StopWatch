const time = document.getElementById('time')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let miliseconds = 0
let seconds = 0
let minutes = 0
let interval = undefined

start.addEventListener('click', () => {
  clearInterval(interval)
  start.classList.add('hide')
  interval = setInterval(startTickWatch, 10)
})
stop.addEventListener('click', () => {
  start.classList.remove('hide')
  clearInterval(interval)
})
reset.addEventListener('click', () => {
  clearInterval(interval)
  start.classList.remove('hide')
  miliseconds = 0
  seconds = 0
  minutes = 0
  time.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${
    seconds < 10 ? '0' + seconds : seconds
  }:${miliseconds < 10 ? '0' + miliseconds : miliseconds}`
})

const startTickWatch = () => {
  miliseconds++
  if (miliseconds === 100) {
    seconds++
    miliseconds = 0
  }
  if (seconds === 60) {
    minutes++
    seconds = 0
  }

  time.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${
    seconds < 10 ? '0' + seconds : seconds
  }:${miliseconds < 10 ? '0' + miliseconds : miliseconds}`
}
