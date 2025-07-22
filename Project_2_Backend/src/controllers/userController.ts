import { Request, Response } from "express";
import User from "../database/models/useModel";
import bcrypt from "bcrypt";

class AuthCOntroller {
  public static async registerUser(req: Request, res: Response): Promise<void> {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).json({
        message: "Please Provide username , email , password",
      });
      return;
    }

    await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    res.status(200).json({
      message: "User Registerd Sucessfully",
    });
  }

  public static async loginUser(req: Request, res: Response): Promise<void> {
    try {

      // user input
      const { email, password } = req.body;

      if (!email || !password) {
        console.log(" Missing email or password");
        res.status(400).json({
          message: "Please provide email and password",
        });
        return;
      }
      // check whether user exists
      const [data] = await User.findAll({
        where: {
          email: email,
        },
      });

      if (!data) {
        console.log(" No user found with that email");
        res.status(404).json({
          message: "No user with that email exists",
        });
        return;
      }

      // check password
      const isMatched = bcrypt.compareSync(password, data.password);

      if (!isMatched) {
        console.log(" Password did not match");
        res.status(401).json({
          message: "Invalid email or password",
        });
        return;
      }

      console.log("✅ Login successful");
      res.status(200).json({
        message: "Login successful",
      });
    } catch (error) {
      console.error("🔥 Error during login:", error);
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  }
}

export default AuthCOntroller;
