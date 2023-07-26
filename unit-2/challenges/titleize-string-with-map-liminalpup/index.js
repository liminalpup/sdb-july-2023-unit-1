// Example string you can start with
let myString = "the rain in spain falls MAINLY on the PLAIN";

// Your Code Goes Here
// function capitalize(string) {
//   let firstLetter = string[0];
//   let restOfWord = string.slice(1);
//   firstLetter = firstLetter.toUpperCase();
//   restOfWord = restOfWord.toLowerCase();
//   let fullWord = firstLetter + restOfWord;
//   return fullWord;
// }

// Paul's solution to above, concat strings. Return a literal and wrap each assignment in ${}
function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`
}


// function titleize(string) {
//   let stringArr = string.split(" ");
//   let wordArr = stringArr.map((word) => capitalize(word));
//   console.log(wordArr);
//   return wordArr.join(" "); }

//Paul's titleize(string)
function titleize(string) {
 return string.split(" ").map(i => capitalize(i)).join(" ")
}

// Going further

function titleizeOneCap(string) {
  let split = string.split(" ")
  split[0] = capitalize(split[0])
  return split.join(" ")
}

// console.log(titleize("mArY reAgan"))
console.log(titleizeOneCap("mArY PoTaTo"));
// Should print: 'The Rain In Spain Falls Mainly On The Plain'

const readline = require("readline") // This line tells the computer that we want to use a special tool called "readline" to help us read what you type.
const rl = readline.createInterface({input: process.stdin, output: process.stdout}) // We just gave a name to our magical talking box. We call it "rl." We're also telling the box that it should use your keyboard (that's the "process.stdin" part) to listen to what you say, and it should show its responses on the screen (that's the "process.stdout" part).
/*
Imagine you have a magical helper (the code) that can ask you questions and do cool things with your answers.
First, the helper needs a way to communicate with you. So, it sets up a special device (the 'readline' library) that lets it talk with you using words.
The helper also knows how to ask you a question, so it creates a neat trick (the 'ask' function) to do that. It can ask you anything and waits patiently for your answer.
 */

const ask = (q) => {
  return new Promise ((resolve, reject) => {
    rl.question(q, resolve)
  })
}
/*Now, the helper wants to do something exciting with your response. It has a special power (the 'start' function) that lets it wait for your answer to a question it asks. When it gets your reply, it uses a special magic spell (the 'titleize' function) to turn your words into a fancy title. */
  async function start() {
    // we wait to resole the promis from the ask() fx
    let value = await ask('Please enter many words')
    // Pass the result of ask into titleize()
    console.log(titleize(value))
    // We close the interface so that we don't have to ctrl + c out  of it
    rl.close()
  }

  start()