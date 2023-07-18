/* 
Variables:

Variables are used to store information that we can later reference by recalling the variables name. Anytime you create a variable it creating a memory slot for us to reference.

Math Class Example:

x = 10

x + 5 = ?

*/

// ! Rules of naming variables
/* 
- Names can contain letters, numbers, underscores, and dollar signs.
- Names MUST begin with a letter
- Names can begin with a dollar sign or underscore (rarely used)
- Names are case sensitive (shoppingCart and shoppingcart)
- Reserved words can NOT be used (class, let, const, var)

*/

// ! Casing of Variables

/* 
camelCase - you will lowercase the first word and then uppercase the first letter of each word after
- firstName, lastName, stateTaxOwed

PascalCasing - every word of first letter is capitalized
- used mostly on Classes

SNAKE_CASE - words are all in caps and underscore added to break the words up
- used for CONSTANTS or general settings
- DEVELOPER_API_URL

*/

// ! Three ways to declare variables [var, let, const]

// prettier-ignore
let     firstName = "Rob"
//(1)   (2)      (3) (4)

/* 

1) JS keyword that denotes the creation of a variable.
2) The name of the variable that the developer will reference in order to use the value that is stored.
3) Assignment Operator
4) Initial Value
*/

console.log("First Name", firstName);

// ! Variables are case sensitive
/* 
If your code breaks the rest of the code after the break will not execute.
*/
// console.log("First Name", firstname);

// console.log("Hello World");

// ! Variable Reassignment
/* 
- You do NOT need to re-initialize the variable with a let or a var
- Only the variable name followed by the assignment operator and the value that you want to assign it to is needed.

*/

// ! Important Note: ONLY VAR and LET will allow you to reassign.

firstName = "Mary";
console.log("First Name Changed:", firstName);

// ! Const Example:

const stateTax = 0.03;
// stateTax = 0.04; // We get an error because you can not reassign a const

// ? 1) Create a variable to store the last name of someone
// ? 2) Reassign that variable to another last name
// ? 3) Make sure you console log as you go

let lastName = "Thompson";

console.log("Last name is:", lastName);

lastName = "Allen";

console.log("last name is now:", lastName);

// ! When coming up with variable names avoid single letters.

const seconds = 60;
const minutes = 60;
const hours = 24;
let totalSeconds = seconds * minutes * hours;

console.log("Total Seconds in a Day:", totalSeconds);
