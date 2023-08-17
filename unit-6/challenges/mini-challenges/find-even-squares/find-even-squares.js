/* 
Instructions:

1. Define a function `findEvenSquares` that takes an array `numbers` as a parameter.
2. Initialize an empty array `evenSquares` to store the squared values of even numbers.
3. Use a loop to iterate through each number in the array.
4. Inside the loop, use a conditional statement to check if the number is even.
5. If the number is even, calculate its square and push it into the `evenSquares` array.
6. Return the `evenSquares` array.

*/

function findEvenSquares(numbers) {
    
    let evenSquares = []
    for (number of numbers)  {
        
        if(number % 2 === 0) {
            evenSquares.push(number * number);
        }
    }
    return evenSquares;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSquares = findEvenSquares(numbers);
console.log(evenSquares); // Output: [4, 16, 36, 64, 100]