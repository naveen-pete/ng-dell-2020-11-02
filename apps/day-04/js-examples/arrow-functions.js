console.log('app.js');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// ES5 - function statement syntax (before 2015)
// function sum(a, b) {
//   return a + b;
// }

// ES5 - function expression syntax (before 2015)
// var sum = function (a, b) {
//   return a + b;
// };

// ES6 - arrow function syntax #1 (2015 and later)
// lambda expression - C#, Java
// var sum = (a, b) => {
//   return a + b;
// };

// ES6 - arrow function syntax #2 (2015 and later)
var sum = (a, b) => a + b;

// ES6 - arrow function syntax #3 (2015 and later)
var square = x => x * x;

// ES6 - arrow function syntax #4 (2015 and later)
var sayHi = () => console.log('Hi');

var result = sum(30, 30);
console.log('sum:', result);

console.log('square:', square(7));

sayHi();