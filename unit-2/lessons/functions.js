/* 
FUNCTIONS

- Functions provide a block of code to be executed that will only be run once the function is called.

- It must start off with the keyword "function" followed by the name of the function.

- Functions do not need to have arguments or parameters.

- Functions can and most likely return values

*/
// 1) is the key word "function"
// 2) is the name of the function
// 3) is where there are arguments or parameters
//   1        2  3
function example1() {
    //This block of code will only run once the function is called.
    console.log("Example 1 function executed.");
  }
  // You must call the function for it to be executed.
  example1();
  
  let player1Score = 10000;
  
  function resetPlayerScore() {
      player1Score = 0;
  }
  
  resetPlayerScore();
  console.log(player1Score);
  
  
  // Example of functions with arguments
  // ! Arguments are comma separated
  
  function example2(arg1, arg2) {
    console.log("Example 2 function executed");
    console.log("arg1", arg1);
    console.log("arg2", arg2);
  }
  
  example2("Hello", "World");
  
  
  function sumTwoNumbers(num1, num2) {
      let total = num1 + num2;
      return total;
  }
  
  let sum1 = sumTwoNumbers(10, 20);
  console.log(sum1)
  
  function convertDegreeFtoDegreeC(degreeF) {
      let degreeC = (degreeF - 32) * 5 / 9;
      return degreeC;
  }
  
  console.log(convertDegreeFtoDegreeC(32));
  console.log(convertDegreeFtoDegreeC(212));
  
  // ? Write a function that will accept a dog's age and returns a human age.
  // ? Human age = (Dog age -2) * 4 + 21
  
  function calcDogYearsToHumanYears(dogAge) {
      let humanAge = (dogAge - 2) * 4 + 21;
      return humanAge;
  }
  
  console.log(calcDogYearsToHumanYears(2));
  
  // ? write a function that will take 3 arguments (length, width, and height) and return the volume of a cube.
  
  function calcCubeVolume(length, width, height) {
      let volume = length * width * height;
      return volume;
  }
  
  console.log(calcCubeVolume(20, 20, 20));
  
  // ! Important for you to use in your project.
  
  function randomNum(min, max) {
      let range = max - min + 1;
      console.log("Function ran");
      return Math.floor(Math.random() * range) + min;
    }
  
    let computerRandomNumber = randomNum(5, 10);
    console.log(computerRandomNumber);
  
    // ! Refactoring Functions
  
    function sumTwoNumbers2(num1, num2) {
      return num1 + num2;
    }
    
    let sum2 = sumTwoNumbers2(10, 20);
    console.log(sum2);
  
    // ? Lets write a function that is called 
  
    function checkEvenlyDivisible (num1, num2) {
      if (num2 < num1) {
          return "Your second number is less than your first number";
      } else if (num1 % num2 === 0) {
        return true;
      } else {
        return false;
      }
    }
    console.log(checkEven(10));
  
    // ! Refactored Code
  
    function checkEvenlyDivisible (num1, num2) {
      if (num2 < num1) return "Your second number is less than your first number";
       return num1 % num2 === 0 ? true : false;
      }
     
// ! Maybe some code for Project

function userInputCleaner(words) {
    return words.toLowerCase().trim();
}

let userInput = userInputCleaner