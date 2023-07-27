/* 
? Object Methods
* functions which work on a particular object type
* have access to the global scope
* require "this" keyword to have access to the object scope
*/

let dog = {
    name: "Pierre Gassy",
    color: "brindle",
    sex: "male",
    breed: "french bulldog",

    speak(owner) {
        return `${this.name} says woof and belongs to the ${owner}`
    },

    sit: function() {
        return "Sat down"
    },

    beQuiet: () => {
        return `${this.name} is now quiet`
    }
}

console.log(dog.speak("Paul"))
console.log(dog.sit())
console.log(dog.beQuiet())

let toDo = {
    today: [],
    tomorrow: [],
    urgent: [],

    addToday(item) {
        return this.today.push(item)
    },

    addTomorrow(item) {
        return this.tomorrow.push(item)
    },

    removeToday(item) {
        this.today = this.today.filter(i => i !== item)
    },

    clearAll() {
        this.today = []
        this.tomorrow = []
        this.urgent = []
    }
}

toDo.addToday("get milk") 
toDo.addToday("get new computer")
toDo.addTomorrow("get cookies")
toDo.removeToday("get milk")
toDo.clearAll()
console.log(toDo)

/* 
OPTIONAL CHAINING
 */

let optChainingSample = {
    name: "John",
    dog: {
        name: "Brutus"
    },

    displayName() {
        return `The name is ${this.name}`
    }
}

console.log(optChainingSample.cat?.name)

console.log(optChainingSample.displayName())

console.log(optChainingSample.displayDog?.())