// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Login route (GET)
app.get('/login', (req, res) => {
    const { phone, password } = req.body;
    console.log(phone,password)
});

// Sign-up route (POST)
app.post('/sign-up', (req, res) => {
  const { username, password } = req.body;
  
  // Perform sign-up logic (e.g., store user data in a database)
  
  res.json({ message: 'Sign-up successful', username, password });
});

// GPS route (GET)
app.get('/gps', (req, res) => {
  res.send('This is the GPS page (GET)');
});

// Report route (POST)
app.post('/report', (req, res) => {
  const { reportType, details } = req.body;

  // Perform report submission logic
  
  res.json({ message: 'Report submitted successfully', reportType, details });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
