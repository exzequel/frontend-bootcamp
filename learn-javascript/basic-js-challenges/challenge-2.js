// Challenge 2
// There are three things wrong with given code. Find and explain why they are wrong.

// ORIGINAL CODE:
// const some Number = 20;
// someNumber = 50


// REVISED CODE:
let someNumber = 20;
someNumber = 50;

console.log(someNumber);    

// EXPLANATION:
// 1 remove space from some Number variable (variable names can't contain spaces)
// 2 change const to let to be able to reassign value
// 3 missing semi-colon at the end
