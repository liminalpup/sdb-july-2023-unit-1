/* 
 ? Object
    * containers for values in JavaScript Object Notation Format (JSON)
    * exists as a string
    * denoted by { } 
    * not indexable
    * comma separated key-value pairs || properties: values
    * has properties and methods
        * .property (ex: .length)
        * .method() (ex. .toUpperCase())
        * has .this keyword
 */

 let obj = {}
 console.log(obj)
 console.log(typeof obj)
 console.log(obj instanceof Object)

 let student = new Object({
    // property: value
    // key: value
    name: "Brent",
    age: 22,
    isTeacher: false,
    cohort: "sdb-july-23"
 })

 console.log(student)

 let bentley = {
    species: "dog",
    color: "cow",
    breed: "olde english bulldog",
    weight: 78,
    favoriteActivity: ["Farting", "fetching", "sleeping"]
 }

 console.table(bentley)

 // ? Accessing properties and values

 // ? Access using dot notation (number access operator)
console.log(bentley.weight)

// ? Access using keys
console.log(bentley["breed"])

// ? Viewing object keys and values
console.log(Object.keys(bentley))
console.log(Object.values(bentley))

// Prototype Constructor Function
// ! DO NOT FOCUS ON IT YET!!!

function Dog(name, color, favActivity) {
    this.name = name
    this.color = color
    this.favActivity = favActivity
}

console.log(new Dog("Brutus", "black", "jumping"))

// ! QuickChallenge - how would you iterate over Bentley's activities?
console.log(bentley.favoriteActivity)
bentley.favoriteActivity.forEach(item => console.log(item))

// ^^ same as...
for (item of bentley.favoriteActivity) {
    console.log(item)
}

// ^^ same as...
for (let i = 0; i <= bentley.favoriteActivity.length - 1; i++) {
    console.log(bentley.favoriteActivity[i])
}

console.log("-------------------------")

// ? Adding properties and values

let car = {
make: "BMW",
model: "M5",
mileage: 27344
}

console.log(car)
car.chassis = "F18"
console.log(car)

car["VIN"] = "WMW240293848R489302829"
console.log(car)

// ? Deleting values

delete car.make
console.log(car)

// ? Value reassignment

car.model = "Z4 M"
console.log(car)
console.log("----------------------------------")

let incoming = {
    headers: ["makeshift"],
    body: {
        email: "liminal.pup@gmail.com",
        password: "password"
    }
}

let db = [
    {email: "paul@uprighted.com", password: "dbLocal" },
    {email: "liminal.pup@gmail.com", password: "potato1" },
    {email: "rob@uprighted.com", password: "apples123" },
    {email: "mary@uprighted.com", password: "potato333" },
    {email: "jasonMac@aol.com", password: "ILikeTrains" },
    {email: "brent@gmail.com", password: "gagw1994" },
]

const login = (req) => {
    // TODO: extrapolate the data out of the request
    // TODO: iterate over database
    // TODO: check if .email from req matches .email from db
    // TODO: if it does, verify if passwords match; if not say incorrect password
    const body = req.body
    const foundUser = db.filter(usr => usr.email == body.email)

    if (foundUser.length === 0) {
        console.log("user not found")
    } else {
        // foundUser[0].password === body.password
        //     ? console.log("User logged in")
        //     : console.log("Incorrect password")

        if (foundUser[0].password === body.password) {
            console.log("User logged in")
        } else {
            console.log("incorrect password")
        }
    }
}


login(incoming)
