// ===============================
// 📌 JavaScript Notes – Part 5
// Topics: Object Literals, Get / Add / Update / Delete Values,
// Nested Objects, Array of Objects,
// Math Object, Random Integers,
// Guessing Game (Mini App)
// ===============================


/* ======================================================
   🔹 Object Literals
   ====================================================== */
// Object literals are used to store keyed collections and represent real-world entities.

// An object is a collection of properties.
// Each property is a (key : value) pair.

const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

// Another example
let delhi = {
    latitude: "28.7841°N",
    longitude: "77.1025°E"
};

// Object with array value
const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]
};

// Example: Twitter post object
const post = {
    username: "@shradhakhapra",
    content: "This is my #firstPost",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
};


/* ======================================================
   🔹 Getting Values from Objects
   ====================================================== */

// 1. Dot Notation
console.log(post.content);   // "This is my #firstPost"

// 2. Bracket Notation
console.log(post["content"]); // "This is my #firstPost"

// Important Notes:
// - In bracket notation, key must be a string
// - Bracket notation is required when key is stored in a variable

let prop = "reposts";
console.log(post[prop]);     // 5
// console.log(post.prop);   // undefined


/* ======================================================
   🔹 Conversion in Get Values
   ====================================================== */
// JavaScript automatically converts object keys into strings.

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// Accessing values
console.log(obj[1]);        // "a"
console.log(obj[true]);     // "c"
console.log(obj[null]);     // "d"

// Dot notation behavior
// obj.1 → SyntaxError
console.log(obj.true);      // "c"
console.log(obj.null);      // "d"
console.log(obj.undefined); // "e"


/* ======================================================
   🔹 Add / Update Values
   ====================================================== */

const student2 = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

// Update existing property
student2.city = "Mumbai";

// Add new property
student2.gender = "female";

// Change data type of value
student2.marks = "A";
student2.marks = [99, 89, 74];


/* ======================================================
   🔹 Delete Property
   ====================================================== */

// delete removes a property from an object
delete student2.marks;
delete student2.city;


/* ======================================================
   🔹 Nested Objects (Object of Objects)
   ====================================================== */

const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    shradha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city: "Mumbai"
    }
};

// Accessing nested values
console.log(classInfo.shradha.city); // "Pune"

// Updating nested value
classInfo.shradha.city = "Gurgaon";


/* ======================================================
   🔹 Array of Objects
   ====================================================== */

const classInfoArr = [
    { name: "aman", grade: "A+", city: "Delhi" },
    { name: "shradha", grade: "A", city: "Pune" },
    { name: "karan", grade: "O", city: "Mumbai" }
];

// Accessing values
console.log(classInfoArr[1].name); // "shradha"

// Updating value
classInfoArr[1].city = "Gurgaon";


/* ======================================================
   🔹 Math Object
   ====================================================== */
// Math is a built-in object for mathematical operations.

console.log(Math.PI); // π
console.log(Math.E);  // Euler's number

// Common methods
console.log(Math.abs(-12.5));   // 12.5
console.log(Math.pow(2, 5));    // 32
console.log(Math.floor(5.5));   // 5
console.log(Math.ceil(5.5));    // 6
console.log(Math.random());     // Random number [0,1)


/* ======================================================
   🔹 Random Integers
   ====================================================== */

// Random number between 1 and 10
let rand1to10 = Math.floor(Math.random() * 10) + 1;

// Random number between min and max (inclusive)
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rand21to25 = randomRange(21, 25);


/* ======================================================
   🔹 Guessing Game (Mini App)
   ====================================================== */

// Basic Version
/*
const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        console.log("User quit");
        break;
    }

    if (guess == random) {
        console.log("You are right! Congrats!! Random number was", random);
        break;
    } else {
        guess = prompt("Your guess was wrong. Please try again");
    }
}
*/

// Version with Hints
/*
while (true) {
    if (guess === "quit") {
        console.log("User quit");
        break;
    }

    if (guess == random) {
        console.log("You are right! Congrats!! Random number was", random);
        break;
    } else if (guess < random) {
        guess = prompt("Your guess was too small. Try again");
    } else {
        guess = prompt("Your guess was too large. Try again");
    }
}
*/


/* ======================================================
   ✅ Key Takeaways
   ====================================================== */
// - Objects store data as key–value pairs
// - Dot notation is simple; bracket notation is more flexible
// - Objects can store arrays, other objects, and mixed data types
// - Math object helps with calculations and randomness
// - Random integer logic is important for games
