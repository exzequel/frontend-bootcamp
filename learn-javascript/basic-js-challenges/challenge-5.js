// Challenge 5
// WHy does this code not work? Edit until it works.

// ORIGINAL CODE:
// const myArray = [20, 30, 40];
// console.log(myArray[3]);

// REVISED CODE:
const myArray = [20, 30, 40];
console.log(myArray[2]);

// EXPLANATION:
// original code is invalid because there is no index 3 in given array
// arrays start at index 0 so in order to correct this code
// we can either call index 2 of the array or add another value to the array, and call index 3

// ALTERNATE SOLUTION:

const otherArray = [20, 30, 40, 50];
// index 0, 1, 2, 3 = 20, 30, 40, 50

console.log(otherArray[3]);
// prints 50