import { Sequelize } from "sequelize-typescript";
import * as dotenv from 'dotenv';
dotenv.config(); // Load environment variables

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST, // ✅ Typo fixed
  port: Number(process.env.DB_PORT),
  models: [__dirname + "/models"], // Make sure you have decorated model files here
  logging: false, // Optional: disable raw SQL logs
});

sequelize.authenticate()
.then(()=>{
    console.log("conneted")
}).catch((err)=>{
    console.log(err)
})

sequelize.sync({force :false}).then(()=>{
    console.log("Synced !!!")
})

export default sequelize