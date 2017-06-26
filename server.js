const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const logger = require('morgan');
const server_config = require('./server/server.config');
const controller = require('./server/controller');


//Initalizes express
const app = express();

//this is the server's port number
const port = process.env.PORT || 3000;

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Log requests to the console.
// app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

//serves the build directory
app.use(express.static(path.join(__dirname, 'build')));

//Massive connect initializer to postgressql
massive({
    host:'localhost',
    port:5435,
    database:'postgres',
    user:server_config.user,
    password:server_config.password
}).then(db => app.set('db',db));

/* Refer to all endpoints below */

//---End points to serve the front end--- 
//very important!!! for production add app.get('/*',()=>{}); the star is important 
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

//---End points to serve the back end--- 

//testpoint
app.get ('/table', controller.getAll);
app.post('/user', controller.postUser);

app.listen(port,() => console.log(`Listening on port ${port}...`));