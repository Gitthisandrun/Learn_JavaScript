const createCounter = (defaultCounter = 0) => {
  let counter = defaultCounter

  return {
    increment: function () {
      counter++
      return counter
    },

    decrement: function () {
      counter -= 1
      return counter
    },

    reset: function () {
      counter = defaultCounter
      return counter
    },

    getValue: function () {
      return counter
    }
  }
}

const counter = createCounter(100);
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset()) //ресет сделал на число, которое задал пользоватль, надеюсь не критично
console.log(counter.getValue())
console.log(counter.decrement())
console.log('Hello world!')
console.log(counter.decrement())
