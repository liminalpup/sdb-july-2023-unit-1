/* 
Challenge: Filtering and Modifying an Array of Numbers
You are given an array of numbers. Your task is to create a new array that contains only the even numbers from the original array. Additionally, you should double each even number in the new array.

Instructions:
Create an array of numbers with a mix of even and odd values.
Use the .filter() method to filter out only the even numbers from the array.
Use the .map() method to double each even number in the filtered array.
Print the modified array to the console.

Array of Numbers:  [3, 8, 12, 5, 20, 17, 10, 6];
Output:
[16, 24, 40, 20, 12]


*/

const numbers = [3, 8, 12, 5, 20, 17, 10, 6];


// Use .filter() to get even numbers, then .map() to double them
const modifiedNumbers = numbers.filter(number => number % 2 === 0).map(number => number * 2); // *to find even number, number we want = number with a remainder of 0 when divided by 2. then we use map to make each number double


 console.log(modifiedNumbers);