import { Request,Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Cart from "../database/models/Cart";
import Product from "../database/models/Product";
import Category from "../database/models/Category";

class CartController{
    async addToCart(req:AuthRequest,res:Response):Promise<void>{
        const userId = req.user?.id
        const {quantity,productId} = req.body
        if(!quantity || !productId){
            res.status(400).json({
                message: "Please provide Quantity,productId"
            })
        }
        //check if the product already exists in the cart table or not 
        let cardItem = await Cart.findOne({
            where : {
                productId,
                userId
            }
        })
        if(cardItem){
            cardItem.quantity+=quantity
            await cardItem.save()
        }else{
            // insert into Cart table
            await Cart.create({
                quantity,
                userId,
                productId
            })
        }
        res.status(200).json({
            message:"Product added to cart",
            data : cardItem
        })
    }

    async getMyCarts(req:AuthRequest,res:Response):Promise<void>{
        const userId = req.user?.id
        const cartItems = await Cart.findAll({
            where:{
                userId
            },
            include:[
            {
                model: Product,
                include : [
                    {
                        model: Category
                    }
                ]
            }
        ]
        })

        if(cartItems.length === 0){
            res.status(404).json({
                message: "No items found in cart"
            })

        }else{
            res.status(200).json({
                message: "Cart items fetched successfully",
                data: cartItems
            })
        }

    }
    // async updateMyCarts(req:AuthRequest,res:Response):Promise<void>{
    //     const userId = req.user?.id
    //     const cartItems = await Cart.findAll({
    //         where:{
    //             userId
    //         },
    //         include:[
    //             {
    //             model : Product
    //         }
    //     ]
    //     })

    //     if(cartItems.length === 0){
    //         res.status(404).json({
    //             message: "No items found in cart"
    //         })

    //     }else{
    //         res.status(200).json({
    //             message: "Cart items fetched successfully",
    //             data: cartItems
    //         })
    //     }

    // }  this will be cart update module which will be done tommorwo in evening 
}

export default new CartController()