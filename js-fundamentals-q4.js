// Problem 4
// Implement your own version of .map
// Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

const humanArray = ['Girl', 'Boy', 'Woman', 'Man']

const customMap = (array, callback) => {
  let superArray = [];
  for (let i = 0; i < array.length; i++) {
    result = callback(array[i])
    superArray.push(result)
  }
  return superArray
}

const makeSuper = (person) => {
  return 'Super' + person
}

const finalSuper = customMap(humanArray, makeSuper)

console.log(finalSuper)