import { Request,Response } from "express"
import Product from "../database/models/Product"
import { AuthRequest } from "../middleware/authMiddleware"
import User from "../database/models/useModel"
import Category from "../database/models/Category"

class ProductController{
    async addProduct(req:AuthRequest,res:Response):Promise<void>{
      const userId = req.user?.id
      console.log("User ID:", userId);
        const {productName,productDescription,productTotalStockQty,productPrice,categoryId} = req.body
      let fileName
      if(req.file){
        fileName = req.file?.filename
      }else{
        fileName = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
      }  

        if (!productName || !productDescription || !productTotalStockQty || !productPrice || !categoryId) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }
        await Product.create({
            productName,
            productDescription,
            productPrice,
            productTotalStockQty,
           productImageUrl: fileName,
           userId : userId,
           categoryId: categoryId

        });

        res.status(201).json({ message: "Product created successfully", userId: userId ,categoryId:categoryId});
    }

    async getAllProducts(req:Request,res:Response):Promise<void>{
       const data = await Product.findAll(
        {
          include : [
            {
              model: User,
              attributes : ['id','email']
            },
            {
              model : Category,
              attributes : ['categoryName']

            }
          ]
        }
       )
       res.status(200).json({
        message : "Products Fetched Successfully",
        data: data
       })

      }
        
}

export default new ProductController;