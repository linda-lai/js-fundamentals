// Problem 3*
// Implement your own version of .forEach
// Define a function that takes a callback and provides the same functionality as the .forEach function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

const array = [1, 3, 5, 7, 9]

const customForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

const printNumber = (number) => {
  console.log(number)
}

const result = (customForEach(array, printNumber))