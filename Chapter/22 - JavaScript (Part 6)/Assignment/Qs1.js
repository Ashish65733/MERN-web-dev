// Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [24, 3, 53, 78, 2, 19, 46];

function findLarger(arr,num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num) console.log(arr[i]);
    }
}

findLarger(arr,40);

