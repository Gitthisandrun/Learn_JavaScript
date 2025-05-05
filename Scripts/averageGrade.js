
const students = [
  { name: "Иван", age: 20, grades: [4, 5, 3] },
  { name: "Анна", age: 22, grades: [5, 5, 4] },
  { name: "Петр", age: 21, grades: [3, 4, 2, 3] },
  { name: "Вика", age: 23, grades: [2, 2, 1, 5] }
];
const getAverageGrade = (studentsList) => {
  let score = 0
  for (let i = 0; i < studentsList.length; i++) {
    let studentScore = studentsList[i].grades
    let sum = 0
    for (let i = 0; i < studentScore.length; i++) {
      sum = sum + studentScore[i]
    }
    score = score + (sum / studentScore.length)
  };
  const averageGrades = score / studentsList.length
  return averageGrades
};
console.log(`Средний бал всех студентов: ${getAverageGrade(students)}`)