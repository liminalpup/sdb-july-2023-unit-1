/* 
# Challenge: Right Triangle Checker

Write a function called `isRightTriangle` that takes three numbers as arguments representing the lengths of the sides of a triangle. The function should return `true` if the triangle is a right triangle (satisfying the Pythagorean theorem), and `false` otherwise.

Instructions:

1. Define a function `isRightTriangle` that takes three parameters `side1`, `side2`, and `side3`, which represent the lengths of the sides of a triangle.
2. Use the Pythagorean theorem to check if the given sides satisfy the equation: `side1^2 + side2^2 = side3^2`, `side2^2 + side3^2 = side1^2`, or `side3^2 + side1^2 = side2^2`.
3. If any of the three conditions above is met, return `true`, indicating that the triangle is a right triangle. Otherwise, return `false`.

Example:

js
*/
let side1 = 0;
let side2 = 0;
let side3 = 0;
function isRightTriangle(side1, side2, side3) {
    side1 = side1**2;
    side2 = side2**2;
    hypotenuse = side3;
    side3 = side1 + side2; //side3 === side3**2
    
    if(side1 + side2 === hypotenuse || side2 + hypotenuse === side1 || hypotenuse + side1 + side2) {
        console.log("Right triangle confirmed")
    } else{
        console.log("NOT a right triangle")
    }
};

isRightTriangle(7, 9, 11);
isRightTriangle(3, 4, 5); // Output: true (3^2 + 4^2 = 5^2)
isRightTriangle(5, 12, 13); // Output: true (5^2 + 12^2 = 13^2)
isRightTriangle(6, 8, 10); // Output: true (6^2 + 8^2 = 10^2)
isRightTriangle(7, 9, 12); // Output: false