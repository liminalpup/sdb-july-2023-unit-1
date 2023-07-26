function capitalize(string) {
  let firstLetter = string[0];
  let restOfWord = string.slice(1);
  firstLetter = firstLetter.toUpperCase();
  restOfWord = restOfWord.toLowerCase();

  const fullWord = firstLetter + restOfWord;
  console.log(fullWord);
}

capitalize("hello world");
