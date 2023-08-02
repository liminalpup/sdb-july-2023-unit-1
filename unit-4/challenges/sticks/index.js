/*
Add javascript to make this game work. Below are some tasks that you will need to complete.



- 


- 

- 


"BONUS"
- make the game hard. There is a key to winning this game. You must get to a magic number and once you know these magic numbers you can impossible to win if the computer can get to the series of magic numbers.

HINT: once you are on the magic numbers whatever the human picks should equal 4 for the computers response.
(ex: human choose 1 stick the computer should choose 3 to make the total of 4)
Remember this only works once the computer is on a Magic Number. Landing on a magic number can be started after the first guess. So if the human slips and doesn't get to the magic number the computer should always win. 
*/


/* 
div class 'container'
stick number id 'numOfSticks'
    *have the computer choose a random number 1 to 3 on their turn and update the total number of sticks remaining based on what the computer took.

'playerInput'
    *take the user's input 1, 2, or 3 and remove that number of sticks from the pile

submit button id 'submitBtn'
    *make sure the human is not cheating by taking more than 3 and less than 1

message update id 'message'
    *update the message on how many the computer took
    *once there is only one stick remaining display who won. The players turn who has to pick up the last stick looses.
*/


//! DOM elements
let currentSticksNumber = document.getElementById("sticks-number")
let numberInput = document.getElementById("player-input")
let submitBtn = document.getElementById("submitBtn")
let computerTookMessage = document.getElementById("message")

submitBtn.addEventListener("click", () => {
    let numOfSticks = 23;
    let computerMove = Math.floor(Math.random() * 3) + 1;
   
});
   
// ? What do we want the game to do? Break it down.

/* 
    *We named the DOM elements "currentSticks"
    
*/
