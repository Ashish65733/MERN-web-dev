let num = 287152;
// Qs2. Write a JS program to find the no of digits in a number.
let count = 0;
let temp = num;
while(temp > 0){
    count++;
    temp = Math.floor(temp/10);
}

console.log(`No. of digits = ${count}`);


// Qs3. Write a JS program to find the sum of digits in a number.
let sum = 0;

while(num > 0){
    let digit = num%10;
    sum += digit;
    num = Math.floor(num/10);
}

console.log(`Sum of digits = ${sum}`);