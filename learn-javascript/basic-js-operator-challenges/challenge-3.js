// Challenge 3
// What does expression5 evaluate to? How could you write this in a single line of code,
// (for exercise purposes only; you would never want to combine all this in one line)

const expression1 = 100 % 50; // will output 0
const expression2 = 100 / 50; // will output 2
const expression3 = expression1 < expression2; // 0 < 2, evaluates to true
const expression4 = expression3 && 300 + 5 === 305; // expression is true and 300 + 5 is strictly equal to 305, evaluates to true
const expression5 = !expression4; // reverses expression 4, evaluates to false

console.log(expression5);

// SOLUTION: 
const result = !(((100 % 50) < (100/50)) && 300 + 5 === 305); // break down code into smaller chunks

console.log(result); // evaluates to false, same as expression5


