/* 
? Array Reverse
*reverse an array
* you will have a reversed array (the one we move items into)
* .reverse() is not allowed.
*/

let cars = ["Porsche", "BMW", "Spyker", "Maserati", "VW"]
let  reversedCars = []

for (i = cars.length - 1; i >= 0; i -= 1) {
    reversedCars.push(cars[i]);
}
console.log(reversedCars);