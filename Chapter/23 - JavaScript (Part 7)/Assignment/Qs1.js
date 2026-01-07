// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
//      and returns the average of those numbers.

const arrayAverage = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum/arr.length;
};

let numbers = [5, 10, 3, 2];

console.log(arrayAverage(numbers));
