console.log("works from pg2");

let queryString = window.location.search;
console.log(queryString);

let urlParams = new URLSearchParams(queryString); //create an object, feed it the variable 'queryString' as an argument.

console.log(urlParams.get("product")); //'get' returns the first search target of 'product'
console.log(urlParams.get("quantity")); //'get' ret 1st target of 'quantity'

let orderElement = document.getElementById("order"); //assigns orderElement to order 'p' id in html file


let qty = urlParams.get("quantity");
let product = urlParams.get("product");
orderElement.textContent=`Your order you placed was ${qty} ${product}.` // change txt content.