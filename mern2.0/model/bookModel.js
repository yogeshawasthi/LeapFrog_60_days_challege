const mongoose= require('mongoose');
const Schema = mongoose.Schema

const blogSchema = new Schema({
    bookName:{
        type : String
    },
    bookPrice:{
        type : String
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
})