
// ? How do I add things to an existing array?
const fruits = ["apple", "banana"];
fruits.push('orange'); 
console.log(fruits); 
let lastFruit = fruits.pop(); 
console.log(fruits);
console.log(lastFruit);

/* 
push() - adds an element into the end of the Array
pop() - removes the last element of the Array
*/

//? How do I add two arrays together

const arr1 = [1, 2];
const arr2 = [3, 4];

const combinedArr = arr1.concat(arr2);
console.log(combinedArr);
/* 
(variable).concat() - merges two or more arrays into a single array.
*/


const colors = ["red", "green", "blue", "yellow"];
const slicedColors = colors.slice(1,3);
console.log(slicedColors);
console.log(colors);
/*
(variable).slice() - extract a portion of the array into a new array (it doesn't modify the original array) [copy, not cut]
*/

let words = "I really have been enjoying this coding camp"
let wordArr = words.split(" ");
console.log(wordArr);
console.table(wordArr);

let stringNumbers = "15,20,25,18"
let numArr = stringNumbers.split(",");
console.log(numArr);

/* (variable).split() -- will take a string and convert it to an array based on what you supplied in the parentheses. */

let wordJoin = wordArr.join(" ");
console.log(wordJoin);

let numArr2 = [12,25,2012];
let numJoin = numArr2.join("-");
console.log(numJoin);
/*
(variable).join() will convert the array to string joining them together.
*/

let reverseExampleArr = [1, 2, 3, 4, 5];
console.log(reverseExampleArr.reverse());
/* 
(variable).reverse () - reverses the order of an array.
*/

let zipcodes = [46140, 48218, 90210, 32864];

const isValidZipcode = zipcodes.includes(90210);
console.log(isvalidZipcode);

/*
(var).includes() - will check the array for a match and will return true if there is one.
*/

console.log(zipcodes.indexOf(90210));
