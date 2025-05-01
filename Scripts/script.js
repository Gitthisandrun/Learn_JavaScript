// первая переменная
let firstOperand = +prompt('Введите первое число', 0);
console.log('firstOperand: ', firstOperand, typeof firstOperand);

// первая переменная
let secondOperand = +prompt('Введите второе число', 0);
console.log('secondOperand: ', secondOperand, typeof secondOperand);

// проверка что введено число
if (isNaN(firstOperand)) {
    console.log("Введенные данные не позволяют произвести расчеты");
}

if (isNaN(secondOperand)) {
    console.log("Введенные данные не позволяют произвести расчеты");
}

// выполнение условия «равно»
if (firstOperand === secondOperand) {
    console.log("Числа равны друг другу");
}

// выполнение условия «первое больше второго»
let comparison1 = firstOperand - secondOperand;
if (firstOperand > secondOperand) {
    console.log(`Первое число больше второго на ${comparison1} `);
}

// выполнение условия «второе больше первого» 
let comparison2 = secondOperand - firstOperand;
if (firstOperand < secondOperand) {
    console.log(`Второе число больше первого на ${comparison2} `);
}

// если первое равно второму, проверка на четность обоих чисел
if ((firstOperand === secondOperand) && (firstOperand % 2 == 0) && (secondOperand % 2 == 0)) {
    console.log("Оба числа являются четными");
}

// если первое больше второго, проверка на четность или нечетность обоих чисел
if ((firstOperand > secondOperand) && (firstOperand % 2 == 0)) {
    console.log("Первое число является четным");
} else if ((firstOperand > secondOperand) && (firstOperand % 2 != 0)) {
    console.log("Первое число является нечетным");
}
if ((firstOperand > secondOperand) && (secondOperand % 2 == 0)) {
    console.log("Второе число является четным");
} else if ((firstOperand > secondOperand) && (secondOperand % 2 != 0)) {
    console.log("Второе число является нечетным");
}

// если второе больше первого, проверка на четность или нечетность обоих чисел
if ((firstOperand < secondOperand) && (firstOperand % 2 == 0)) {
    console.log("Первое число является четным");
} else if ((firstOperand < secondOperand) && (firstOperand % 2 != 0)) {
    console.log("Первое число является нечетным");
}
if ((firstOperand < secondOperand) && (secondOperand % 2 == 0)) {
    console.log("Второе число является четным");
} else if ((firstOperand < secondOperand) && (secondOperand % 2 != 0)) {
    console.log("Второе число является нечетным");
}