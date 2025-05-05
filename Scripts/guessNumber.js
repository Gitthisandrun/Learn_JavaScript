const students = {
  student1: {
    name: "Иван",
    grades: [5, 4, 3, 5, 4]
  },
  student2: {
    name: "Мария",
    grades: [4, 4, 4, 5, 5]
  },
  student4:
  {
    name: "Максим",
    grades: [3, 3, 2, 2, 4]
  },
  student3:
  {
    name: "Петр",
    grades: [3, 3, 4, 2, 5]
  },
};

// Используя let...in проходим по всем объектам, добавляем ключ "средний балл" со значением, выводим в консоль результат
const averageScore = 'averageScore'

for (let key in students) {
  score = Object.values(students[key].grades);
  students[key][averageScore] = score.reduce((sum, current) => sum + current) / score.length
  console.log(`Студент: ${(students[key]).name}\nСредний балл: ${(students[key]).averageScore}`);
};

// Составляем рейтинг студенстов по среднему баллу, сортируем через метод sort, выводим результат всех объектов через метод forEach
const arrayStudents = Object.entries(students);
const ratingStudents = arrayStudents.sort((student1, student2) => student1[1].averageScore > student2[1].averageScore ? -1 : 1);
ratingStudents.forEach((item, index) => console.log(`${index + 1} место ${item[1].name} с рейтингом средней оценки ${item[1].averageScore}`))
