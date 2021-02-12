// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request } = require('http');
const { response } = require('express');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

//GET route that returns projectData in server code
app.get('/', sendData);

//sendData callback function
const sendData = (request, response) => {
    response.send(projectData);
}

//POST route that adds incoming data to projectData
app.post('/', addData);

//addData callback function
const addData = (request, response) => {
    projectData.push(request.body.temperature);
    projectData.push(request.body.date);
    projectData.push(request.body.userResponse);
    console.log(projectData);
}

// Setup Server
const port = 8000;
const listening = () => {
    console.log('Server Running');
    console.log('Server Running on Port: ' + port);
}

const server = app.listen(port, listening);