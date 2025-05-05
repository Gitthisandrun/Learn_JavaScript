const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const getEvenNumbers = (data) => {
  const sortedNumbers = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
      sortedNumbers.push(data[i]);
    }
  }
  return sortedNumbers;
}

console.log(numbers);
console.log(getEvenNumbers(numbers));
