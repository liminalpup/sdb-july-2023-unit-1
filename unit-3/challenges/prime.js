/* 
Challenge: Write a program that takes an array of numbers as an argument and checks if it is a prime number (a positive integer greater than 1 that has no positive integer divisors other than 1 and itself).
*/

//Starter Code:
//global variables
let numberList = [5, 8, 81, 15, 23, 379, 115, 127, 83, 64, 269];
let primeList = [];

//step 1: write a function to check if a number is prime.
function findPrime(testNumber) {
        for(let i = 2; i < testNumber; i++) { 
            if (testNumber % i == 0) {
                return false;
                break;
        }
     }
return true;
}
// The above function, findPrime, checks the testNumber with a for loop that says "for this loop, let i = 2 (because 1 is prime) and as long as i is less than the testNumber, add an integer."
//In that loop, there is a nested conditional to check the testNumber for any remainders. If there is no remainder, it returns false since it is divisible. Otherwise, return true.

for (let number of numberList) {
    if (findPrime(number) == true) {
        primeList.push(number);
    }
}

console.log(findPrime(379));
console.log(primeList);
