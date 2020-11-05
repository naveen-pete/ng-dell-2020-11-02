console.log('app.js');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

const a = 10;

console.log('before a:', a);

// if(condition)
// function someFunction() 
{
  let a = 50;
  a = 100;

  console.log('inside a:', a);
}

// someFunction();

console.log('after a:', a);

// variable scope - ES5 (var)
// 1. global
// 2. function

// variable scope - ES6 - (let, const)
// 3. block