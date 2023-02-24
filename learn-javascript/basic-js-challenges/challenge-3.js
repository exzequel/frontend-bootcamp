// Challenge 3
// What do 'resultVariable' equal? What data type is it?

const variable1 = 20;
const variable2 = '40';

const resultVariable = variable1 + variable2;
console.log(resultVariable);

// resultVariable = 2040
// the result will output '2040' since variable2 is a string variable

// comprehensive explanation: https://github.com/zachgoll/fullstack-roadmap-series/blob/main/code-challenges/lesson-3/challenge-3-solution.md

// the resultVariable will output a string because js is a "weakly typed" language
// since js is "weakly typed" you can do operations with multiple variable types at once

// "implicit type coercion"
// since we don't explicitly declare each variable's type (static typing)
// in js when you add a string and number together, it automatically becomes a string