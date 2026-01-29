let express = require('express');

let app = express();
let port = 8080;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public/CSS')));
app.use(express.static(path.join(__dirname, '/public/JS')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render("home.ejs"); // res.render("home");
    // res.send("EJS Home Page");
});

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;    // assume that this value is got from database
    res.render("rolldice", { diceValue });
    // res.render("rolldice.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// app.get("/ig/:username",(req, res) => {
//     let followers = ["Sadie_sink", "Ronaldo", "Mr.Beast", "Elon Musk"];
//     let { username } = req.params;
//     res.render("instagram", { username, followers });
// });

app.get("/ig/:username",(req, res) => {
    let { username } = req.params;
    let instaData = require("./data.json");
    let data = instaData[username];

    if(data){
        res.render("instagram", { data });
    }else{
        res.render("error");
    }
});
