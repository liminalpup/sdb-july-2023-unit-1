Challenge: Find Even Squares

Write a function called `findEvenSquares` that takes an array of numbers as an argument and returns an array containing the squares of even numbers from the input array.

Instructions:

1. Define a function `findEvenSquares` that takes an array `numbers` as a parameter.
2. Initialize an empty array `evenSquares` to store the squared values of even numbers.
3. Use a loop to iterate through each number in the array.
4. Inside the loop, use a conditional statement to check if the number is even.
5. If the number is even, calculate its square and push it into the `evenSquares` array.
6. Return the `evenSquares` array.

Example:

```javascript
function findEvenSquares(numbers) {
  return; //returns an array of even squares;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquares = findEvenSquares(numbers);

console.log(evenSquares); // Output: [4, 16, 36, 64, 100]