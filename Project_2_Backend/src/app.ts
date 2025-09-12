import 'reflect-metadata';
import  express,{Application,Request,Response} from "express";
const app:Application = express()
const PORT:number = 3000

import * as dotenv from 'dotenv';
dotenv.config()

import './database/connection'
app.use(express.json())

import userRoute from './routes/userRoute'
import adminSeeder from './adminSeeders';
import productRoute from './routes/productRoutes';
import categoryController from './controllers/categoryController';
import categoryRoute from './routes/categoryRoutes'
import cartRoute from './routes/cartRoute'
import orderRoutes from'./routes/orderRoutes'

// Admin Seeder
adminSeeder()


//localhost:3000/register
app.use("/",userRoute)
app.use("/admin/product",productRoute)
app.use("/admin/category",categoryRoute)
app.use("/customer/cart",cartRoute)
app.use("/customer/order",orderRoutes)



app.listen(PORT,()=>{
    categoryController.seedCategory()
    console.log(`Server is  running on http://localhost:${PORT}`);
})


//day is missing just need to add it
//need to add day in the cart model
// New PM was declared and sushila karki