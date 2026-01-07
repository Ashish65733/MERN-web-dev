// Qs5. Write a JavaScript function to generate a random number within a range (start,end)

function randNum(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

console.log(randNum(1,5));
console.log(randNum(10,50));
console.log(randNum(1,1000));