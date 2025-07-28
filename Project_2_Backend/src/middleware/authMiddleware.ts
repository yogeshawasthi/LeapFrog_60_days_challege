import { Request, Response, Application, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../database/models/useModel";

 export interface AuthRequest extends Request{
  user?:{
    username: string;
    email: string;
    role: string;
    password: string;
    id: string;
  };
}


 export enum Role{
  Admin = 'admin',
  Customer = 'customer'
}

class AuthMiddleware {
  async isAuthenticated(
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    //get token
    const token = req.headers.authorization;
    if (!token) {
      res.status(403).json({
        message: "Token is not provided",
      });
      return;
    }
    //verify token if it is legit or tempered

    jwt.verify(
      token,
      process.env.SECRET_KEY as string,
      async (err, decoded: any) => {
        if (err) {
          res.status(403).json({ message: "Invalid Token" });
        } else {
          try {
            console.log("Decoded JWT:", decoded); // Add this
            const UserData = await User.findByPk(decoded.id);
            console.log("Fetched UserData:", UserData); // Add this
            if (!UserData) {
              res.status(403).json({ message: "No user with that token" });
              return;
            }
            req.user = {
              id: UserData.id,
              username: UserData.username,
              email: UserData.email,
              role: UserData.role,
              password: UserData.password
            };
            next();
          } catch (error) {
            res.status(500).json({ message: "Something went wrong" });
          }
        }
      }
    );

    //nextfunction to continue the request f
  }
restrictTo(...roles:Role[]){
  return(req:AuthRequest,res:Response,next:NextFunction)=>{
    let userRole = req.user?.role as Role
    if(!roles.includes(userRole)){
      res.status(403).json({
        message : "you don`t have permission"
      })
    }else{
      next()
    }
  }

}

}


export default new AuthMiddleware()