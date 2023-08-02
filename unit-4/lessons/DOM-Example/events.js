let myTodoListItems = ["trash", "put the kids to bed"];

let todoItemList = document.getElementById("todo-item-list"); //PARENT

let addItemButton = document.getElementById('add-item');

let clearButton = document.getElementById("clear");

let inputItem = document.getElementById('input-item');

clearButton.addEventListener("click", () => {
    myTodoListItems = [];
    clearTodoList();
}); // *the event listener 'listens' to the 'clearButton' for a click. On click, resets myTodoListItems to an empty array and runs the clearTodoList fx

addItemButton.addEventListener("click", ()=>{
    alert("click worked")
    /* 
    *add the item typed in "input" to be added to our list.
    *display our todo items
    *clear the input field
    */
clearButton.addEventListener("click", clearAll);

   myTodoListItems.push(inputItem.value);
   inputItem.value="";
   displayTodoItems();
})

function displayTodoItems() {
/* 
*In order to create elements, you must do the following:
    *Identify the parent
    *Create the element tags
    *What do we want to put in-between the tags?
    *Append what we were creating to parent
*/

//! clearTodoList function goes through a for each loop
clearTodoList();
myTodoListItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.className = "todo-item";
todoItemList.appendChild(listItem);
});
let todoItems = document.getElementsByClassName("todo-item")
}

function start() {
    myTodoListItems = [];
    displayTodoItems();
}

start();

function clearTodoList() {
    
    while(todoItemList.hasChildNodes()) {
        todoItemList.removeChild(itemList.firstChild);
    }
}

