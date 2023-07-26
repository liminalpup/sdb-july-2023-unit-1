/* 
    ? Object-Oriented Programming (OOP)
    ! APIE
    * abstraction
        * obfuscation of implementation detail
    * polymorphism
        * ability of using the same constructor for different object instances
    * inheritance
        * sharing of methods and properties
    * encapsulation
        * dealing with scope   
*/

// ? Abstraction Example

function myOwnLog(str) {
let process = require("process")
process.stdout.write(str)
}
myOwnLog("Example of no abstraction \n")
console.log("Example of abstraction")

// ? Polymorphism Example

class Human {
    constructor(name) {
        this.name = name
        this.species = "Human" 
    }
}

let brent = new Human("Brent")
let paul = new Human("Paul")
console.log(brent, paul)

// ? Inheritance Example

class Teacher extends Human {
    constructor(name) {
        super(name)
        this.profession = "Teacher"
    }
}

// this instance inherits Human properties and methods
let mary = new Teacher("Mary")
console.log(mary)

// ? Encapsulation Example

function fxscope() {
    let fxsVar = "This is a function scope"
    console.log(fxsVar)
}
//console.log(fxsVar) //ReferenceError - hidden from this scope
fxscope()