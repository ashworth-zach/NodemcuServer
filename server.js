var express = require('express');
var bodyParser = require('body-parser');
var queryString = require('querystring');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('views', __dirname + '/Views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/Static'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function (req, res) {
    res.render('index');
});
io.on('connection', function (socket) {
    console.log("Welcome");
    socket.on('newmessage', function (data) {
        console.log(data);
        msgarr.push(data);
        socket.broadcast.emit("message", {
            msg:data.msg,
            name: data.name
        })
        socket.emit("message", {
            msg:data.msg,
            name: data.name
        })
        
    });
});

server.listen('8000', function () {
    console.log("Listening on port 8000.");
});