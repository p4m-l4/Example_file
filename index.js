//import modules
const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//Setting up routes
const route1 = require('./routes/index_route');



//Instantiation
const app = express();

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//Middleware to serves static files
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (request, response) => {
//     response.send('Home page');
// });

//Using routes
app.use('/', 'route1');

//Routes
// app.get('/', (request, response) => {
//     response.sendFile(__dirname + 'index')
// });



//Final line in code
app.listen(5000, () => console.log("Working!"))