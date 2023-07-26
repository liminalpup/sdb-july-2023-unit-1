/* 
? Class Methods
* method is a function that lives inside of a class (or object)
* can be used on any class instance
 */

class Car {
    constructor(make, model, year, transmission) {
        this.make = make
        this.model = model
        this.year = year
        this.transmission = transmission
    }

    start() {
        return `${this.make} started its engine.`
    }
}

let maserati = new Car("Maserati", "Gran Turismo", 2015, "auto")
let porsche = new Car("Porsche", "911", 2022, "PDK")

console.log(maserati.start())
console.log(porsche.start())

/* 
 ? Inheritance
 *extends a parent class with a child class
 *child class still has access to parent's properties and methods
*/

class CarsForSale extends Car {
    constructor(make, model, year, transmission, mileage, price) {
        super(make, model, year, transmission) //allows access to properties and methods of a parent class
        this.mileage = mileage
        this.price = price
        this.dealer = "Paul's cars"
    }

    isCPO(currentYear) {
        return currentYear = this.year >= 6
            ? `Your ${this.model} is out of warranty`
            : `Your warranty is still active`
    }
}

let bmw = new CarsForSale("BMW", "M3", 2008, "manual", 27000, 50000)
console.log(bmw)
console.log(bmw.start())
console.log(bmw.isCPO(2023))

console.log(bmw instanceof Car)

/* 
    ? Factory Functions
    * functions that accept data and return new instance of a class    
*/

class Circle {
    constructor(radius) {
        if (typeof radius === "number") {
            this.radius = radius
    } else {
        throw new Error("Radius must be a number")
        }
    }

    static generateUsingDiameter(diameter) {
        return new Circle(diameter / 2)
    }
    circumference() {
        return 2 * Math.PI * this.radius
    }

    area() {
        return this.radius ** 2 * Math.PI
    }
}

let myCircle = new Circle(17)
console.log(myCircle.area())

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2)
}

let myDiameterCircle = circleFromDiameter(25)
console.log(myDiameterCircle.area())


/* 
    ? Static Factory Methods
    * do not require instantiation with "new" opeator
    * create an instance of our class through its method
*/



console.log(diaCircle)
