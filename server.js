const express = require('express');

//Initalizes express
const app = express();

//this is the server's port number
const port = 5000;


app.listen(port,() => console.log(`Listening on port ${port}...`));