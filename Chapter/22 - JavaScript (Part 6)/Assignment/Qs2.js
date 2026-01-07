/* Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
        ans = “abcdefgh”
*/

let str = "abcdabcdefgggh";

function uniqueCharacters(str){
    let ans = "";

    for(let i=0; i<str.length; i++){
        if(!ans.includes(str[i])){
            ans += str[i];
        }
    }
    return ans;
}

console.log(uniqueCharacters(str));