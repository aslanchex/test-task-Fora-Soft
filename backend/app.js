const express = require("express");
const socket = require("socket.io");
const app = express();

let server = app.listen(8080, function() {
  console.log("server is running on port 8080");
});

let io = socket(server);

// connecting socket
io.on("connection", socket => {
  console.log(socket.id);

  // emitting messages to everyone who's socket is connected to server
  socket.on('SEND_MESSAGE', function(data){
      io.emit('RECEIVE_MESSAGE', data);
  })
});
