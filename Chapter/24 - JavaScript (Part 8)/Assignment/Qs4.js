// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
//      variable number of arguments. The function should return a new array with the original
//      array values and all of the additional arguments doubled.

let arr = [1, 2, 3, 4];

function doubleAndReturnArgs(arr, ...vars){
    return [...arr,...vars.map((n) => n*2)];
}

console.log(doubleAndReturnArgs(arr,5,6,7,8,9,10));
