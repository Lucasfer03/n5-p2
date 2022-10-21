const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const pointDisplay = document.querySelector('.point')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddTime = document.querySelector('.addTime')
const buttonRemoveTime = document.querySelector('.removeTime')
const buttonFlorest = document.querySelector('.florest')
const buttonRain = document.querySelector('.rain')
const buttonHouse = document.querySelector('.house')
const buttonFirePlace = document.querySelector('.fireplace')
const buttonSun = document.querySelector('.white-mode')
const buttonMoon = document.querySelector('.dark-mode')
const bodyColor = document.querySelector('body')
let minutes

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countDown()
  }, 1000)
}

buttonPlay.addEventListener('click', () => {
  countDown()
})
buttonStop.addEventListener('click', () => {
  minutes = prompt('Quantos minutos?') || 0
  updateTimerDisplay(minutes, 0)
})
buttonAddTime.addEventListener('click', () => {
  let minutes = Number(minutesDisplay.textContent)
  updateTimerDisplay(minutes + Number(5), 0)
})
buttonRemoveTime.addEventListener('click', () => {
  let minutes = Number(minutesDisplay.textContent)
  updateTimerDisplay(minutes - Number(5), 0)
})

buttonFlorest.addEventListener('click', () => {
  const florestSound = new Audio("sounds/Floresta.wav")
  florestSound.loop = true
  florestSound.play()
})

buttonRain.addEventListener('click', () => {
  const rainSound = new Audio("sounds/Chuva.wav")
  rainSound.loop = true
  rainSound.play()
})

buttonHouse.addEventListener('click', () => {
  const houseSound = new Audio("sounds/Cafeteria.wav")
  houseSound.loop = true
  houseSound.play()
})

buttonFirePlace.addEventListener('click', () => {
  const fireSound = new Audio("sounds/Lareira.wav")
  fireSound.loop = true
  fireSound.play()
})

buttonSun.addEventListener('click', () => {
bodyColor.classList.add("dark")
bodyColor.style.backgroundColor = "black"
})

buttonMoon.addEventListener('click', () => {
bodyColor.classList.remove('dark')
bodyColor.style.backgroundColor = "white"
})