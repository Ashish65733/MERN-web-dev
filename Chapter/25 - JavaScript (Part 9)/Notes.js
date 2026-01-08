// ===============================
// 📌 JavaScript Notes – Part 9 (DOM)
// Topics: DOM Introduction, Selecting Elements,
// Content & Attribute Manipulation,
// Styling & classList,
// DOM Navigation,
// Adding & Removing Elements
// ===============================


/* ======================================================
   🔹 DOM (Document Object Model)
   ====================================================== */
// DOM represents an HTML document as a tree of objects.
// It allows JavaScript to access, change, add, or remove
// HTML elements, attributes, and styles dynamically.

// Browser converts HTML → DOM tree → JS can manipulate it.



/* ======================================================
   🔹 Selecting Elements in DOM
   ====================================================== */


/* ---------- getElementById ---------- */
// Returns a single element as an object or null(if not found)
let el = document.getElementById("myId");


/* ---------- getElementsByClassName ---------- */
// Returns an HTMLCollection (array-like) or empty collection(if not found)
let items = document.getElementsByClassName("myClass");


/* ---------- getElementsByTagName ---------- */
// Returns an HTMLCollection or empty collection(if not found)
let paras = document.getElementsByTagName("p");


/* ---------- Query Selectors ---------- */
// Most commonly used (supports CSS selectors)

document.querySelector("p");        // first <p>
document.querySelector("#myId");    // first elemet with id
document.querySelector(".myClass"); // first elemet with class
document.querySelectorAll("p");     // all <p> (NodeList)



/* ======================================================
   🔹 Properties to Set / Get Content
   ====================================================== */

let para = document.querySelector("p");

// innerText → visible text only
para.innerText = "Hi, I am Peter Parker!";

// textContent → all text (even hidden)
para.textContent = "Hi, I am Peter Parker!";

// innerHTML → HTML markup
para.innerHTML = "Hi, I am <b>Peter Parker</b>!";



/* ======================================================
   🔹 Manipulating Attributes
   ====================================================== */

let img = document.querySelector("img");

// Get attribute value
img.getAttribute("id"); // returns the id of img

// Set / update attribute
img.setAttribute("class", "images");    // set class = "images"



/* ======================================================
   🔹 Manipulating Style
   ====================================================== */

// Inline style manipulation
let heading = document.querySelector("h1");

heading.style.color = "green";
heading.style.backgroundColor = "yellow";

// Note:
// - JS uses camelCase for CSS properties
// - Best practice: prefer classList over style



/* ======================================================
   🔹 classList Property
   ====================================================== */
// classList provides cleaner class-based styling

heading.classList.add("green");        // add class
heading.classList.remove("green");     // remove class
heading.classList.contains("green");   // true / false
heading.classList.toggle("underline"); // add/remove automatically



/* ======================================================
   🔹 Navigation on Page (DOM Traversal)
   ====================================================== */

let h4 = document.querySelector("h4");

// Parent element
console.log(h4.parentElement);

// Children elements : HTMLCollection
console.log(h4.children);

// Sibling navigation
console.log(h4.previousElementSibling);
console.log(h4.nextElementSibling);



/* ======================================================
   🔹 Adding Elements to the Page
   ====================================================== */

// Step 1: Create element
let newP = document.createElement("p");
newP.innerText = "Hi, I am a new p";

// Step 2: Select parent
let body = document.querySelector("body");

// Step 3: Add element
body.appendChild(newP);  // adds as last child

// Other methods:
// body.append(newP);        // we can append text also
// body.prepend(newP);       // adds as first child
// element.insertAdjacentElement(position, element)
// positions: beforebegin | afterbegin | beforeend | afterend



/* ======================================================
   🔹 Removing Elements from DOM
   ====================================================== */

let btn = document.querySelector("button");

// Remove directly
btn.remove();

// OR remove via parent
// body.removeChild(btn);



/* ======================================================
   🔹 Practice Task (DOM Manipulation)
   ====================================================== */

// 1. Red paragraph
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
para1.classList.add("red");
document.querySelector("body").append(para1);

// 2. Blue h3
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.classList.add("blue");
document.querySelector("body").append(h3);

// 3. Div with h1 and p
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);



/* ======================================================
   ✅ Key Takeaways
   ====================================================== */
// - DOM allows JS to control HTML dynamically
// - querySelector is the most flexible selector
// - innerText vs textContent vs innerHTML matters
// - classList is better than inline styles
// - DOM traversal helps move across elements
// - create → select parent → append is the DOM workflow
