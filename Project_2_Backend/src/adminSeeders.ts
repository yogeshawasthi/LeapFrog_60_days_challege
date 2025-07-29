import { where } from "sequelize"
import User from "./database/models/useModel"
import bcrypt from 'bcrypt'

const adminSeeder = async():Promise<void>=>{
 const [data] =   await User.findAll({
        where: {
            email:"yogeshawasthi54321@gmail.com"
        }
    })
    if(!data){
        await User.create({
            email:"yogeshawasthi54321@gmail.com",
            password:bcrypt.hashSync("yogesh123",8),
            username:'admin',
            role : 'admin'

        })
        console.log("admin credentails seeded successfully")
    }else{
        console.log("admin credentails already exist")
    }

}

export default adminSeeder