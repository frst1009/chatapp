const express = require("express");
const cors = require('cors');
const {db}=require('./db');
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
require('dotenv').config()
db.connect();
app.use('/user' ,userRoutes)
const server = require('http').createServer(app);
const PORT = 4000;
const io= require('socket.io')(server,{
  cors:{
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
  }
})
server.listen(PORT, ()=>{
  console.log("server is running");
})