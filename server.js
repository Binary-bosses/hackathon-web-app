"use strict";
const express = require("express");

// Constants
const PORT = 4200;
const HOST = "0.0.0.0";

// App
const app = express();

var server = app.listen(PORT, HOST, function() {
    console.log(`Running on http://${HOST}:${PORT}`);    
});
module.exports = server;