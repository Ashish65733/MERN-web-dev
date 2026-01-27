const express = require('express');
const app = express();

// console.log(app);

let port = 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// app.use((req,res) => {
//     // console.log(req);
//     console.log('Request received');
//     // res.send('This is a basic response from the server.');
//     // res.send({
//     //     name : "apple",
//     //     color : "red"
//     // });
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//     res.send(code);
// });

app.get("/", (req, res) => {
    res.send("Hello, i am root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.get("*path", (req, res) => {
    res.send("this path does not exist on the server");
});

app.post("/", (req, res) => {
    res.send("you requested using the POST method");
});

app.get("/:username/:id",(req,res) => {
    // console.log("Params received");
    // console.log(req.params);
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}</h1>`;
    // res.send(`You requested the profile of ${username}.`);
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("No search query provided");
    }
    res.send(`These are the results for: ${q}`);
});
