/* 
CONDITIONALS:

- We use conditionals whenever a decision needs to be made.
- These conditionals need to result in a truthy or falsy test.
- Tools we have for decision making are the following:

- if statements
- if else statements
- if else if statements

*/

// ? Create an if statement for the condition using a 24 hour clock if it is before 12pm console log good morning.
// ! Initial Setup
// let currentHour = 13;

// console.log(currentHour < 12);

/* 
1- keyword of "if" that will start the if block
2 - conditional - must result in a truth
3 - code block what will be ran if the condition is true

*/

let currentHour = 6;

console.log();

// ! If Else Statement
// ? if it is less than 12 console log good morning if it is greater than 12 console log good afternoon.
if (currentHour < 12) {
  console.log("good morning");
} else {
  console.log("good afternoon");
}

// ! If Else If Statement
// ? If the hours are before 12 console log good morning
// ? If the hours are between 12-5 console log good afternoon
// ? If the hours are between 5-12am console log good evening

if (currentHour < 12) {
  console.log("good morning");
} else if (currentHour < 17) {
  console.log("good afternoon (else-if)");
} else {
  console.log("good evening");
}

// ! Movie Ticket Exercise
// ? You are in charge of coding out the conditional logic for charging a person based on age the ticket price.
// Toddlers 5 and under are free
// Child price of movie ticket is 5 dollars a ticket
// Adult price for the ticket is 10 dollars
//  Age for child is 5 to 13
// Age of adult anything older
// ! Bonus Challenge
// Seniors 55 and older
// Ticket price for seniors is 7 dollars a ticket

// ! Initial Setup

let age = 59;
let priceOfTicket = 0;

// ! If statements

if (age < 5) {
  priceOfTicket = 0;
} else if (age < 13) {
  priceOfTicket = 5.0;
} else if (age >= 55) {
  priceOfTicket = 7;
} else {
  priceOfTicket = 10.0;
}

console.log(`$${priceOfTicket.toFixed(2)}`);

// ! Ternaries

let number1 = 5;

let isEven = number1 % 2 === 0 ? true : false;
