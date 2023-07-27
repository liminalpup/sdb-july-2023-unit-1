/* 
    ? Classes
    * templates or blueprints for creating objects
    * they encapsulate data with code
    * JS is a prototype-based language with access to OOP principles.
    * Classes are considered special functions. They can be defined as:
        * class declarations
        * class expressions
    *
*/

// ? Class Declaration

class Instructor {
    // method is used to create and initialize an object
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
        this.schoolCountry = "United States"
    }
}

// ? Create a new instancee of a Teacher class
let paul = new Instructor("Paul", "50", true, true)
console.log(paul)
console.log(typeof paul) //returns object
console.log(paul instanceof Instructor)  
console.log(paul instanceof Object)
console.log(Instructor instanceof Object) //all return true

// ? Can use limited object methods on the instance
console.log(Object.keys(paul), Object.values(paul))

// ? Class Expressions

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}

let $1007OrangeSt = new House("1007 Orange St", 3, 2)
console.log($1007OrangeSt)

class NoConstruct {
    // if no constructor, default constructor is used
}

console.log(new NoConstruct())