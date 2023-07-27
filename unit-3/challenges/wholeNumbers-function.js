// ? write a function that creates an array of 5 different whole numbers. Use the range 1-6 so your end result should be something like [6, 4, 1, 2, 3] Hint: earlier in class we had functionality to check if items were the same.

var series = [];
min = 1;
max = 6;
function numberArray() {

    while(series.length < 5) {
        numRandom = Math.floor(Math.random() * (max-min) + min);
        if(!series.includes(numRandom)){
            series.push(numRandom);
        }
    }
 console.log(series);
}

numberArray()