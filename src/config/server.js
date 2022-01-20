const port = 3003; //select port

const bodyParser = require("body-parser"); //Parse of body of require
const express = require("express"); //server web (on node)
const server = express(); //starting express

// all request => middleware
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//register port
server.listen(port, function () {
    //signal: success 
  console.log(`BACKEND is running on port ${port}.`);
});
