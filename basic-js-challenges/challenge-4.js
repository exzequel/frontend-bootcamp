// Challenge 4
// Why is this code invalid, edit until it is valid.

// ORIGINAL CODE:
// const objectVariable = {
//     property1: 'i am property 1';
//     property2: 'i am property 2';
//     property3: [20, 30, 40];
// };

const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20, 30, 40]
};

console.log(objectVariable.property3[2]);

// EXPLANATION:
// use comma instead of semi-colon when separating objects