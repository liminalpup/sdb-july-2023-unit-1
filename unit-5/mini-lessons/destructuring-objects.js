let person = { first: "Rob", last: "Vanarsdall"};

console.log(person.first);

const {first, last} = person;

console.log(first, last);

const book = {title: 'The Great Gadsby', author: 'F. Scott Fitzgerald', year: 1925};

let { title }  = book;

console.log(title);

// Renaming while destructuring

let point = { x: 5, y: 15 };
// we want to rename x to xCoord and y to yCoord

const { x: xCoord, y = yCoord } = point;

xCoord = 200;

console.log(point);
console.log(xCoord, yCoord);