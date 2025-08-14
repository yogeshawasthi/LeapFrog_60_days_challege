const express = require('express')
const app = express()// create an express app
const fs = require('fs')// to delete the file
const mongoose = require('mongoose');
const connectToDatabase = require('./database');
const Book = require('./model/bookModel')


// const ConnectionString="mongodb+srv://yogesh:yogesh@cluster0.bxt7lq1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Alternative
//const app = require('express')()


const { multer, storage } = require('./middleware/multerConfig')
//imort both of of them
const upload = multer({ storage: storage }) // multer is a middleware to handle multipart/form-data, which is used for uploading files

//cors package import
const cors = require('cors') // to allow cross-origin requests

app.use(cors({
    origin: '*' //allow all sites whitleist to all of them
    // origin:['http://localhost:5173'] // 
}))



app.use(express.json())// to parse JSON data from the request body
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


// req.body ---> only text comes
// req.file --->files like image,video comes

// create a book table
app.post("/book", upload.single('image'), async (req, res) => {

    console.log(req.file)
    let fileName;
    if (!req.file) {
        fileName = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

    } else {
        fileName = "https://leapfrog-60-days-challege.onrender.com/" + req.file.filename
    }

    const { bookName, bookPrice, isbnNumber, authorName, publishedAt, publication } = req.body
    await Book.create({
        bookName,
        bookPrice,
        isbnNumber,
        authorName,
        publishedAt,
        publication,
        imageUrl: fileName
    })
    res.status(201).json({
        "message": "Book Created Sucessfully "
    })
})

// all book
app.get("/book", async (req, res) => {
    const books = await Book.find()//returns array
    // console.log(books)
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

app.patch("/book/:id", upload.single('image'), async (req, res) => {
    const id = req.params.id
    const { bookName, bookPrice, isbnNumber, authorName, publishedAt, publication } = req.body

    const oldDatas = await Book.findById(id)
    let fileName;
    if (req.file) {

        const oldImagePath = oldDatas.imageUrl
        // console.log(oldImagePath)
        const localHostUrlLength = "http://localhost:3000/".length
        const newOldImagePath = oldImagePath.slice(localHostUrlLength)
        // console.log(newOldImagePath)
        fs.unlink(`storage/${newOldImagePath}`, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("File Deleted Sucessfully")
            }
        })
        fileName = "http://localhost:3000" + req.file.filename
    }

    await Book.findByIdAndUpdate(id, {
        bookName: bookName,
        bookPrice: bookPrice,
        authorName: authorName,
        publication: publication,
        publishedAt: publishedAt,
        isbnNumber: isbnNumber,
        imageUrl: fileName
    })
    res.status(200).json({
        message: "Book Is Updated SuccessFully"
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





app.use(express.static("./storage/")) // gives acees to file form storage folder
// allow read operatons on storage folder



//run to 3000 port and show console result in terminal
app.listen(3000, () => {
    console.log("Nodejs server has started at port 3000")
})

// Day 23 understood about webscoket  
// missing old days hi when i used to grind each day 