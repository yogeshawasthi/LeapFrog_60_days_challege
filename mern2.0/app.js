const express = require('express')
const app = express()
const mongoose = require('mongoose');

const connectToDatabase = require('./database');
const Book = require('./model/bookModel')


// const ConnectionString="mongodb+srv://yogesh:yogesh@cluster0.bxt7lq1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Alternative
//const app = require('express')()

app.use(express.json())

connectToDatabase();

app.get("/", (req, res) => {
    // console.log(req)
    res.send("hello World")
    // 

    res.json({
        "name": "Yogesh Awasthi",
        "age": 22,
        "message": "sucessful"
    })
    res.json(200).json({
        "message": "sucessful"
    })
})


// create a book table
app.post("/book", async (req, res) => {
    const { bookName, bookPrice, isbnNumber, authorName, publishedAt, publication } = req.body

    await Book.create({
        bookName,
        bookPrice,
        isbnNumber,
        authorName,
        publishedAt,
        publication
    })
    res.status(201).json({
        "message": "Book Created Sucessfully "
    })
})

// all book
app.get("/book", async (req, res) => {
    const books = await Book.find()//returns array
    console.log(books)
    res.status(200).json({
        message: "Books Fecthed Sucessfully",
        data: books
    })
})

//single read
app.get("/book/:id", async (req, res) => {
    try {
        const id = req.params.id
        const book = await Book.findById(id) // return object 
        if (!book) {
            res.status(404).json({
                message: "No books found"
            })
        }
        else {
            res.status(200).json({
                message: "You are requesting a single book",
                data: book
            })
        }

    } catch (error) {

        res.status(404).json({
            message: "Something Went wrong"
        })

    }

})



//update and delete apis soon

//delete the boook
app.delete("/book/:id", async (req, res) => {
    const id = req.params.id
    await Book.findByIdAndDelete(id)
    res.status(200).json({
        message: "Book deleted Sucessfully"
    })

})

// update the book by findbyidupdate
//path vs put   . path is more optimized

app.patch("/book/:id", async (req, res) => {
    const id = req.params.id
    const { bookName, bookPrice, isbnNumber, authorName, publishedAt, publication } = req.body

  await  Book.findByIdAndUpdate(id, {
        bookName: bookName,
        bookPrice: bookPrice,
        authorName: authorName,
        publication: publication,
        publishedAt: publishedAt,
        isbnNumber: isbnNumber
    })
    res.status(201).json({
        message:"Book Is Updated SuccessFully"
    })
})


//rest api   

// getbooks -->/getallbooks
//delete book  ->/delete/:id-delete
//update book -->/udate/:id-path
//Get Author info -->/author/1


//restful api
// getbooks -->/books  --get
//delete book  ->/books/:id -delete
//update book -->/books/:id -path
//single book  ->/books/:id -get
// Add book  --->/books  -post
//Get Author info -->/books/comment/1









//run to 3000 port and show console result in terminal
app.listen(3000, () => {
    console.log("Nodejs server has started at port 3000")
})

