const express = require('express')
const app =express()
const mongoose= require('mongoose');
const connectToDatabase = require('./database');


// const ConnectionString="mongodb+srv://yogesh:yogesh@cluster0.bxt7lq1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Alternative
//const app = require('express')()



connectToDatabase();

app.get("/",(req,res)=>{
    // console.log(req)
    res.send("hello World")
    // 

       res.json({
        "name":"Yogesh Awasthi",
        "age":22,
        "message":"sucessful"
    })
    res.json(200).json({
        "message":"sucessful"
    })
})



//run to 3000 port and show console result in terminal
app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

