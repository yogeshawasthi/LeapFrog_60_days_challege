import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';
import User from "./models/useModel";
import Product from "./models/Product";
import Category from "./models/Category";
import Cart from "./models/Cart";
dotenv.config(); // Load environment variables

const  sequelize = new  Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST, 
  port: Number(process.env.DB_PORT),
  models: [__dirname + "/models"], 
  logging: false,
});

sequelize.authenticate()
.then(()=>{
    console.log("conneted")
}).catch((err)=>{
    console.log(err)
})


//relationships


sequelize.sync({force :false}).then(()=>{
    console.log("Synced !!!")
})

User.hasMany(Product,{foreignKey:'userId'})
Product.belongsTo(User,{foreignKey:'userId'})

Product.belongsTo(Category,{foreignKey:'categoryId'})
Category.hasOne(Product,{foreignKey:'categoryId'})

//prduct -cart relation
User.hasMany(Cart,{foreignKey: 'userId'})
Cart.belongsTo(User,{foreignKey : 'userId'})


//user-cart relation
Product.hasMany(Cart,{foreignKey: 'productId'})
Cart.belongsTo(Product,{foreignKey: 'productId'})


export default sequelize