// Challenge 5
// This one is meant to be a tough challenge. You probably will need to Google this and it might take you a while to complete.

// What does result evaluate to ?
const myObj = {
    nestedObject1: {
        price: 100,
        quantity: 5
    },
    nestedObject2: {
        price: 150,
        quantity: 2
    }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity); 

// SOLUTION
const resultBreakdown = (100 * 5) > (150 * 2);

console.log(resultBreakdown);
console.log(result);

// EXPLANATION:
// myArray consists of myObj.nestedObject1 (index 0) and myObj.nestedObject2 (index 1)
// myArray[0].price is 100, myArray[0].quantity is 5, multiplying the two will result to 500
// myArray[1].price is 150, myArray[1].quantity is 2, multiplying the two will result to 300
// 500 > 300, therefore result will evaluate to true