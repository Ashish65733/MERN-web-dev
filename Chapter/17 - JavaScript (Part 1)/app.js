// ===============================
// 📌 JavaScript Notes - Part 1
// Topics: Introduction, Console, Variables, Data Types, Numbers, NaN,
// Operator Precedence, let/const/var, Assignment & Unary Operators,
// Identifier Rules, Boolean, null & undefined, String, TypeScript
// ===============================

// ===============================
// 🔹 Introduction & Console
// ===============================

// JavaScript can run inside browsers or Node.js
// Uses REPL (Read → Evaluate → Print → Loop) in console

console.log("🚀 Welcome! This is the first chapter of JavaScript");

// ===============================
// 🔹 Identifier Rules
// ===============================

/*
- Identifiers = variable/function names
- Must be unique
- Can contain: letters, digits, underscores (_), dollar signs ($)
- Must begin with: letter, _ , or $
- Case sensitive → name, Name, NAME are all different
- Reserved words (keywords) cannot be used
*/

// Valid examples:
let firstName = "Ashish";
let _id = 101;
let $price = 499;

// Invalid example:
// let 55name = "Rutul"; ❌

// ===============================
// 🔹 Variable Naming Conventions
// ===============================

/*
camelCase   → cartQuantity (✅ recommended in JS)
PascalCase  → CartQuantity (✅ mostly for classes & constructors)
kebab-case  → cart-quantity (❌ invalid in JS variables, but used in CSS)
snake_case  → cart_quantity (sometimes used)
*/

// ===============================
// 🔹 Declaring Variables
// ===============================

/*
- var   → Function-scoped (avoid in modern JS)
- let   → Block-scoped (preferred for reassignable values)
- const → Block-scoped, must be initialized, cannot be reassigned
*/

var a = 5;  // function/global scoped
let b = 6;  // block scoped
const d = 9; // constant, must initialize

console.log(a + b);  // Output: 11
console.log(typeof a, typeof b); // number number

{
    let a = 66; // new block scope
    console.log(a); // 66
}
console.log(a); // still 5 (outer scope)

// d = d + 1; ❌ Error → Assignment to constant variable

// ===============================
// 🔹 Data Types in JS
// ===============================

// Primitive Data Types:
let str = "Ashish";       // String
let num1 = 22;            // Number
let num2 = 3.55;          // Number
let isActive = true;      // Boolean
let u;                    // undefined
let n = null;             // null (typeof → "object" → historical bug in JS)
let big = BigInt("123");  // BigInt (rarely used)
let sym = Symbol("id");   // Symbol (unique identifier)

console.log(str, num1, num2, isActive, u, n, big, sym);
console.log(typeof str, typeof num1, typeof isActive, typeof u, typeof n, typeof big, typeof sym);

// Non-Primitive Data Types:
let arr = [1, 2, 3];      // Array (object)
let obj = { name: "Ashish", age: 21 }; // Object
let func = function () { return "Hello"; }; // Function (object)

console.log(typeof arr, typeof obj, typeof func); // object object function

// ===============================
// 🔹 NaN (Not-a-Number)
// ===============================

/*
NaN → special value that represents invalid number operations
Examples:
*/
console.log(0 / 0);        // NaN
console.log(NaN - 1);      // NaN
console.log(NaN * 1);      // NaN
console.log(NaN + NaN);    // NaN

// ===============================
// 🔹 Numbers & Operations
// ===============================

// Arithmetic Operators: + - * / % **
console.log(5 + 2);  // 7
console.log(5 - 2);  // 3
console.log(5 * 2);  // 10
console.log(5 / 2);  // 2.5
console.log(5 % 2);  // 1 (remainder)
console.log(5 ** 2); // 25 (exponentiation)

// ===============================
// 🔹 Operator Precedence
// ===============================

// () → Exponentiation → Multiplication/Division/Modulo → Addition/Subtraction
console.log(2 + 3 * 4);   // 14 (not 20)
console.log((2 + 3) * 4); // 20

// ===============================
// 🔹 Assignment & Unary Operators
// ===============================

let x = 10;
x += 5; // x = x + 5 → 15
x -= 3; // x = x - 3 → 12
x *= 2; // x = x * 2 → 24
x /= 4; // x = x / 4 → 6
console.log(x);

// Unary operators
let y = 5;
console.log(++y); // 6 (pre-increment)
console.log(y++); // 6 (then y = 7)
console.log(--y); // 6
console.log(y--); // 6 (then y = 5)

// ===============================
// 🔹 Boolean
// ===============================

let isJavaScriptFun = true;
let isCold = false;

console.log(typeof isJavaScriptFun); // boolean

// Truthy values: non-empty strings, numbers ≠ 0, objects, arrays
// Falsy values: false, 0, "" (empty string), null, undefined, NaN

// ===============================
// 🔹 null & undefined
// ===============================

let val1; // undefined → variable declared but not assigned
let val2 = null; // null → intentional "empty" value

console.log(typeof val1); // undefined
console.log(typeof val2); // object (bug in JS)

// ===============================
// 🔹 Strings
// ===============================

let s1 = "Hello";
let s2 = 'World';
let s3 = `Template Literal`;

console.log(s1 + " " + s2); // Hello World
console.log(`${s1}, ${s2}!`); // Hello, World!

// String methods
console.log(s1.length);         // 5
console.log(s1.toUpperCase());  // HELLO
console.log(s2.toLowerCase());  // world
console.log(s1.charAt(1));      // e
console.log(s1.slice(0, 3));    // Hel

// ===============================
// 🔹 What is TypeScript?
// ===============================

/*
- TypeScript = superset of JavaScript
- Adds static typing (detects errors at compile time)
- Developed by Microsoft
- JS → dynamic typed
- TS → static typed
*/

let aTS = 5;    // number
aTS = true;     // ✅ possible in JS
// ❌ Not possible in TypeScript (type error)
