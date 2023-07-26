/* 
Types - Data Types
- Strings
*/



/* 
STRINGS:
- Data types used to represent text, typically wrapped in single quotes, double quotes, or backticks.
*/

let stringOne = "double quotes";
// prettier-ignore

let stringTwo = 'single quotes';

let stringThree = `backtick quotes`;

// Combining Strings

let greeting = "Good Morning";

let firstName = "Rob";
//! Morning and Rob does not have a space when executed.
console.log(greeting + firstName);

//  Solution:
console.log(greeting + " " + firstName);

let fullGreeting = `${greeting} ${firstName}`;

console.log(fullGreeting);

// ! If you want to know what "TYPE" the variable is, you can use the keyword typeof

// console.log(typeof firstName);

let ship = "titanic";
ship.toUpperCase();

// To determine the size of the string, use the .length method.

let animal = "horse";
console.log(animal.length);
// To access the first letter, use 0 instead of 1, as Javascript begins with 0
console.log(animal[0]);

let textData = "           Hello              ";

console.log(textData.trim());

let newLineString = "I went to the store yesterday. \nI bought eggs and milk";

console.log(newLineString);

// ! NUMBERS

let currentTemp = 38;

console.log(typeof currentTemp);

let funkyNumber = 0.2 + 0.1;
console.log(funkyNumber);

let add1 = 2 + 1;
console.log(add1);

let totalMoney = (1999 + 1599)/100
console.log(totalMoney);

let myAge = "42"
let friendAge = 34
console.log(Number(myAge) + friendAge); // When myAge is in double quotations adds 42 + 34 together semantically, like 4234 because myAge is a "string". If one is quotes and one is not, add Number() to variable with a string to convert it to a number.
// can also use parseInt(myAge) to parse the first value as a string and return the first integer.
//Can also Add a (+) before the string variable.
console.log(+myAge + friendAge);

let stringNumber = "23";
let stringExample = "abcd";

console.log(stringExample / 2); // Comes back as NaN (not a number) because a string / 2 is not possible.

// ! Number Operators
/* 
Adding Numbers, use (+)
Subtracting Numbers use (-)
Multiplying Numbers use (*)
Dividing Numbers use (/)

Special ones:
Exponents use (**)
*/

//Examples:

// Exponents

console.log(3 ** 3); // indicates 3^3 which is 27.

// Remainders

console.log(21 % 10); // gives a remainder of 1.

// ? How can I tell if a number is even?

console.log("odd", 33 % 2); // results in remainder of 1, so it is odd.
console.log("even", 32 % 2); // result is a remainder of 0 so it is even.

// ? How do I take what I had before and add to it?

let totalPrice = 0;
let item1 = 5; //item 1 costs $5
totalPrice = totalPrice + item1;
console.log(totalPrice);
let item2 = 10; //item 2 costs $10

totalPrice = totalPrice + item2; // adding item 2 to total price.
// shorthand: totalPrice += item2
console.log(totalPrice);




