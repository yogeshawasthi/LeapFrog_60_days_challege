import  express,{Application,Request,Response} from "express";
const app:Application = express()
const PORT:number = 3000




app.get("/",(req:Request,res:Response)=>{
    res.send("Hello, World!");
})

app.get("/about",(req:Request,res:Response)=>{
    res.send("This is the about page.");
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})