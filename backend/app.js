const express = require("express");
const socket = require("socket.io");
const app = express();

let server = app.listen(5000, function() {
  console.log("server is running on port 5000");
});

let io = socket(server);

// connecting socket
io.on("connection", (socket) => {
  console.log(socket.id);

  // emitting messages to everyone who's socket is connected to server
  socket.on("SEND_MESSAGE", (data) => {
    io.emit("RECEIVE_MESSAGE", data);
  });
  
  socket.on("SEND_CHATNAME", (data) => {
    console.log(77);

    io.emit("RECEIVE_CHATNAME", data);
  });
});
