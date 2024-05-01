// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// Create a route with a parameter
app.get('/comments/:id', (req, res) => {
    res.send(`Comment ID: ${req.params.id}`);
});
// Create a route with a query string
app.get('/comments', (req, res) => {
    res.send(`Comments: ${req.query}`);
});
// Path: index.js
// Import comments.js
const comments = require('./comments');
// Create a route
app.get('/comments', (req, res) => {
    res.send('Comments');
});

