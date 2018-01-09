var express = require("express");
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt");
var mongoose = require("./server/config/mongoose");
var path = require("path");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client/app"));

app.all("*", function (req, res) {
    res.sendFile(__dirname + "/client/index.html");
});

var routes = require("./server/config/routes")(app);

app.listen(8000, function () {
    console.log('running on 8000');
});