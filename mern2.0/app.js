const express = require('express')

const app =express()

// Alternative
//const app = require('express')()


app.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello World")
})



//run to 3000 port and show console result in terminal
app.listen(3000,()=>{
    console.log("Nodejs server has started at port 3000")
})

