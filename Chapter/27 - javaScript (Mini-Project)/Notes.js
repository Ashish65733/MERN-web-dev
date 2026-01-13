/*  ===============================================================
📌  JavaScript Mini-Project Chapter important concepts Notes
    Topics: Event Bubbling, Event Delegation (Todo App),
    Simon Says Game (Complete Flow)
    =============================================================== */


/* ===============================================================
🔹 TOPIC 1: Event Bubbling
   =============================================================== 
=> Event Bubbling means:
 - When an event occurs on an element, it first executes on that element,
   then propagates upward to its parent, then grandparent, and so on
   until it reaches the root of the DOM.

Order:
Target → Parent → Ancestors → document
*/

// HTML structure (for understanding):
// <div>
//   <ul>
//     <li>one</li>
//     <li>two</li>
//     <li>three</li>
//   </ul>
// </div>

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

// Clicking on <li> triggers li → ul → div
div.addEventListener("click", function () {
    console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation(); // stops bubbling beyond ul
    console.log("ul was clicked");
});

for (let li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation(); // prevents reaching ul & div
        console.log("li was clicked");
    });
}

// Key Points:
// - Bubbling is default behavior
// - stopPropagation() stops upward flow
// - Useful for delegation but must be controlled



/* ===============================================================
🔹 TOPIC 2: Todo App & Event Delegation
   =============================================================== 

=> Problem:
 - New elements added dynamically do NOT automatically inherit event listeners.

=> Solution:
 - Event Delegation → attach listener to a common parent
   and use event.target to identify the actual clicked element.
*/

// Select elements
let btn = document.querySelector("button");
let todoUl = document.querySelector("ul");
let inp = document.querySelector("input");

// Add new task
btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    todoUl.appendChild(item);

    inp.value = ""; // clear input
});

// Event Delegation for delete
todoUl.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        event.target.parentElement.remove();
        console.log("task deleted");
    }
});

// Why this works:
// - ul exists from the start
// - clicks bubble up to ul
// - event.target identifies the clicked button



/* =================================================================
✅ Key Takeaways
   ================================================================= */
// - Event bubbling flows from child → parent
// - stopPropagation() controls bubbling
// - Event delegation is essential for dynamic elements
// - Attach listener to parent, use event.target
