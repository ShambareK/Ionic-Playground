// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON in request body
app.use(bodyParser.json());

// Read the users array from the JSON file
let users = [];
try {
  const usersData = fs.readFileSync('users.json', 'utf8');
  users = JSON.parse(usersData);
} catch (error) {
  console.error('Error reading users file:', error);
}

// Login route (GET)
app.get('/login', (req, res) => {
    const { phone, password } = req.body;
    //retrieve 1 user info 
    let thisUser = users.find((elem)=>{
        return elem.phone === req.body.phone
    })

    //check for possibly errors in the database

    if(thisUser.length !== 1){
        res.status(500).send("Server Error");
    }

    
});



// Sign-up route (POST)
app.post('/sign-up', (req, res) => {
  
    let dateCreated = new Date(); // record todays date

  const userObject = {
    name: req.body.name,
    phone: req.body.phone,
    password: req.body.password,
    address: req.body.address,
    postalCode: req.body.postalCode,
    dateCreated: dateCreated
  };
  
users.push(userObject)
  
  // Update the users.json file with the new data
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2), 'utf8');

  res.status(201).json({ message: 'Account created successfully', user: newUser });


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
