const DOM = {
  classNames: [],
  type: 'body',
  id: null,
  children: [
    {
      type: 'div',
      classNames: ['wrapper'],
      id: null,
      children: [
        {
          type: 'header',
          classNames: ['header', 'container', 'mb-8'],
          id: null,
          children: [],
        },
        {
          type: 'div',
          classNames: ['main', 'container', 'mb-8'],
          id: null,
          children: [
            {
              type: 'div',
              classNames: ['products', 'mb-8'],
              id: 'unicalId',
              children: [
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
                {
                  type: 'div',
                  classNames: ['product'],
                  id: null,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          type: 'footer',
          classNames: ['footer', 'container'],
          id: null,
          children: [],
        },
      ],
    },
  ],
};

// создаем функцию проверки типа селектора
const typeOfSelector = (sel, element) => {
  if (sel.startsWith('#')) {
    return element.id === sel.slice(1);
  }

  if (sel.startsWith('.')) {
    return element.classNames.includes(sel.slice(1));
  }
  return sel === element.type;
}

// Создаем функцию myQuerySelector
const myQuerySelector = (selector, root = DOM) => {
  // Запускаем функцию проверки условия
  if (typeOfSelector(selector, root)) {
    return root;
  }

  // Обходим DOM путем вызова рекурсивной функции
  for (const child of root.children) {
    const result = myQuerySelector(selector, child);
    // Если соответствие найдено, возвращаем объект
    if (result) {
      return result;
    }
  }

  // Если соответствий не найдено, возвращаем null
  return null;
}

// Выполняем поиск первого объекта по условию
console.log(myQuerySelector('div'))
console.log(myQuerySelector('.product'))
console.log(myQuerySelector('#unicalId'))
console.log(myQuerySelector('.burger'))


//============================================================
// Создаем функцию myQuerySelectorAll
const myQuerySelectorAll = (selector, root = DOM) => {
  // Создаем пустой массив для сбора объектов
  const arrayObjects = [];

  // Создаем рекурсивную функцию querySelectorAll
  const querySelectorAll = (select, elem) => {
    // Запускаем функцию проверки условия
    if (typeOfSelector(select, elem)) {
      arrayObjects.push(elem);
    }

    // Обходим DOM путем вызова рекурсивной функции
    if (elem.children && elem.children.length > 0) {
      for (const child of elem.children) {
        querySelectorAll(select, child);
      }
    }
  };

  // Запускаем рекурсивную функцию
  querySelectorAll(selector, root);

  // Проверяем наличие совпадений
  if (arrayObjects.length > 0) {
    return arrayObjects;
  } else {
    return null
  }
}

// Выполняем поиск всех объектов по условию
console.log(myQuerySelectorAll('div'))
console.log(myQuerySelectorAll('.product'))
console.log(myQuerySelectorAll('#unicalId'))
console.log(myQuerySelectorAll('.burger'))

