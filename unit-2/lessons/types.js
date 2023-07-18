/* 
Types - Data Types
- Strings
- Numbers
- Booleans
*/

/* 
STRINGS:
- datatypes are used to represent text. 
- You can use Double Quotes
- You can use Single Quotes
- You can use Backticks
*/

let string1 = "double quotes";
// prettier-ignore
let string2 = 'single quotes';

let string3 = `backtick quotes`;

// STRING CONCATENATION
/* 
When you add two or more strings together they will become a single string.
Strings will concatenate with any data type and will result in a string.
*/

let greeting = "Good Morning";
let firstName = "Rob";

console.log(greeting + " " + firstName);

// Solution using backticks to allow for the space

let fullGreeting = `${greeting} ${firstName}`;

console.log("Full Greeting", fullGreeting);

// ! If you want know what type of variable you are using: use the TYPEOF

console.log(typeof firstName);

// To determine the size of the string you use the length method
let animal = "horses";
console.log("animal size", animal.length);
// To reference a single letter in a string you can use square brackets.
// ! Remember it is zero based

console.log("1st letter:", animal[0]);

// ? If I wanted to grab the last letter of the animal what would that look like
animal = "elephant";
lastLetterNumber = animal.length;
console.log("last letter", animal[lastLetterNumber - 1]);

// Removing White Space from a String using trim

let textData = "             Hello           ";
console.log("Trim Example:", textData.trim());

// Add a new line in the console

let paragraphString = "I went to the store today. \nI bought eggs and milk.";

let linebreak = "\n";

let paragraphString2 =
  "I went to the store today." + linebreak + "I bought eggs and milk.";
console.log(paragraphString);

// ! NUMBERS:

let currentTemp = 78;

console.log(typeof currentTemp);

// ! Be Careful of mismatching Strings and Numbers

let myAge = 43;
let friendAge = "35";

console.log(myAge + friendAge); // Problem is it combines them treating them as strings

//  You can convert a string to a number
// parseInt, Number(), or a plus sign.
// parseInt
console.log(myAge + parseInt(friendAge));
// Number
console.log(myAge + Number(friendAge));
// plus sign
console.log(myAge + +friendAge);

let fruit = "apple";

let snack = fruit;

fruit = "orange";

console.log(snack);

// SLICE Method for String
console.log("blueberry".slice(4, 9));

// ! Number Operators
/* 
Adding numbers (+)
Subtracting (-)
Multiply (*)
Divide (/)

Exponents (**)
Modulus(%) Provides you with the remainder


*/

//  3^3
console.log(3 ** 3);

// 21 / 10  = remainder 1
console.log(21 % 10);

// Even Number Example:
console.log(32 % 2);

// Odd Number Example
console.log(33 % 2);

// ! Shopping Cart Example

let totalPrice = 0;

let price1 = 10;

totalPrice = totalPrice + price1;

let price2 = 15;

totalPrice = totalPrice + price2;

let price3 = 7;

totalPrice += price3;
console.log(totalPrice);

// ! Funky Math

let funkyTotal = 0.1 + 0.2;
console.log(funkyTotal);

console.log("Fixed 2 digits", funkyTotal.toFixed(2));
let flooredNumber = 25.56;
console.log("Floored Number:", Math.floor(flooredNumber));

// ? How do I get 25.5 using Math.floor
console.log("Floored Number 25.5:", Math.floor(flooredNumber * 10) / 10);

console.log(2 ** 53 + 1);

const result = BigInt(2) ** BigInt(53) + BigInt(1);
console.log(result); // Output: 9007199254740993

//! Boolean

let isOver21 = true;
let isLoggedIn = false;
