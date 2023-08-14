
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
console.log(isValidZipcode);

/*
(var).includes() - will check the array for a match and will return true if there is one.
*/

console.log(zipcodes.indexOf(90210));



// ?  Advanced Array Methods

let states = [
    "Illinois",
    "Wisconsin",
    "Alabama",
    "New York",
    "Vermont",
    "Indiana", 
    "Massachusetts",
    "Ohio",
    "Virginia",
    "West Virginia",
    "Pennsylvania",
    "North Dakota",
    "South Dakota",
    "Oregon",
    "California",
    "Nevada",
    "Arizona",
    "New Mexico",
    "Florida",
    "Louisiana",
    "Texas",
    "New Hampshire",
    "Maine",
    "Rhode Island",
    "Alaska",
    "Connecticut",
    "Montana",
    "Nebraska",
    "Delaware",
    "Washington",
    "Iowa",
    "Kansas",
    "Oklahoma",
    "Michigan",
    "Minnesota",
    "Kentucky",
    "Tennessee",
    "Idaho",
    "Utah",
    "Georgia",
    "Mississippi",
    "Missouri",
    "Colorado",
    "Delaware",
    "Hawaii",
    "Maryland",
    "North Carolina",
    "South Carolina",
    "New Jersey",
    "Wyoming"
]

/* 
    ? .forEach()
    * fires a callback fx on each element of your array
    * callback has three parameters:
        * value - the iterable
        * index - of the iterable
        * array - original array .forEach was called upon
    * does NOT return antyhing unless specified
*/

states.forEach((state, index, array) => {
    console.log(`State: ${state} - Index: ${index}`)
})

/* 
    ? .filter()
    * creates a new array based on a filter function
    * only the filtered items can be added to an array
    * cannot have (if/else) where else also gets added
    * filter RETURNS values
*/


// let startsWithC = states.filter(state => state.startsWith("C")
// console.log(startsWithC)

// ! Quick Challenge - filter out grades under 60.
let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89]

let failing = grades.filter(i => i < 60)
console.log(failing)

/* 
    ? .map()
    * creates an array with elements resulting from a callback fx
*/

let statesUpperCase = states.map(state => state.toUpperCase())
console.log(statesUpperCase)

// ! Quick Challenge - raise everyone's grade by 15 points if not above 90.

// let raiseGrades = grades.map(grade => {
//     if (grade > 90) {
//         return grade;
//     }
//     else return grade + 15;
// })
// console.log(raiseGrades);

let raiseGrades = grades.map(grade => grade < 90 ? grade + 15 : grade)
console.log(raiseGrades);

// ? Additional forEach example

let todoItems = ["get milk x" , "contact lens solution x", "chicken"]

todoItems.forEach(item => item.includes("x") ? console.log(item) : null)