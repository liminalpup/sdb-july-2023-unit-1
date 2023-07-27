function isPalindrome(word) {
  // code should return true or false
  let letterArr = word.split("");
  let reversedArr = letterArr.reverse();
  let combinedWord = reversedArr.join("");
    
  console.log (combinedWord.toLowerCase().replaceAll(" ", "") === word.toLowerCase().replaceAll(" ", ""));

  if (combinedWord.toLowerCase().replaceAll(" ", "")  === word.toLowerCase().replaceAll(" ", ""))
   {
    return true;
  } else {
    return false;
  }
}

function isPalindrome2(word){
    let combinedWord = word.split("").reverse().join("").toLowerCase(). replaceAll(" ", "");

    word = toLowerCase().replaceAll(" ", "")

    return combinedWord === word ? true : false;


}




console.log(isPalindrome("June"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Dad"));
console.log(isPalindrome("madam im adam"));
