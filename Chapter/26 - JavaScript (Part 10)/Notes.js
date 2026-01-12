// ===============================
// 📌 JavaScript Notes – Part 10
// Topics: DOM Events, Event Listeners,
// Mouse / Pointer Events,
// Keyboard Events, Form Events,
// Extracting Form Data,
// Change vs Input Events,
// Mini Activity (Random Color Generator)
// ===============================


/* ======================================================
   🔹 DOM Events (Introduction)
   ====================================================== */
// Events are signals that something has happened.
// These are usually triggered by user actions such as:
// clicking, typing, submitting forms, hovering, etc.

// Examples of events:
// - click
// - mouseenter
// - keydown
// - submit
// - input


/* ======================================================
   🔹 Inline Events (Not Recommended)
   ====================================================== */
// Events can be written directly in HTML attributes.
// This approach is less flexible and harder to manage.

/*
<button onclick="console.log('button was clicked')">
    click me
</button>
*/

// Modern JS prefers addEventListener instead.



/* ======================================================
   🔹 DOM Event Properties
   ====================================================== */
// Events can be handled by assigning a function
// to an element’s event property.

let btn = document.querySelector("button");

btn.onclick = function () {
    console.log("button was clicked");
};

// Limitation:
// Assigning again will overwrite the previous handler.



/* ======================================================
   🔹 Event Listeners (Best Practice)
   ====================================================== */
// addEventListener allows:
// - multiple handlers
// - better separation of logic

// Syntax:
// element.addEventListener(event, callback);

function sayHello() {
    console.log("hello");
}

function sayName() {
    console.log("Ashish");
}

let btns = document.querySelectorAll("button");

for (let btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
}
// Both functions run on click



/* ======================================================
   🔹 `this` in Event Listeners
   ====================================================== */
// Inside an event listener callback,
// `this` refers to the element that triggered the event.

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);



/* ======================================================
   🔹 Keyboard Events
   ====================================================== */
// Keyboard events track key interactions.

// Common keyboard events:
// - keydown → key pressed
// - keyup → key released

// Important properties:
// event.code → physical key (ArrowUp, KeyA)
// event.key  → actual character (a, A)

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("code =", event.code);

    if (event.code === "ArrowUp") {
        console.log("character moves forward");
    } else if (event.code === "ArrowDown") {
        console.log("character moves backward");
    }
});



/* ======================================================
   🔹 Form Events
   ====================================================== */
// Forms trigger events when user submits data.

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page reload / navigation
    alert("form submitted");
});


/* ======================================================
   🔹 Extracting Form Data
   ====================================================== */
// Form elements can be accessed using:
// this.elements (array-like collection)

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);
});

// Alternative approach:
// document.querySelector("#username").value



/* ======================================================
   🔹 Change vs Input Events
   ====================================================== */
// Both are used with input, textarea, select elements.

/* ---------- change ---------- */
// Fires when value changes AND focus is lost.

let user = document.querySelector("#username");

user.addEventListener("change", function () {
    console.log("final value =", this.value);
});


/* ---------- input ---------- */
// Fires immediately on every keystroke.

user.addEventListener("input", function () {
    console.log("input event fired");
    console.log("current value =", this.value);
});

// Use input for live validation,
// use change for final value checks.



/* ======================================================
   🔹 Activity: Random Color Generator
   ====================================================== */
// On button click:
// - generate random RGB color
// - update text
// - apply background color

let colorBtn = document.querySelector("button");

colorBtn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();

    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}



/* ======================================================
   ✅ Key Takeaways
   ====================================================== */
// - Events react to user actions
// - Avoid inline events in HTML
// - addEventListener is the standard approach
// - `this` refers to the event-triggering element
// - Keyboard events use key & code
// - preventDefault() stops default browser behavior
// - input fires continuously, change fires on blur
// - DOM events enable interactive web applications
