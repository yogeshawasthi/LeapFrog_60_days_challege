const express = require("express");
const app = express();
const { Server, Socket } = require("socket.io"); // no need to import Socket
const connectToDatabase = require("./database");
const Book = require("./model/bookModel");


connectToDatabase()
const server = app.listen(4000, () => {
    console.log("Server has started at Port 4000");
});

const io = new Server(server); // create socket.io server

//CRUD (create , read , update , delete)
io.on('connection', (socket) => {
    console.log("A user Connected")
    //addBook

    socket.on('addBook', async (data) => {
      try {
         if (data) {
                const { bookName, bookPrice } = data
                const newBook = await Books.create({
                    bookName,
                    bookPrice
                })

                io.emit("response", {
                    status: 200, message: "Book Created Successfully",
                    data: newBook
                })
         }
      } catch (error) {
        socket.emit("response",{status : 500 , message :"Something went wrong"})
        
      }
        })

})