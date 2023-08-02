/* 
# Challenge: Convert Celsius to Fahrenheit

You are given an array `celsiusTemperatures` containing temperature values in Celsius. Your task is to create a new array `fahrenheitTemperatures` that contains the corresponding temperature values converted to Fahrenheit.

The formula to convert Celsius to Fahrenheit is: `Fahrenheit = (Celsius * 9/5) + 32`

Instructions:

1. Define an array `celsiusTemperatures` with some temperature values in Celsius.
2. Use the `.map()` method to create a new array `fahrenheitTemperatures` based on the `celsiusTemperatures` array, where each temperature value is converted to Fahrenheit using the formula provided above.
3. Print the `fahrenheitTemperatures` array to the console.

Output:


[77, 86, 59, 68, 50]

*/

const celsiusTemperatures = [25, 30, 15, 20, 10];

// Use .map() to convert Celsius to Fahrenheit
const fahrenheitTemperatures = celsiusTemperatures.map(temp => temp * (9/5) + 32)// Fill this part out with the .map()
  console.log(fahrenheitTemperatures);