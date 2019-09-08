// Problem 1
// Write a function called arrayMultiply that takes two numbers, and a callback function as arguments. Return the callback function with the two numbers (those arguments) multiplied together as its argument

const arrayMultiply = (num1, num2, callback) => {
  let multiplier = num1 * num2
  return callback(multiplier)
}

// Define an array outside of this function. Because JS scope works differently to Ruby you will be able to use that array within the following function without passing it through as an argument. But please note that it will not be functional programming as such - but in this case if you use map a new array will be created (rather than the original being mutated).

const numArray = [1, 2, 3, 4, 5]

// Define a variable and in it store the result of arrayMultiply when called with 2, 2, and also an anonymous callback function that takes the result as an argument, and then multiplies each element in the array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ].

const result = arrayMultiply(2, 2, (multiplier) => {
  return numArray.map(arrayNumber => multiplier * arrayNumber)
})

console.log(result)