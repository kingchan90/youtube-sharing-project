const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const secretKey = 'your-secret-key';

const users = [
  { username: 'user1@gmail.com', password: 'password1' },
  { username: 'user2@gmail.com', password: 'password2' },
];

const loggedInUsers = [];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    loggedInUsers.push({ username, token });
    res.json({ message: 'Login successful', user: {username, token, id: user.id} });
  } else {
    res.status(401).json({ message: 'Login failed' });
  }
});

app.get('/user', (req, res) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const username = decoded.username;
    const user = users.find((u) => u.username === username);

    if (user) {
      res.json({ username: user.username });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Token is invalid or has expired' });
  }
});

app.post('/logout', (req, res) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  const index = loggedInUsers.findIndex((entry) => entry.token === token);

  if (index !== -1) {
    loggedInUsers.splice(index, 1);
    res.json({ message: 'Logout successful' });
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
