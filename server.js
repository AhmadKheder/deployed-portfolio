'use strict'

// this is for calling express library 
const express = require('express');
const { request, response } = require('express');

// amd this is for inislilizing the server
const server = express();

// create a PORT to connect to the outside world
const PORT = process.env.PORT || 3000;

// this is for PORT
server.listen(PORT,()=>{
    console.log('Port',PORT);
})

// this is will render the pages from the public folder which contain everything related to the pages
server.use(express.static('./public'));

