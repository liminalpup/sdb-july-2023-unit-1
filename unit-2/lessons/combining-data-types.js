// With Numbers:


console.log( ("cheese" + 42), typeof ("cheese" + 42))
//result: cheese42 string
//string + num = string

console.log( ("4" + 2), typeof ("4" + 2))
//result: 42 string
//string + num = string


// With Booleans:


console.log( ("pie" + true), typeof ("pie" + true))
//result: pietrue string

console.log( (false + 8), typeof (false + 8))
//result: 8 number
//false has a binary value of 0

console.log( (true + 8), typeof (true + 8))
//result: 9 number 
//true has a binary value of 1


// With Null Values:


console.log( (null + 7), typeof (null + 7))
//result: 7 
//null has no numeric value

console.log( (undefined + 7), typeof (undefined + 7))
//result: NaN number
//result is not a legal number

console.log( (null + "cat"), typeof (null + "cat"))
//result: nullcat string
// null is added to become part of the string

console.log( (undefined + "cat"), typeof (undefined + "cat"))
//result: undefinedcat string
//undefined is added literally as part of the string


//Subtraction:


console.log( (10 - "cat"), typeof (10 - "cat"))
//result: NaN number
//result is not a legal number

console.log( (17 - true), typeof (17 - true))
//result: 16 number
//true has a binary value of 1 so the result will be 1 less than 17 (16).

console.log( (17 - false), typeof (17 - false))
//result: 17 number
//false has a binary value of 0 so the number 17 will not change.



//Other Arithmetic Operations


console.log( ("hi" - "hello"), typeof ("hi" - "hello"))
//result: NaN number
//result is not a legal number1 

console.log( ("hi" - "hello"), typeof ("hi" - "hello"))
//result: NaN number
//result is not a legal number1


console.log( ("hi" % "hello"), typeof ("hi" % "hello"))
//result: NaN number
//result is not a legal number1


console.log( (true / true), typeof (true / true))
//result: 1 number
// booleans can be used because they have binary values that are numbers

console.log( (null / true), typeof (null / true))
//result: 0 number
//null has no value

console.log( (null / null), typeof (null / null))
//result: NaN number
// null has no value