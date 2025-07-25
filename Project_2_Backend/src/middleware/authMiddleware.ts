import { Request, Response, Application, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../database/models/useModel";

class authMiddleware {
  async isAuthenticated(
    req: Request,
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
          res.status(403).json({
            message: "Invalid Token",
          });
        } else {
          //check whether if that decoded object id user exist or not
          try {
            const UserData = await User.findByPk(decoded.id);
            if (!UserData) {
              res.status(403).json({
                message: "No user with that token",
              });
            }
            req.user = UserData;
            next();
          } catch (error) {
            res.status(500).json({
              message: "Something went wrong",
            });
          }
        }
      }
    );

    //nextfunction to continue the request f
  }
}
