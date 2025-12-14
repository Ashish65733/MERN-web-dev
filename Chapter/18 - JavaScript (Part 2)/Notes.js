// ===============================
// 📌 JavaScript Notes - Part 2
// Topics: console.log(), Linking JS File, Template Literals,
// Operators, Comparison Operators, Non-number Comparisons,
// Conditional Statements (if, else if, else, nested),
// Logical Operators, Truthy & Falsy, Switch, Alerts & Prompts
// ===============================

// ===============================
// 🔹 Console & Linking JS
// ===============================

// console.log() → prints output to browser console
console.log("🚀 Conditional tutorial started!");

// Linking JS in HTML:
// <script src="script.js"></script>

// ===============================
// 🔹 Template Literals
// ===============================

let name = "Ashish";
let age = 21;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// ===============================
// 🔹 Operators in JS
// ===============================

/*
Arithmetic: + - * / % **
Assignment: = += -= *= /= %=
Comparison: == === != !== > < >= <=
Logical: && || !
*/

// ===============================
// 🔹 Comparison Operators
// ===============================

console.log("3" == 3);  // true → checks only value
console.log("3" === 3); // false → checks value + type

// Loose equality (==) → type conversion allowed
// Strict equality (===) → type conversion not allowed (recommended!)

// ===============================
// 🔹 Truthy & Falsy
// ===============================

/*
Falsy values → behave like false:
false, 0, -0, "", null, undefined, NaN

Truthy values → everything else:
"hello", 123, [], {}, function(){}
*/

if ("") {
    console.log("Truthy");
} else {
    console.log("Falsy"); // ✅
}

// ===============================
// 🔹 Conditional Statements
// ===============================

let age2 = 18;

if (age2 <= 0) {                  // If-else-if ladder
    console.log("Invalid age");
} else if (age2 >= 18) {
    console.log("You can drive 🚗");
} else {
    console.log("You cannot drive ❌");
}

// Nested if-else
let score = 75;
if (score >= 50) {
    if (score >= 90) console.log("Grade: A+");
    else console.log("Grade: Pass");
} else {
    console.log("Fail");
}

// ===============================
// 🔹 Ternary Operator (?:)
// ===============================

let a = 2;
let b = 3;

let c = a > b ? (a - b) : (b - a);
console.log(c); // 1

/*
Equivalent to:
if (a > b) {
   c = a - b;
} else {
   c = b - a;
}
*/

// ===============================
// 🔹 Guard Operator (&&)
// ===============================

// Executes second expression ONLY if first is truthy
false && console.log("Won't run");
true && console.log("Runs ✅");

const msg = 5 && "hello"; // 5 truthy → msg = "hello"
console.log(msg);

/*
Equivalent to:
let msg;
if (5) {
    msg = "hello";
}
*/

// ===============================
// 🔹 Default Operator (||)
// ===============================

// Returns first truthy value
const currency1 = "INR" || "USD"; // "INR"
const currency2 = undefined || "USD"; // "USD"
console.log(currency1, currency2);

/*
Equivalent to:
let currency;
if (!value) {
   currency = "USD";
}
*/

// ⚠️ Note: Modern JS also has "Nullish Coalescing Operator (??)"
// Example: undefined ?? "default" → "default"

// ===============================
// 🔹 Operator Precedence
// ===============================

// AND (&&) has higher precedence than OR (||)
console.log(true || false && false); // true (&& runs first)

// ===============================
// 🔹 Switch Statement
// ===============================

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// ===============================
// 🔹 Alerts & Prompts
// ===============================

// alert("Hello World!"); // Pops up a message
// let userName = prompt("Enter your name:"); // Input from user
// let isSure = confirm("Are you sure?"); // OK → true, Cancel → false

// ===============================
// 🔹 Shortcuts of if-statements
// ===============================

/*
- Ternary Operator → ?:
- Guard Operator   → &&
- Default Operator → ||
- Nullish Coalescing → ??
*/

// ===============================
// ✅ Summary
// ===============================

/*
1. console.log() → Debugging tool
2. Template Literals → String interpolation with backticks
3. == vs === → Always prefer ===
4. Truthy & Falsy → Important for conditions
5. if, else if, else → Decision making
6. Ternary (?:), Guard (&&), Default (||) → Shortcuts
7. Switch → Multiple conditions
8. alert(), prompt(), confirm() → Browser interactions
9. Operator precedence → && runs before ||
*/
