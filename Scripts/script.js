let oneNumber = prompt('Введите первое число', 0).trim()
let twoNumber = prompt('Введите второе число', 0).trim()
if(Boolean (oneNumber) == false ||Boolean (twoNumber) == false) {
  alert(`Вы ничего не ввели`)
} else if(isNaN(+oneNumber) || isNaN(+twoNumber)) {
alert(`Введите числовое значение`)
} else { 
  oneNumber = +oneNumber
  twoNumber = +twoNumber

alert(`
  Результат операции: ${oneNumber} + ${twoNumber} = ${oneNumber + twoNumber}
  Результат операции: ${oneNumber} - ${twoNumber} = ${oneNumber - twoNumber}
  Результат операции: ${oneNumber} * ${twoNumber} = ${oneNumber * twoNumber}
  Результат операции: ${oneNumber} / ${twoNumber} = ${oneNumber / twoNumber}
  Результат операции: ${oneNumber} % ${twoNumber} = ${oneNumber % twoNumber}
  `);
}