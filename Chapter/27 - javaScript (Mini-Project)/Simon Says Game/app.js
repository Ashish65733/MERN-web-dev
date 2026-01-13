// ===============================
// Simon Says Game Logic
// ===============================

let gameSeq = [];
let userSeq = [];

let colors = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start the game
document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

// Game flash (computer)
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

// User flash
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

// Level up
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`#${randColor}`);

    gameSeq.push(randColor);
    gameFlash(randBtn);
}

// Check answer
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart`;

        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

// Button click handler
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

// Add event listeners to buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset game
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    if(level > parseInt(document.getElementById("highest-score").innerText)){
        document.getElementById("highest-score").innerText = level;
    }
    level = 0;
}
