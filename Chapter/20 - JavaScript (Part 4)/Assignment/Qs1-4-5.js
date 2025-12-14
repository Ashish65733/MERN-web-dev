// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
let num = 5;
let arr = [1, 5, 3, 4, 5, 6, 2, 3];

for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}

console.log(arr);

// Qs4. Print the factorial of a number n.
let fact = 1;
for(let i=num; i>0; i--){
    fact *= i;
}

console.log(`Factorial of ${num} = ${fact}`);

// Qs5. Find the largest number in an array with only positive numbers.
let largest = -1;
for(let i=0; i<arr.length; i++){
    if(arr[i] > largest) largest = arr[i];
}

console.log(`Largest number in array = ${largest}`);