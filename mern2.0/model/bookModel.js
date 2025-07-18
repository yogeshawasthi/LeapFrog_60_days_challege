const mongoose= require('mongoose');
const Schema = mongoose.Schema

const bookSchema = new Schema({
    bookName:{
        type : String,
        unique : true
    },
    bookPrice:{
        type : Number
    },
    isbnNumber : {
        type: Number                                                 
    },
    authorName:{
        type:String
    },
    publishedAt:{
        type : Date
    },
    publication:{
        type : String
    },
    imageUrl:{
        type : String
    }
})

const Book =  mongoose.model('Book',bookSchema) // table name 'Book' and having collums as bookSchema
module.exports = Book