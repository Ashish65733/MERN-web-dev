
let arr = [7, 9, 0, -2];
let n = 3;

let arr2 = [3, 5, 12, -7, 4, 80, -32]
let m = 5;

// To get first n element of the array
console.log(arr.splice(0,n));
console.log(arr2.splice(0,m));

// To get last n element of the array
console.log(arr.splice(arr.length-n,n));
console.log(arr2.splice(arr2.length-m,m));