// ? write code that counts how many instances of red appear in the array.

//! Global variables
const colors = ['red', 'blue', 'green', 'red', 'yellow', 'red'];
let numberOfReds = 0;

//! For Of Loop

for(const color of colors) {
    if(color === 'red') {
        // if the for loop reads 'red' in the array, store each as a number.
        numberOfReds++
        // each time 'red' is read in the array, add 1 to the numberOfReds variable.

    }
}
console.log(numberOfReds);

