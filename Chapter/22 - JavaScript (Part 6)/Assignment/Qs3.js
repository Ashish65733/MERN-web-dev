/*
Qs3. Write a JavaScript function that accepts a list of country names as input and
     returns the longest country name as output.
    Example : country = ["Australia", "Germany", "United States of America"]
    output : "United States of America"
 */


function largestCon(countries){
    let largest = "";
    for (const country of countries) {
        if(country.length > largest.length){
            largest = country;
        }
    }

    return largest;
}

let country = ["Australia", "Germany", "United States of America"];

console.log(largestCon(country));