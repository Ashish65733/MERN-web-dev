/* =============================================================================
📌 JavaScript Notes – Part 12
Topics: Async/Await, APIs, JSON, AJAX, Fetch API
============================================================================= */


/* =============================================================================
🔹 1. Async Functions
============================================================================= */
/*
- `async` is used to declare an asynchronous function
- An async function ALWAYS returns a Promise
- Returning a value → Promise is fulfilled
- Throwing an error → Promise is rejected
*/

async function greet() {
    return "hello world!";
}

let hello = async () => {}; // also returns a Promise

greet().then((result) => {
    console.log(result); // "hello world!"
});


/* =============================================================================
🔹 2. Handling async return values
============================================================================= */

async function greet2() {
    // throw "some random error"; // rejection example
    return "hello!";
}

greet2()
    .then((result) => {
        console.log("promise resolved");
        console.log("result:", result);
    })
    .catch((err) => {
        console.log("promise rejected");
        console.log(err);
    });


/* =============================================================================
🔹 3. Await Keyword
============================================================================= */
/*
- `await` pauses execution until the Promise settles
- Makes async code look synchronous
- Can ONLY be used inside async functions
*/

function getNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
}


/* =============================================================================
🔹 4. Refactoring Promise Chains using await
============================================================================= */

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve();
        }, delay);
    });
}

async function colorDemo() {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("green", 1000);
    changeColor("blue", 1000); // not awaited
}


/* =============================================================================
🔹 5. Handling Rejections with try...catch
============================================================================= */
/*
- If an awaited Promise rejects → error is thrown
- Use try...catch to handle errors safely
*/

function changeColorSafe(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve();
        }, delay);
    });
}

async function demoSafe() {
    try {
        await changeColorSafe("red", 1000);
        await changeColorSafe("orange", 1000);
        await changeColorSafe("green", 1000);
        await changeColorSafe("blue", 1000);
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }

    console.log("execution continues");
}


/* =============================================================================
🔹 6. APIs (Application Programming Interface)
============================================================================= */
/*
API acts as a middle layer between:
Client (Frontend) ↔ Server / Database

Data is usually sent in JSON format
*/

const apiExamples = [
    "https://catfact.ninja/fact",
    "https://www.boredapi.com/api/activity",
    "https://dog.ceo/api/breeds/image/random"
];


/* =============================================================================
🔹 7. JSON (JavaScript Object Notation)
============================================================================= */
/*
- Lightweight data format
- Uses key-value pairs
- Keys and string values MUST use double quotes
*/

let jsonRes =
'{"fact":"Cats have 32 muscles in each ear.","length":34}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = { name: "Shradha", marks: 95 };
let jsonString = JSON.stringify(student);


/* =============================================================================
🔹 8. AJAX
============================================================================= */
/*
AJAX = Asynchronous JavaScript and XML
- Fetch data without reloading page
- Modern AJAX uses JSON instead of XML
*/


/* =============================================================================
🔹 9. HTTP Verbs
============================================================================= */
/*
GET    → fetch data
POST   → send/create data
DELETE → remove data
*/


/* =============================================================================
🔹 10. Important HTTP Status Codes
============================================================================= */
/*
200 → OK
400 → Bad Request
404 → Not Found
500 → Internal Server Error
*/


/* =============================================================================
🔹 11. Adding Data in URLs
============================================================================= */
/*
Query String:
?key=value&key2=value2
Example:
https://www.google.com/search?q=harry+potter

Path Params:
https://api.example.com/users/:id   // id is a variable
*/


/* =============================================================================
🔹 12. HTTP Headers
============================================================================= */
/*
Headers send meta-data with requests
Format: key : value
*/

const headersExample = {
    headers: { Accept: "application/json" }
};


/* =============================================================================
🔹 13. Fetch API
============================================================================= */
/*
- Native JS API for HTTP requests
- fetch() returns a Promise
- Response body must be parsed using .json()
*/

let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.fact);
    })
    .catch((err) => {
        console.log("ERROR", err);
    });


/* =============================================================================
🔹 14. Fetch with Async/Await (Preferred)
============================================================================= */

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);

    } catch (e) {
        console.log("error", e);
    }
}

getFacts();


/* =============================================================================
✅ Key Takeaways
============================================================================= */
/*
- async functions always return Promises
- await pauses execution safely
- try/catch handles async errors
- APIs communicate via JSON over HTTP
- fetch + async/await is the cleanest approach
*/
