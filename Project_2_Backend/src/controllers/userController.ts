import { Request,Response } from "express";
import User from "../database/models/useModel";
import bcrypt from 'bcrypt'


class AuthCOntroller{
 public static async   registerUser(req:Request,res: Response):Promise<void>{
        

        const {username,email,password} = req.body
        if(!username || !email || !password){
            res.status(400).json({
                message:"Please Provide username , email , password"
            })
            return 
        }

       await  User.create({
            username,
            email,
            password : bcrypt.hashSync(password,10)

        })
        res.status(200).json({
            message:"User Registerd Sucessfully"
        })


    }
}

export default AuthCOntroller