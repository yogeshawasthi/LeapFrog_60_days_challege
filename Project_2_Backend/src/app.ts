import 'reflect-metadata';
import  express,{Application,Request,Response} from "express";
const app:Application = express()
const PORT:number = 3000

import * as dotenv from 'dotenv';
dotenv.config()

import './database/connection'
app.use(express.json())

import userRoute from './routes/userRoute'
// import adminSeeder from './adminSeeders';
import productRoute from './routes/productRoutes';


// Admin Seeder
// adminSeeder()

//localhost:3000/register
app.use("",userRoute)
app.use("/admin/products",productRoute)



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})