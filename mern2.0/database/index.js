 const mongoose = require('mongoose')
 const ConnectionString="mongodb+srv://yogesh:yogesh@cluster0.tndu8p5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
 
 async function connectToDatabase(){
    await  mongoose.connect(ConnectionString)
    console.log("Connected to DB sucessfully")
}

module.exports = connectToDatabase