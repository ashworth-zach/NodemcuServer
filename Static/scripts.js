$(document).ready(function () {


    // var ipAddress = '192.168.1.80';
    // var port = '80';
    const url = 'ws://192.168.1.80:81'
    const connection = new WebSocket(url)

    connection.onopen = function (event) {
        $('.load').append("done loading...");
        connection.onmessage = function (event) {
            console.log("WebSocket message received:", event);
            $('.res').append(event.data);
        };
        console.log("WebSocket is open now.");
        connection.send("hello world");
    };
    $('.click').click(function(){
        connection.send($(".res").text());
    })
});
// socket.connect('ws://' + ipAddress + ':' + port);