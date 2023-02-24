# Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS)

Following along the [Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS)](https://www.youtube.com/watch?v=zJSY8tbf_ys) by freeCodeCamp.org

Course Notes below:

---

## JAVASCRIPT VARIABLES

**HOW TO DECLARE A VARIABLE IN JAVASCRIPT**

`const` (value is constant)

`let` (value an be reassigned)

`var` (not recommended - legacy feature)

---

```js

// JS Variable Datatypes

const myBoolean = true; // declare a boolean (true or false)

const myString = "hello world"; // declare a string

const myNumber = 2; // declare a number (integer)

const myArray = [1, 2, 3, 4]; // declare an array

// declare an object
const myObj = {
	property1: 'some value', // use comma to separate objects
	property2: myArray,
	property3: myString // can assign variables inside property
}; // semi-colon to end code;

```
## JAVASCRIPT OPERATORS

### JS ARITHMETIC OPERATOR
```js

// JS Arithmetic operators

// Add
1 + 1
// Subtract
4 - 2
// Multiply
6 * 9
// Divide
64 / 6

// Modulo
100 % 50 // similar to a remainder
> 0

// Exponent
8**2

// Increment
let startingNumber = 0;
startingNumber++; // add one to value of variable;

// Decrement
let startingNumber = 0;
startingNumber--; // substract one to value of variable;

```

### JS ASSIGNMENT OPERATOR
```js

// JS Assignment Operator (= += -= *= /=)

// (=)
let x = 10; // assign value to the right of equal sign
> 10
// (+=)
let x = 10;
x += 5; // adds 5 to the value of the variable
> 15
// (-=)
let x = 10;
x -= 5; // subtracts 5 to the value of the variable
> 5
// (*=)
let x = 10;
x *= 5; // multiplies 5 to the value of the variable
> 50
// (/=)
let x = 10;
x /= 5; // divides 5 to the value of the variable
> 2

```






