/* =============================================================================
📌 JavaScript Notes – Part 13
Topics: Axios, API Requests, Headers, Query Strings
============================================================================= */


/* =============================================================================
🔹 1. What is Axios?
============================================================================= */
/*
- Axios is a JavaScript library used to make HTTP requests.
- It is NOT built-in (unlike fetch); it must be imported.
- Axios automatically converts JSON responses into JS objects.
- Cleaner syntax compared to fetch.
*/


/* =============================================================================
🔹 2. Installing / Importing Axios
============================================================================= */

// Browser (CDN)
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

// Node.js (CommonJS)
// const axios = require("axios");


/* =============================================================================
🔹 3. Basic Axios Request
============================================================================= */

async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res);        // Full response object
        console.log(res.data);   // Actual data
    } catch (e) {
        console.log("ERROR", e);
    }
}


/* =============================================================================
🔹 4. Fetch vs Axios
============================================================================= */
/*
FETCH:
- Needs 2 steps
    1) await fetch(url)
    2) await res.json()

AXIOS:
- Needs only 1 step
    - Data is directly available in res.data
*/

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
    } catch (e) {
        console.log("error", e);
    }
}


/* =============================================================================
🔹 5. Cat Facts Activity (DOM + Axios)
============================================================================= */

let btn = document.querySelector("button");
let p = document.querySelector("#result");

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    p.innerText = fact;
});

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error", e);
        return "No fact found";
    }
}


/* =============================================================================
🔹 6. Dog Pictures API
============================================================================= */
/*
API returns a random dog image URL in res.data.message
*/

let imgBtn = document.querySelector("button");
let imgUrl = "https://dog.ceo/api/breeds/image/random";

imgBtn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImage() {
    try {
        let res = await axios.get(imgUrl);
        return res.data.message;
    } catch (e) {
        console.log("error", e);
        return "/";
    }
}


/* =============================================================================
🔹 7. Sending Headers with Axios
============================================================================= */
/*
Some APIs require headers to return data in correct format.
Example: Accept: application/json
*/

const jokeUrl = "https://icanhazdadjoke.com/";

async function getJoke() {
    try {
        const config = {
            headers: { Accept: "application/json" }
        };
        let res = await axios.get(jokeUrl, config);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
}


/* =============================================================================
🔹 8. Query Strings with Axios
============================================================================= */
/*
Query Strings:
- Add data to URL using key=value
- Example:
  ?name=india
*/

let uniUrl = "http://universities.hipolabs.com/search?name=";
let searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colleges = await getColleges(country);
    show(colleges);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (let col of colArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(uniUrl + country);
        return res.data;
    } catch (e) {
        console.log("error", e);
        return [];
    }
}


/* =============================================================================
✅ Key Takeaways
============================================================================= */
/*
- Axios simplifies HTTP requests
- JSON is auto-parsed in Axios
- Headers are sent using config object
- Query strings help filter API results
*/