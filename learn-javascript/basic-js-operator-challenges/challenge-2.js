// Do the following two blocks of code result in the same answer? If not, which one would you recommend using and why?

// Snippet 1
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber; // strict equality, does not convert data type

console.log(result); // will output false

// Snippet 2
const firstNumber1 = 20;
const secondNumber1 = '20';

const result1 = firstNumber1 == secondNumber1; // normal equality test, converts different data types

console.log(result1); // will output true

// ANSWER:
// The two snippets would have different answers since they used different comparsion operators.
// It is recommended to use the strict equality operator (===) instead of the normal equality operator (==),
// because it will the normal equality operator will try to match different data types, instead of leaving things as is

