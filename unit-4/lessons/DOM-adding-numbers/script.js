
/* 
* fish for inputs and give them variables.

* submit = eventListener
*/

// ! Getting DOM Elements
let firstInput = document.getElementById('input1')
let secondInput = document.getElementById('input2')
let sumMessage = document.getElementById('total')
let submitBtn = document.getElementById('submit')

//! eventListener
submitBtn.addEventListener("click", () => {
    let input1 = firstInput.value
    let input2 = secondInput.value
    let sumTotal = parseInt(input1) + parseInt(input2);
    sumMessage.textContent = sumTotal;
   ;
});


