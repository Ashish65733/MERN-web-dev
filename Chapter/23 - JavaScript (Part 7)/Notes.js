// ==============================================
// 📌 JavaScript Notes – Part 7
// Topics: this keyword, Error Handling (try–catch),
// Arrow Functions, Implicit Return,
// Timing Functions (setTimeout, setInterval),
// this with Arrow vs Regular Functions
// ==============================================


/* ======================================================
   🔹 The `this` Keyword
   ====================================================== */
// `this` refers to the object that is currently executing the piece of code (the caller).

// Example: Method inside an object
const student = {
    name: "shradha",
    eng: 95,
    math: 93,
    phy: 97,

    getAvg() {
        // `this` refers to the student object
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

student.getAvg(); 
// Output: shradha got avg marks = 95

// Global Context:
// In a browser, `this` in the global scope refers to `window`
// (In Node.js, it refers to an empty object `{}`).



/* ======================================================
   🔹 Try & Catch (Error Handling)
   ====================================================== */
// The try and catch statements are used for error handling to prevent the code from crashing entirely when an exception occurs.
// Try: Allows you to define a block of code to be tested for errors while it is being executed.
// Catch: Allows you to define a block of code to be executed if an error occurs in the try block.

console.log("hello");

try {
    console.log(a); // Error: a is not defined
} catch (err) {
    console.log("Caught an error.. a is not defined");
    console.log(err); // Error details
}

console.log("hello2");
// This line still runs because the error was handled


/* ======================================================
   🔹 Arrow Functions
   ====================================================== */
// Arrow functions provide a shorter syntax for functions.

// Syntax:
// const func = (arg1, arg2) => { ... };

const sum = (a, b) => {
    console.log(a + b);
};

const cube = (n) => {
    return n * n * n;
};

const pow = (a, b) => {
    return a ** b;
};



/* ======================================================
   🔹 Implicit Return (Arrow Functions)
   ====================================================== */
// If an arrow function has:
// - a single expression
// - and returns a value
// we can omit `{}` and `return`.

const mul = (a, b) => a * b;

console.log(mul(2, 3)); // 6



/* ======================================================
   🔹 Timing Functions
   ====================================================== */
// JavaScript provides functions to execute code after a delay
// or repeatedly at fixed intervals.


/* ---------- setTimeout ---------- */
// Executes a function once after a delay (in milliseconds)

console.log("Hi there!");

setTimeout(() => {
    console.log("Apna College");
}, 4000); // runs after 4 seconds

console.log("Welcome to");


/* ---------- setInterval ---------- */
// Executes a function repeatedly at a given interval

let id = setInterval(() => {
    console.log("Apna College");
}, 2000); // runs every 2 seconds

// Stop the interval
clearInterval(id);



/* ======================================================
   🔹 `this` with Arrow Functions vs Regular Functions
   ====================================================== */
// This is a very important concept.

// Regular Function:
// - `this` depends on how the function is called.

// Arrow Function:
// - `this` is taken from the lexical (parent) scope.
// - Arrow functions do NOT have their own `this`.

const student2 = {
    name: "aman",
    marks: 95,
    prop: this, // global `this`

    // Regular function → `this` refers to student2
    getName: function () {
        console.log(this);
        return this.name;
    },

    // Arrow function → `this` refers to parent scope (global)
    getMarks: () => {
        console.log(this);
        return this.marks;
    }
};

student2.getName();   // "aman"
student2.getMarks();  // undefined (marks not in global scope)



/* ======================================================
   🔹 `this` inside setTimeout
   ====================================================== */
// Regular function inside setTimeout loses `this`
// Arrow function preserves lexical `this`

const student3 = {
    name: "rahul",

    getName() {
        // Regular function → `this` becomes global
        setTimeout(function () {
            console.log(this.name); // undefined
        }, 1000);

        // Arrow function → inherits `this` from getName()
        setTimeout(() => {
            console.log(this.name); // rahul
        }, 2000);
    }
};

student3.getName();



/* ======================================================
   🔹 Practice Questions
   ====================================================== */

// Q1: Arrow function that returns square of a number
const square = (n) => n * n;
console.log(square(4)); // 16


// Q2: Print "Hello World" 5 times at interval of 2 seconds

let intervalId = setInterval(() => {
    console.log("Hello World");
}, 2000);

// Stop after 5 executions (10 seconds)
setTimeout(() => {
    clearInterval(intervalId);
}, 10000);



/* ======================================================
   ✅ Key Takeaways
   ====================================================== */
// - `this` depends on how a function is defined and called
// - try–catch prevents program crashes
// - Arrow functions are concise and lexically scoped
// - Implicit return shortens single-expression functions
// - setTimeout runs once after delay
// - setInterval runs repeatedly until cleared
// - Arrow functions do NOT have their own `this`
