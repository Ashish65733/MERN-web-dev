const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

let port = 8080;

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});

let posts = [
    {
        id: "1a",
        username : "apnacollege",
        content : "I love coding!"
    },
    {
        id: "2b",
        username : "ashish_vankar",
        content : "Node.js is awesome!"
    },
    {
        id: "3c",
        username : "sadie_sink",
        content : "I love JavaScript!"
    }
]

app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts });
});

app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    res.render('show.ejs', { post });
});