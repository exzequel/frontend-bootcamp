// Do the following two blocks of code result in the same answer? If not, which one would you recommend using and why?

// Snippet 1
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);

// Snippet 2
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber == secondNumber;

console.log(result);