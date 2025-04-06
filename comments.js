// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// In-memory storage for comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

