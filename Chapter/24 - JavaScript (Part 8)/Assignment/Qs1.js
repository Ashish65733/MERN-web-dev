// Qs1. Square and sum the array elements using the arrow function and then find the
//      average of the array


let arr = [1, 2, 3, 4, 5];

let Square = arr.map((el) => el * el);

let Sum = Square.reduce((sum, el) => sum + el);

let Average = Sum/arr.length;


console.log(Square);
console.log(Sum);
console.log(Average);
