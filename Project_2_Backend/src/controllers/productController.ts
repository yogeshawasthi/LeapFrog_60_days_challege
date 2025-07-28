import { Request,Response } from "express"
import Product from "../database/models/Product"
import { AuthRequest } from "../middleware/authMiddleware"

class ProductController{
    async addProduct(req:AuthRequest,res:Response):Promise<void>{
      const userId = req.user?.id
      console.log("User ID:", userId);
        const {productName,productDescription,productTotalStockQty,productPrice} = req.body
      let fileName
      if(req.file){
        fileName = req.file?.filename
      }else{
        fileName = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
      }  

        if (!productName || !productDescription || !productTotalStockQty || !productPrice) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }
        await Product.create({
            productName,
            productDescription,
            productPrice,
            productTotalStockQty,
           productImageUrl: fileName,
           userId : userId

        });

        res.status(201).json({ message: "Product created successfully", userId: userId });
    }
}

export default new ProductController;