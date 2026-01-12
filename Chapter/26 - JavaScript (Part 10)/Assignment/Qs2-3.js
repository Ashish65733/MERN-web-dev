// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

let btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
    btn.style.backgroundColor = "green";
});



// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let inp = document.createElement("input");
let h2 = document.createElement("h2");

inp.setAttribute("placeholder","Enter your name");
h2.innerText = "Hey!";

document.body.appendChild(h2);
document.body.appendChild(inp);

inp.addEventListener("input", ()=> {
    let Text = "";
    
    for (let i = 0; i < inp.value.length; i++) {
        let char = inp.value[i];
        let code = char.charCodeAt(0);

        // Check A-Z (65-90), a-z (97-122), or Space (32)
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || code === 32) {
            Text += char;
        }
    }

    inp.value = Text; 
    h2.innerText = Text;
});


