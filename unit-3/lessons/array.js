/*
ARRAYS 
Arrays are objects that have the following characteristics:
- Arrays are resizeable and can be a combination of multiple data types.
- Arrays, just like strings, are indexed at 0.
- Example Data Types: strings, boolean, numbers, arrays, functions, objects

*/

// ? How do we create arrays?

// ### Method 1:
//use the barackets [] to begin and end the array.
const names = ["George", "John", "Thomas"]; //<-- Preferred way of creating
console.log("names", names);
// ### Method 2:
// Array is created based on the keyword new and using the ArrayConstructor
const namesArrayConstructor = new Array("George", "John", "Thomas");
console.log("namesArrayConstructor", namesArrayConstructor);
//Don't need square brackets in an ArrayConstructor

// ### Method 3:
// Have a single strings and convert the string to an array using a comma
const namesStringToArray = "George, John, Thomas".split(",");
console.log("namesStringToArray", namesStringToArray);
// "Every time I want to see a comma, I want to split it with commas"

// ? What does it mean to have indexes?
//                  0          1        2       3
let cityArr = ["Houston", "Tampa", "Atlanta", "Boston"];
// How do I reference Tampa?
console.log("cityArr", cityArr[1]);

// How do I reference Houston?
console.log("cityArr", cityArr[0]);

// ? How can I get the "SIZE" out of the array?
console.log("cityArr Length", cityArr.length);

// Looping through arrays

for (let i = 0; i < cityArr.length; i++) {
  console.log(cityArr[i]);
}

// ? Create a variable called greetingNames
// ? Assign 4 names as strings to the array
// Example: Bill, Ben, Brenda, Kim
// ? Create a loop that will go through the array and display a greeting
// ? Example: "Bill, I hope you are having a good Monday"

let greetingNames = ["Crosby", "Stills", "Nash", "Young"];

for (let i = 0; i < greetingNames.length; i++) {
  console.log(`${greetingNames[i]}, I hope you have a nice day`);
}

let myShoppingCart = [14.99, 5.99, 1.5];

let total = 0;
for (let i = 0; i < myShoppingCart.length; i++) {
  total = total + myShoppingCart[i];
}
console.log("Final Total", total);

// ! Make an array using the above to calculate bowling average.
let bowler1 = [298, 155, 178];

let score = 0;
let average = 0;
for (let i = 0; i < bowler1.length; i++) {
  score = score + bowler1[i];

  average = score / bowler1.length;
}
console.log(`Bowler Score Average: ${average}`);

// Arrays can have different data types in the array
// First level:    0      1    2
// Second level:                     0   1    2
let mixedArr = ["Spider", 65, true, [23, 15, 10]];

// ? How do I access true?
console.log("mixedArr", mixedArr[2]);

// ? How do I access [23, 15, 10]?
console.log("mixedArr", mixedArr[3]);

//? How do I access 15?
console.log("mixedArr"[3][1]);
//! The above access the first level of the array (first set of brackets) and then tells the computer that, within that array, there is a second sub-array and the second number accesses that.

//!For OF Loop
// Used to condense your code:

const fruits = ["apple", "banana", "orange", "grape"];

for (const fruit of fruits) {
  // `I know that you have an array of fruits, and every time I go through one of these buckets. I'm going to go through each one of these buckets and call them fruit.`
  console.log(fruit);

  for (poolparty of fruits) {
    // call the of statement whatever you want, but just call it the singular version of your Array. Array names are usually plural.
  }
}

// ! Convert a for loop to a for OF loop

// let bowler1 = [298, 155, 178];

// let score = 0;
// let average = 0;
// for(let i = 0; i < bowler1.length; i++) {
//     score = score + bowler1[i];

//     average = score / bowler1.length;
       
// }
//     console.log(`Bowler Score Average: ${average}`)

let bowler3scores = [298, 155, 178];
let scoreAverage3 = 0;

for(const bowler3Score of bowler3scores) {
    scoreAverage3 = scoreAverage3 + bowler3Score / bowler3scores.length;
}

console.log(scoreAverage3);