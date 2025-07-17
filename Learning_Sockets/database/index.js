const mongoose = require('mongoose')

 async function connectToDatabase(){
 await   mongoose.connect('mongodb+srv://yogeshawasthi54321:8Vfqsrjzh8chp1ih@cluster0.tkvlwfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
 console.log("Database Connected")
}

module.exports = connectToDatabase