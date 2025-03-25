const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

app.use(cors());
// This code sets up a simple Express server with Socket.io for real-time communication.
// It listens for incoming connections and handles drawing data broadcasted from clients.
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('drawing', (data) => {
    socket.broadcast.emit('drawing', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(5000, () => console.log('Server is running on port 5000'));
