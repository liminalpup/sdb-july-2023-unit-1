/* 
Challenge:
Create a loop that will go through the numbers array and store the highest value.

You will then console.log that value at the end of your loops
*/

const numbers = [10, 5, 8, 20, 3];
let highestNumber = 0
// numbers[i] is looking at each number in the array sequentially, whereas a number only looks at the specific referenced index.
for(i = 0; i < numbers.length; i++) { // i starts at 0 in the array, and goes number by number storing each as the highestNumber as it goes through until it hits 20. It still reads 3 but doesn't store it as highest number because it's less than 20 so 20 stays the highestNumber.

    if(numbers[i] > highestNumber) { //if any numbers in the array are greater than the stored highestNumber, store the new number as the highest number.
        highestNumber = numbers[i] // variable that gets re-assigned every time the numbers are greater than the last stored.
        }
    }

// let the highest = 0;

//nest a conditional in the for loop

for(number of numbers) {


}
