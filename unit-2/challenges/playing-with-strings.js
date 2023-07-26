"banana".length; //returns the number 6

"titanic".toUpperCase()
"QUIETLY".toLowerCase()
"Java".repeat(10)
"berry".charAt(1)
"berry".charAt(0)
"banana".includes("nan")
"banana".endsWith("ana")
"blueberry".replace("blue", "black")

let words = "the brown fox";
console.log(words.length); //returns a value of 13

// What if I did not want the spaces counted?

// Use Replace to replace the space with no spaces.

let noSpaces = words.replaceAll(" ", ""); // .replaceAll

console.log(noSpaces.length);

let fruit = "banAna";
console.log(fruit.toLowerCase().includes("nana"));

