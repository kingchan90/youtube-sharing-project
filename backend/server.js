const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// In-memory storage for user data (replace with a database in a real application)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Route to handle login requests
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials match any user in the "database"
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
