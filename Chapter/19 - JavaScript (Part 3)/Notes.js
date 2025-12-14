// ===============================
// 📌 JavaScript Notes - Part 3
// Topics: String Methods, Strings are Immutable, toUpperCase/toLowerCase,
// indexOf, Method Chaining, slice, replace & repeat, trim,
// Arrays (mutable, references, constant & nested),
// Array Methods (push, pop, shift, unshift, concat, join, reverse, slice, splice),
// Higher-order methods (map, filter, reduce), sort
// ===============================

// ===============================
// 🔹 Strings in JavaScript
// ===============================

console.log("🚀 Strings Tutorial");

let a = "Ashish";

// Accessing characters
console.log(a[0]); // A
console.log(a[5]); // h
// console.log(a[6]); → undefined

console.log(a.length); // 6

// String concatenation
let real_name = "Ashish";
let friend = "Prince";
console.log("His name is " + real_name + " and his friend’s name is " + friend);

// Template literals (string interpolation)
console.log(`His name is ${real_name} and his friend's name is ${friend}`);

// ===============================
// 🔹 String Methods
// ===============================

let b = " Shivam ";

// Case change
console.log(b.toUpperCase()); // SHIVAM
console.log(b.toLowerCase()); // shivam

// Length
console.log(b.length); // includes whitespace

// Slice
console.log(b.slice(1, 5)); // hiva (from index 1 to 4)
console.log(b.slice(1));    // hivam (till end)

// Replace
console.log(b.replace("Shi", "77")); // 77vam

// Repeat
console.log("Ha".repeat(3)); // HaHaHa

// Concatenation
console.log(b.concat(" Kumar", " Dev")); // Shivam Kumar Dev

// Character access
console.log(b.charAt(2));   // i
console.log(b.indexOf("va")); // 3
console.log(b.includes("vam")); // true

// Trim whitespace
console.log(b.trim()); // "Shivam"

// Strings are immutable
console.log(b); // original string unchanged

// ===============================
// 🔹 Arrays in JavaScript
// ===============================

let arr = [1, 2, 3, 4, 5, 7, "str"];
let arr2 = ["Ashish", "Prince"];

console.log(arr, typeof arr); // object

// Arrays are mutable
arr[0] = 325; 
console.log(arr);

// ===============================
// 🔹 Array Methods (Basic)
// ===============================

let numbers = [1, 2, 3, 4, 5];

// slice(start, end) → does NOT modify original array
console.log(numbers.slice(1, 3)); // [2,3]
console.log(numbers); // unchanged

// splice(start, deleteCount, items...) → modifies original array
numbers.splice(1, 3, 222, 333);
console.log(numbers); // [1, 222, 333, 5]

// Add element
numbers.splice(2, 0, 101); // insert at index 2
console.log(numbers);

// Delete element
numbers.splice(3, 1); // remove index 3
console.log(numbers);

// Replace element
numbers.splice(1, 1, 999); // replace index 1
console.log(numbers);

// Delete all from index
numbers.splice(3);
console.log(numbers);

// concat → join arrays
let newArr = arr.concat(numbers, arr2);
console.log(newArr);

// toString → convert array to comma-separated string
console.log(arr.toString()); // "325,2,3,4,5,7,str"

// join → custom separator
console.log(arr.join(" and ")); 

// push → add at end, pop → remove from end
numbers.push(10);
console.log(numbers);
numbers.pop();
console.log(numbers);

// unshift → add at start, shift → remove from start
numbers.unshift(0);
console.log(numbers);
numbers.shift();
console.log(numbers);

// reverse
console.log(numbers.reverse());

// ===============================
// 🔹 Higher-Order Array Methods
// ===============================

let arr3 = [2, 1, 3, 5, 7, 11];

// map → transforms array elements
let squares = arr3.map((e) => e ** 2);
console.log(squares); // [4,1,9,25,49,121]

// filter → returns subset of array
let greaterThanFive = arr3.filter((e) => e > 5);
console.log(greaterThanFive); // [7,11]

// reduce → reduce array to single value
let arr4 = [1, 2, 3, 4, 5, 6];

// Sum
let sum = arr4.reduce((result, current) => result + current);
console.log(sum); // 21

// Largest number
let largest = arr4.reduce((result, current) =>
    result > current ? result : current
);
console.log(largest); // 6

// ===============================
// 🔹 Sorting Arrays
// ===============================

let nums = [40, 100, 1, 5, 25, 10];

// Default sort = converts numbers to strings and sorts alphabetically
console.log(nums.sort()); // [1, 10, 100, 25, 40, 5]

// Correct numeric sort
console.log(nums.sort((a, b) => a - b)); // ascending
console.log(nums.sort((a, b) => b - a)); // descending

// ===============================
// 🔹 Array References
// ===============================

let x = [1, 2, 3];
let y = x; // both point to same array reference
y.push(4);
console.log(x); // [1,2,3,4]

// Constant arrays
const constArr = [1, 2, 3];
constArr.push(4); // ✅ allowed (mutating array)
console.log(constArr);
// constArr = [5,6,7]; ❌ error (cannot reassign const reference)

// Nested arrays
let nested = [[1,2], [3,4]];
console.log(nested[0][1]); // 2

// ===============================
// ✅ Summary
// ===============================

/*
Strings:
- Immutable, index-based, length property
- Methods: toUpperCase(), toLowerCase(), slice(), replace(), repeat(), trim()
- Concatenation: +, concat(), template literals
- Search: indexOf(), includes()

Arrays:
- Mutable, typeof → object
- Methods:
  - Adding/removing: push(), pop(), unshift(), shift(), splice()
  - Joining: concat(), join(), toString()
  - Extracting: slice()
  - Transforming: map(), filter(), reduce(), sort(), reverse()
- References matter → const arrays can be mutated
- Nested arrays = multidimensional arrays
*/
