// ===============================
// 📌 JavaScript Notes - Part 4
// Topics: Loops (for, while, for-of, nested),
// break-continue Keyword, Loops with Arrays,
// Todo App (Terminal-based JavaScript)
// ===============================


// ===============================
// 🔹 Loops (General)
// ===============================

// Loops are used to execute a block of code repeatedly
// until a given condition becomes false.


// ===============================
// 🔹 for Loop
// ===============================

/*
Syntax:
for (initialisation; condition; updation) {
    // code to execute
}

Execution flow:
1. initialisation → runs once
2. condition → checked before every iteration
3. loop body → executes if condition is true
4. updation → runs after each iteration
*/

// Example 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5

// ===============================
// DRY RUN (step-by-step) example
// ===============================
/*
for (let i = 1; i <= 5; i++) console.log(i);

i=1 → 1<=5 true → print 1
i becomes 2 → 2<=5 true → print 2
...
i becomes 6 → 6<=5 false → stop
*/

// Example 2: Print odd numbers (1 to 15)
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}
// Output: 1 3 5 7 9 11 13 15

// Example 3: Print even numbers (2 to 10)
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}
// Output: 2 4 6 8 10

// Example 4: Print numbers backwards (odd numbers)
for (let i = 15; i >= 1; i = i - 2) {
    console.log(i);
}
// Output: 15 13 11 9 7 5 3 1

// Example 5: Multiplication table of 5
for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);
}
// Output: 5 10 15 20 25 30 35 40 45 50


// ===============================
// parseInt() and prompt()
// ===============================

/*
prompt(message) -> displays a browser prompt and returns a string.
parseInt(string) -> converts string to integer (base 10 by default).

Example:
let input = prompt("Enter a number"); // returns "12"
let n = parseInt(input);             // converts to 12 (number)

Why parseInt:
- prompt returns text. parseInt converts to number for numeric operations.
- If parseInt can't convert, it returns NaN (Not-a-Number).
- Use Number() or parseFloat() if decimals are needed.
*/


// ===============================
// 🔹 Infinite Loops
// ===============================

// An infinite loop occurs when the loop condition never becomes false.

// ❌ Examples (do NOT run):
/*
for (let i = 1; i >= 0; i++) { }     // condition always true
for (let i = 1; i <= 5; i--) { }     // moving away from exit
for (let i = 1; ; i++) { }           // missing condition
*/

// Always ensure loop variables move toward termination.


// ===============================
// NESTED for LOOPS
// ===============================

for (let i = 1; i <= 3; i++) {
  console.log("outer loop", i);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
  }
}
// Output pattern:
// outer loop 1
// 1 2 3
// outer loop 2
// 1 2 3
// outer loop 3
// 1 2 3


// ===============================
// 🔹 while Loop
// ===============================

/*
Syntax:
initialisation;
while (condition) {
    // code
    updation;
}

Condition is checked before every iteration.
*/

// Example: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Example: Favorite Movie Guessing Game
/*
const favMovie = "avatar";
let guess = prompt("Guess my favorite movie");

while (guess !== favMovie && guess !== "quit") {
    guess = prompt("Wrong guess. Please try again");
}

if (guess === favMovie) {
    console.log("Congrats!!");
} else {
    console.log("You quit");
}
*/


// ===============================
// break and continue
// ===============================

// break -> exit loop immediately
for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // stop when i==5
  console.log(i);     // prints 1..4
}

// continue -> skip the rest of current iteration
for (let i = 1; i <= 6; i++) {
  if (i === 3) continue; // skip printing 3
  console.log(i);        // prints 1,2,4,5,6
}


// ===============================
// 🔹 Loops with Arrays
// ===============================

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// Forward iteration
for (let k = 0; k < fruits.length; k++) {
    console.log(k, fruits[k]);
}

// Reverse iteration
for (let k = fruits.length - 1; k >= 0; k--) {
    console.log(k, fruits[k]);
}


// ===============================
// 🔹 Nested Loops (Nested Arrays)
// ===============================

let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];

// Outer loop iterates over inner arrays
for (let k = 0; k < heroes.length; k++) {
    // Inner loop iterates over elements of each inner array
    for (let l = 0; l < heroes[k].length; l++) {
        console.log(heroes[k][l]);
    }
}
// Output:
// ironman spiderman thor superman wonder woman flash


// ===============================
// 🔹 for-of Loop
// ===============================

/*
Used for iterating over iterable data structures  like Arrays and Strings.

It directly gives values, not indexes.
*/

// Example 1: Array
for (let fruit of fruits) {
    console.log(fruit);
}

// Example 2: String
for (let char of "apnacollege") {
    console.log(char);
}

// Example 3: Nested for-of loop
for (let list of heroes) {
    for (let name of list) {
        console.log(name);
    }
}


// ===============================
// 🔹 Todo App (Terminal-based JavaScript)
// ===============================

/*
Commands:
- list   → display all tasks
- add    → add a new task
- delete → remove task by index
- quit   → exit the app
*/

/*
let todo = ["eat", "sleep", "code"];
let req = prompt("Please enter your request");

while (true) {

    if (req === "quit") {
        console.log("Quitting app");
        break;
    }

    if (req === "list") {
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
    } 
    else if (req === "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    } 
    else if (req === "delete") {
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("Task deleted");
    } 
    else {
        console.log("Wrong request");
    }

    req = prompt("Please enter your request");
}
*/


// ===============================
// ✅ Key Takeaways
// ===============================

// - Use for loop when iteration count is known
// - Use while loop when condition-based repetition is needed
// - nested loops: used for tables/matrices
// - break exits a loop immediately
// - continue: skip current iteration
// - Use for-of when index is not required
// - parseInt(prompt()) pattern: convert user input string to number
