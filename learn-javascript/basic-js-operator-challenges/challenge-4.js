// Challenge 4
// What does result evaluate to?

const myObj = {
    prop1: 'first value',
    prop2: 20
};

// Index         0   1   2
const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]); // true

// ANSWER:
// result will evaluate to true

// EXPLANATION:
// myObj.prop2 is 20
// myArray[0] is 40
// myArray[2] is 2
// myArray[0] / myArray[2] is 20
// 20 === 20 is true