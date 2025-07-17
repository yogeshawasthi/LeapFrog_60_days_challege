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
                const newBook = await Book.create({
                    bookName,
                    bookPrice
                })

                io.emit("response", {
                    status: 200, message: "Book Created Successfully",
                    data: newBook
                })
            }
        } catch (error) {
            socket.emit("response", { status: 500, message: "Something went wrong" })

        }
    })



    // get books

    socket.on("getBook", async (data) => {
        try {
            const books = await Book.find()

            socket.emit("response", { status: 200, message: "Book Fetched ", data: books })

        } catch (error) {
            socket.emit("response", { status: 500, message: "Something Went Wrong " })

        }
    })

    //update book
    socket.on("updateBook", async (data) => {
        try {
            if (data) {
                const { bookName, bookPrice, bookId } = data;
                const updatedBook = await Book.findByIdAndUpdate(
                    bookId,
                    {
                        bookName,
                        bookPrice
                    },
                    {
                        new: true
                    }
                );
                if (updatedBook) {
                    socket.emit("response", { status: 200, message: "Book Updated Successfully", data: updatedBook });
                } else {
                    socket.emit("response", { status: 404, message: "Book not found" });
                }
            }
        } catch (error) {
            socket.emit("response", { status: 500, message: "Something Went Wrong " });
        }
    })
    //delteBook
    socket.on("deleteBook", async (data) => {
        try {
            if (data) {
                const { bookId } = data
                await Book.findByIdAndDelete(bookId)
                socket.emit("response", { status: 200, message: "Book Deleted " })
            }
        } catch (error) {
            socket.emit("response", { status: 500, message: "Something Went Wrong " })

        }
    })

})