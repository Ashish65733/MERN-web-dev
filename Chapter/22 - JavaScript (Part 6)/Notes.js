// ===============================
// 📌 JavaScript – Part 6
// Topics: Functions, Arguments, return,
// Scope (Function, Block, Lexical),
// Function Expressions, Higher Order Functions,
// Methods
// ===============================


/* ======================================================
   🔹 What are Functions?
   ====================================================== */
// Functions are reusable blocks of code.
// They help avoid repetition and make code modular and readable.

// Built-in examples:
// console.log()
// arr.push()
// arr.pop()

// Syntex:
/*
    function funcName(){
        // do somthing
    }
*/

/* ======================================================
   🔹 Function Definition & Calling
   ====================================================== */

// Function Definition → tells JavaScript what the function does
function hello() {
    console.log("hello");
}

// Function Call → executes the function
hello(); // Output: hello


/* ======================================================
   🔹 Practice: Dice Roll
   ====================================================== */
// Create a function that prints a random dice value (1 to 6)

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();


/* ======================================================
   🔹 Functions with Arguments
   ====================================================== 
   function funcName(arg1,arg2..){
        // do somthing
    }
   */
// Arguments are values passed to a function.

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printInfo("shradha", 23);
printInfo("rajat", 19);

// Example: Sum of two numbers
function sum(a, b) {
    console.log(a + b);
}
sum(1, 2); // 3


/* ======================================================
   🔹 Practice: Multiplication Table
   ====================================================== */

function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}
printTable(2);


/* ======================================================
   🔹 return Keyword
   ====================================================== */
// return sends a value back from the function.
// After return, no code inside the function executes.

function sum2(a, b) {
    return a + b;
}

let result = sum2(3, 4);
console.log(result); // 7

// Code after return is unreachable
function isAdult(age) {
    if (age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
    // console.log("bye"); // unreachable
}


/* ======================================================
   🔹 Practice: Sum from 1 to n
   ====================================================== */

function getSum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
// getSum(10) → 55


/* ======================================================
   🔹 Practice: String Concatenation
   ====================================================== */

let words = ["hi", "hello", "bye", "!"];

function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
// concat(words) → "hihellobye!"


/* ======================================================
   🔹 Scope in JavaScript
   ====================================================== */
// Scope determines the accessibility of variables, objects, and functions from different parts of the code.
// Scope decides where variables can be accessed.


/* ---------- Function Scope ---------- */
// Variables declared inside a function are not accessible outside.

let total = 54; // Global scope

function calSum(a, b) {
    let total = a + b; // Function scope
    console.log(total);
}

calSum(1, 2);   // 3
console.log(total); // 54


/* ---------- Block Scope ---------- */
// Introduced with let and const (2015)
// Variables inside {} are block-scoped.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// console.log(i); // Error: i is not defined


/* ---------- Lexical Scope ---------- */
// Inner functions can access variables of outer functions.
// Outer functions CANNOT access inner variables.

function outerFunc() {
    let x = 5;
    let y = 6;

    function innerFunc() {
        console.log(x);
        console.log(y);
    }

    innerFunc();
}


/* ======================================================
   🔹 Practice: Scope Output
   ====================================================== */

let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);

    function innerGreet() {
        console.log(greet);
    }
    innerGreet();
}

console.log(greet);
changeGreet();
// Output:
// hello
// namaste
// namaste


/* ======================================================
   🔹 Function Expressions
   ======================================================
   const variable = function (arg1,arg2..){
        // do or return somthing
    }
 */
// Functions can be stored in variables.

const add = function(a, b) {
    return a + b;
};
add(2, 3); // 5

let sayHello = function() {
    console.log("hello");
};
sayHello();


/* ======================================================
   🔹 Higher Order Functions
   ====================================================== */
// A higher order function:
// 1. Takes a function as an argument
// OR
// 2. Returns a function


/* ---------- Taking Function as Argument ---------- */

function multipleGreet(func, n) {
    for (let i = 1; i <= n; i++) {
        func();
    }
}

let greetFn = function() {
    console.log("hello");
};

multipleGreet(greetFn, 2);



/* ---------- Returning a Function ---------- */

function oddOrEvenFactory(request) {
    if (request === "odd") {
        return function(n) {
            console.log(!(n % 2 === 0));
        };
    } else if (request === "even") {
        return function(n) {
            console.log(n % 2 === 0);
        };
    } else {
        console.log("wrong request");
    }
}

let checkOdd = oddOrEvenFactory("odd");
checkOdd(3);  // true
checkOdd(10); // false


/* ======================================================
   🔹 Methods
   ====================================================== */
// Methods are functions defined inside an object.
// Actions that can be performed on an object.

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

calculator.add(1, 2); // 3


/* ---------- Method Shorthand ---------- */

const calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
};


/* ======================================================
   ✅ Key Takeaways
   ====================================================== */
// - Functions improve reusability and structure
// - Arguments allow dynamic input
// - return gives output and stops execution
// - Scope controls variable accessibility
// - Function expressions treat functions as values
// - Higher order functions enable powerful abstractions
// - Methods are functions inside objects
