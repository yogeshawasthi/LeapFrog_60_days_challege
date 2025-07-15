const express = require("express")
const app = express()
const{Server} = require('socket.io')//importing socket.io




 const server = app.listen(4000,()=>{
    console.log("Sercer Has started at Port 4000")
})


const io = new  Server(server) //instance of socket.io

io.on('connection',()=>{
    console.log("Someone Has Connected")
})