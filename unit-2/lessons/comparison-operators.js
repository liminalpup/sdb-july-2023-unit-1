/* 
Comparison Operators
- When using comparison operators it will result in a true or false (Boolean)
Equality Operators

double equal: ==
Doesn't care about the type of the variable
triple equal: ===
It cares about the type and the value

Not Equal
Does not Equal: !=

Not Equal and Type is considered: !==

Numerical Comparison

>= : greater than or equal to 
<= : less than or equal to
< : less than
> : greater than


*/

let myAge = 43;
let friendAge = "43";

// Double Equal
console.log(myAge == friendAge);

// Triple Equal
console.log(myAge === friendAge);

// ! String Example

let helicopter1 = "   blaCkhawk   ";
let helicopter2 = "      Blackhawk  ";

console.log(
  helicopter1.toLowerCase().trim() === helicopter2.toLowerCase().trim()
);

// Not equal

let friend2Age = "25";

console.log(myAge != friend2Age);

console.log(myAge != friendAge); // false: they are equal

console.log(myAge !== friendAge); // true: it's looking for type as well

// ! Numerical (Greater Than or Less Than)

let minAgeToJoinMilitary = 18;
let hankAge = 16;

console.log(hankAge >= minAgeToJoinMilitary);

let bethAge = 24;
console.log(bethAge >= minAgeToJoinMilitary);

// ! AND and OR Operators

let person1 = "developer";
let person2 = "admin";
let person3 = "guest";

console.log(
  "They can view secret page:",
  person1 == "developer" || person1 == "admin"
);

//  If a number is even and divisible by 10

let num1 = 52;

console.log(num1 % 2 === 0 && num1 % 10 === 0);
