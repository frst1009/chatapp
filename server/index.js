const express = require("express");
const cors = require('cors');
const {db}=require('./db');
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config()
db.connect();
app.use('/user' ,userRoutes)
const server = require('http').createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, { cors: {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"]
}});

io.on("connection", (socket) => {
  console.log('Socket ', socket.id);
  socket.on("sendMessage", (data) => {
      io.emit("chatMessage", { ...data, id: socket.id })    
  })
});


server.listen(3003, () => {
  console.log('listening on *:3003');
});