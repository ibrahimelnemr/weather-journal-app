// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes

const express = require('express');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, active)

function active() {
  console.log("server active");
  console.log(`running on localhost: ${port}`)
}

app.post('/add', (req,res) => {

  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.userResponse = req.body.userResponse;

  res.send(projectData);

});

app.get('/add', (req, res) => {
console.log(projectData);
res.send(projectData);

})


// lsof -nti:8000 | xargs kill -9
