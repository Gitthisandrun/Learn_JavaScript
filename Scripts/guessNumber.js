let steps = 1
let userNumber

const getRandomInRange = (min = 0, max = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomNumber = getRandomInRange(1, 100)
console.log('randomNumber', randomNumber)

while (userNumber != randomNumber) {
  userNumber = +prompt('Введите число от 1 до 100:')
  if (userNumber < randomNumber && userNumber > 0) {
    alert('Попробуйте ввести число побольше')
  } else if (userNumber > randomNumber && userNumber < 101) {
    alert('Попробуйте ввести число поменьше')
  } else if (userNumber <= 0 || userNumber >= 101) {
    alert('Выберете число из диапазона от 1 до 100')
  } else if (isNaN(userNumber)) {
    alert('Вводить можно только цифры')
  } else {
    alert(`Вы выйграли!\nЗагаданое число: ${randomNumber}\nКоличество попыток: ${steps}`)
  }
  steps++
}
