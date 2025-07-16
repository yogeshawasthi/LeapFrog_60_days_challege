const express = require("express");
const app = express();
const { Server } = require("socket.io"); // no need to import Socket

const server = app.listen(4000, () => {
    console.log("Server has started at Port 4000");
});

const io = new Server(server); // create socket.io server

io.on("connection", (socket) => {
//     socket.emit("hi",{
//         greeting : "Helo how are you"
//     })
    // console.log(socket.id); // this will correctly log the connected socket's ID
   
    // console.log("Someone has connected!");

    socket.on('sendData',(data)=>{
        if(data){
           
           io.emit("response","Thank You your data was recieved ")
        }
    })   

    
    // socket.on("disconnect",()=>{
    //     console.log("Disconnected a user")
    // })
});
