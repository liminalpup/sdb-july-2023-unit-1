This challenge covers various fundamental concepts, including arrays, loops, conditionals, and functions:

Challenge: Array Manipulation and Analysis

Write a function called `analyzeArray` that takes an array of numbers as an argument and returns an object containing the following information:

1. The total count of elements in the array.
2. The sum of all elements in the array.
3. The average (mean) value of the elements in the array.
4. The highest value in the array.
5. The lowest value in the array.

Instructions:

1. Define a function `analyzeArray` that takes an array `numbers` as a parameter.
2. Calculate the total count of elements by using the `length` property of the array.
3. Use reduce method to sum the total of the array.
4. Calculate the average value by dividing the sum by the total count.
5. Find the highest and lowest values using a Math. something method.
6. Return an object containing the calculated values.

Solution:
javascript
function analyzeArray(numbers) {
  return {
    // Returns an Object
  };
}

const numbers = [10, 5, 3, 8, 15];
const analysis = analyzeArray(numbers);

console.log(analysis);
Expected Output:
text
{
  totalCount: 5,
  sum: 41,
  average: 8.2,
  highest: 15,
  lowest: 3
}