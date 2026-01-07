// Qs4. Write a JavaScript function to count the number of vowels in a String argument

let name = "Ashish Vankar";

function countVowels(str){
    let count = 0;
    for (const ch of str) {
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'
        ){
            count++;
        }
    }
    return count;
}

console.log(countVowels(name));