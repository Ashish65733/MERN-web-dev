/* =================================================================
📌 JavaScript Notes – Part 11
Topics: Call Stack, Breakpoints, Single Threading, Callback Hell, 
        Promises, then() and catch() methods, Promise Chaining
==================================================================== */


/* ================================================================
🔹 TOPIC 1: The Call Stack
=================================================================== */
/*
The Call Stack is a mechanism used by the JavaScript engine
to keep track of function calls.

It follows LIFO (Last In, First Out).

How it works:
- When a function is called, it is pushed onto the stack.
- When the function finishes execution, it is popped off.
- Execution always happens at the top of the stack.
*/

// Example 1: Basic Function Calls
function hello() {
    console.log("inside hello function");
    console.log("hello");
}

function demo() {
    console.log("calling hello function");
    hello();
}

console.log("calling demo function");
demo();
console.log("done, bye!");

/*
Execution Order:
1. calling demo function
2. calling hello function
3. inside hello function
4. hello
5. done, bye!
*/

// Example 2: Call Stack with Return Values
function one() {
    return 1;
}

function two() {
    return one() + one(); // one() is called twice
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three(); // Output: 3

/*
Call Stack Flow:
three()
 └── two()
     └── one()
     └── one()
 └── one()
*/

/*
🔹 Breakpoints :
- Breakpoints are debugging markers used to **pause code execution** at a specific line so you can inspect what’s happening.

* Why they’re used :
- Check variable values at runtime
- Understand execution flow
- Find logical errors and bugs

* Common Types :
- Line Breakpoint : Pauses at a specific line
- Conditional Breakpoint : Pauses only when a condition is true
- Exception Breakpoint : Pauses when an error occurs

* How to use (Browser – Chrome DevTools) :
1. Open DevTools → Sources
2. Click on a line number to add a breakpoint
3. Reload or run the code
4. Execution pauses at the breakpoint

* Key Controls :
- Resume (▶): Continue execution
- Step Over: Move to next line
- Step Into: Go inside a function
- Step Out: Exit current function

* Tip :
- Use breakpoints instead of excessive `console.log()` for cleaner debugging.
*/

/* ================================================================
🔹 TOPIC 2: Single Threaded Nature of JavaScript
=================================================================== */
/*
JavaScript is single-threaded.
It can execute only ONE task at a time.

However, it can handle asynchronous operations using:
- Callbacks
- Browser APIs
- Event loop
*/

console.log("hello...");

setTimeout(function () {
    console.log("apna college");
}, 2000); // handled by browser

console.log("hello world");

/*
Output:
hello...
hello world
(after 2 seconds)
apna college
*/


/* ================================================================
🔹 TOPIC 3: Callback Hell
=================================================================== */
/*
Callback Hell occurs when multiple asynchronous operations
depend on each other and are nested deeply.

Problems:
- Hard to read
- Hard to debug
- Hard to maintain
*/

let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) {
            nextColorChange();
        }
    }, delay);
}

// Nested callbacks (Pyramid of Doom)
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});


/* ================================================================
🔹 TOPIC 4: Promises
=================================================================== */
/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
(A Promise represents the eventual result of an asynchronous operation)

Promise States:
1. Pending   → initial state
2. Fulfilled → operation successful
3. Rejected  → operation failed
*/

/* ======================================================
📌 Topic: Consuming Promises with .then() and .catch()
========================================================= */

/*
Once a Promise is created, we use:
- .then()  → runs when the promise is resolved (fulfilled)
- .catch() → runs when the promise is rejected (error)
*/

// Creating a Promise
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

// Consuming a Promise
saveToDb("apna college")
    .then((result) => {
        console.log("promise resolved");
        console.log(result);    // fulfilled promise
    })
    .catch((error) => {
        console.log("promise rejected");
        console.log(error); // rejected promise
    });

/*
Key Notes:
- .then() handles success
- .catch() handles failure
*/
    

/* ================================================================
🔹 TOPIC 5: Promise Chaining
=================================================================== */
/*
Promise chaining is used to avoid callback hell.
Each .then() returns a new promise,
allowing sequential asynchronous operations.
*/

// Converting color change logic into Promises
function changeColorPromise(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

// Clean, flat chain
changeColorPromise("red", 1000)
    .then(() => {
        console.log("red completed");
        return changeColorPromise("orange", 1000);
    })
    .then(() => {
        console.log("orange completed");
        return changeColorPromise("green", 1000);
    })
    .then(() => {
        console.log("green completed");
        return changeColorPromise("blue", 1000);
    })
    .then(() => {
        console.log("blue completed");
    });


/* ================================================================
✅ Key Takeaways
=================================================================== */
// - Call Stack follows LIFO order
// - JavaScript is single-threaded
// - setTimeout is handled by browser APIs
// - Callback hell leads to unreadable code
// - Promises provide better async handling
// - Promise chaining avoids deep nesting
