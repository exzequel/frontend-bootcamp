// Challenge 1

// 1 create boolean with value of 'true'
const myBoolean = true;
myBoolean;

// 2 create string with value of 'hello world'
const myString = 'hello world';
myString;

// 3 create integer with value of '20'
const firstNumber = 20;
firstNumber;

// 4 createe second integer with value of '40'
let secondNumber = 40;
secondNumber;

// 5 re-assign second integer to equal '80'
secondNumber = 80;
secondNumber;

// 6 create array with value of ['true', 'hello world']
const myArray = [myBoolean, myString];
myArray;

// 7 create object and assign array and sum to a property
const myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber + secondNumber
};

// 8 print object to console
console.log(myObject);

// 9 print sumProperty of object to console
console.log(myObject.sumProperty);

// 10 print value of index 1 of first property
console.log(myObject.firstProperty[1]);

