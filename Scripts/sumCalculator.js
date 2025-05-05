// Просим пльзователя ввести желаемое количество операндов, проверяем на пустоту и NaN
let operandsNumber = prompt(`Сколько чисел Вы хотите сосчитать?`).trim()

if (!!operandsNumber == false) {
  alert('Вы ничего не ввели!')
} else {
  operandsNumber = +operandsNumber
  if (operandsNumber === 0) {
    alert('Всё готово!')
  } else if (isNaN(operandsNumber)) {
    alert('Укажите количество используя только цифры')
  } else {

    // Запрашиваем у пользователя значения операндов
    const operands = []
    for (i = 0; i < operandsNumber; i++) {
      let operand = +prompt(`Введите ${i + 1}-e число:`).trim();
      if (isNaN(operand)) {
        alert('Вводите только цифры')
        break
      } else {
        operands.push(operand);
      }
    }

    // Просим пользователя выбрать операцию
    const operator = prompt(`Выберете операцию:\n (  +  ,  -  ,  *  ,  /  )`).trim()
    let sumOperands = operands[0]
    if (operator === '+') {
      sumOperands = operands.reduce((sum, current) => sum + current)
    } else if (operator === '-') {
      sumOperands = operands.reduce((sum, current) => sum - current)
    } else if (operator === '*') {
      sumOperands = operands.reduce((sum, current) => sum * current)
    } else if (operator === '/') {
      sumOperands = operands.reduce((sum, current) => sum / current)
    } else {
      alert('Не корректно выбрана операция')
    }
    console.log(sumOperands)

    if (sumOperands == Infinity) {
      alert('Невозможно сосчитать')
    } else if (!isNaN(sumOperands)) {
      alert(`Ответ выражения равен: ${sumOperands}`)
    }
  }
}
