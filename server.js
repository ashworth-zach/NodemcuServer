var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var ws = require('ws');
app.set('views', __dirname + '/Views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/Static'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function (req, res) {
    res.render('index');
});

server.listen('8000', function () {
    console.log("Listening on port 8000.");
});