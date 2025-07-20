import  express,{Application,Request,Response} from "express";
const app:Application = express()
const PORT:number = 3000


require ("./model/index")

import * as dotenv from 'dotenv';
dotenv.config()
import './database/connection'



app.get("/",(req:Request,res:Response)=>{
    res.send("Hello, World!");
})

app.get("/contact",(req:Request,res:Response)=>{
    res.send("Contact  page.");
})



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})