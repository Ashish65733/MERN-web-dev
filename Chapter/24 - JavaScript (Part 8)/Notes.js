// ===============================
// 📌 JavaScript Notes – Part 8
// Topics: Array Methods, Default Parameters,
// Spread Operator, Rest Operator, Destructuring
// ===============================


/* ======================================================
   🔹 Array Methods (Functional Programming Style)
   ====================================================== */
// Array methods help us process arrays without manually
// writing loops. Most of them do NOT modify the original array.


/* ---------- forEach ---------- */
// Executes a function once for each array element.
// Does NOT return anything.

let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
    console.log(el);
});
// Output: 1 2 3 4 5


/* ---------- map ---------- */
// Creates a NEW array by applying a function
// to every element.

let nums1 = [1, 2, 3, 4];

let squares = nums1.map((el) => {
    return el * el;
});
// squares → [1, 4, 9, 16]


/* ---------- filter ---------- */
// Creates a NEW array with elements
// that satisfy a given condition.

let nums2 = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let evenNums = nums2.filter((num) => num % 2 === 0);
// evenNums → [2, 4, 6, 2, 8]


/* ---------- every ---------- */
// Returns true if ALL elements satisfy the condition.

[2, 4].every((el) => el % 2 === 0);    // true
[2, 4, 1].every((el) => el % 2 === 0); // false


/* ---------- some ---------- */
// Returns true if AT LEAST ONE element
// satisfies the condition.

[1, 2, 3, 4].some((el) => el % 2 === 0); // true


/* ---------- reduce ---------- */
// Reduces the array to a SINGLE value.
// Uses an accumulator to store intermediate results.

let nums3 = [1, 2, 3, 4];

let sum = nums3.reduce((res, el) => res + el);
// sum → 10

// Finding maximum in an array
let max = nums3.reduce((max, el) => {
    if (max < el) return el;
    else return max;
});


/* ======================================================
   🔹 Practice with Array Methods
   ====================================================== */

// Check if all numbers are multiples of 10
let nums4 = [10, 20, 30, 40];

let isMultipleOf10 = nums4.every((el) => el % 10 === 0);
// true


// Find minimum number using reduce
function getMin(nums) {
    return nums.reduce((min, el) => {
        if (min < el) return min;
        else return el;
    });
}
// getMin([3, 6, 2, 8]) → 2


/* ======================================================
   🔹 Default Parameters
   ====================================================== */
// Default parameters assign a value
// if no argument (or undefined) is passed.

function add(a = 2, b) {
    return a + b;
}

add(1);      // NaN (b is undefined)
add(1, 3);   // 4

// Best practice: place default parameters at the end
function addSafe(a, b = 2) {
    return a + b;
}


/* ======================================================
   🔹 Spread Operator (...)
// ====================================================== */
// Spread expands an iterable into individual elements.


/* ---------- With Functions ---------- */
let nums5 = [1, 2, 3, 4];
Math.min(...nums5); // same as Math.min(1,2,3,4)


/* ---------- With Array Literals ---------- */

// Copy array
let copyNums = [...nums5];

// Merge arrays
let odd = [1, 3, 5];
let even = [2, 4, 6];
let merged = [...odd, ...even];

// String to array
let chars = [..."hello"];
// ['h', 'e', 'l', 'l', 'o']


/* ---------- With Object Literals ---------- */

let data = {
    email: "ironman@gmail.com",
    password: "abcd"
};

let dataCopy = {
    ...data,
    id: 123
};
// dataCopy → { email, password, id }


/* ======================================================
   🔹 Rest Operator (...)
   ====================================================== */
// Rest collects multiple values into an array.
// Mostly used in function parameters.

function sumAll(...args) {
    return args.reduce((sum, el) => sum + el);
}

sumAll(1, 2, 3, 4); // 10

// Difference from arguments:
// - arguments → array-like, not a real array
// - rest (...) → real array (supports map, reduce, etc.)


/* ======================================================
   🔹 Destructuring
   ====================================================== */
// Destructuring extracts values from arrays
// or properties from objects into variables.


/* ---------- Array Destructuring ---------- */

let names = ["tony", "bruce", "steve", "peter"];

let [winner, runnerup] = names;
// winner = "tony", runnerup = "bruce"

// Using rest with destructuring
let [first, second, ...others] = names;
// others → ["steve", "peter"]


/* ---------- Object Destructuring ---------- */

const student = {
    name: "karan",
    age: 14,
    username: "karan123",
    password: 1234
};

// Rename while destructuring
const { username: user, password: pass } = student;
// user = "karan123", pass = 1234


/* ======================================================
   ✅ Key Takeaways
   ====================================================== */
// - forEach → iterate (no return)
// - map → transform array
// - filter → select elements
// - some / every → boolean checks
// - reduce → combine into single value
// - default parameters prevent undefined values
// - spread expands values
// - rest collects values
// - destructuring simplifies extraction
