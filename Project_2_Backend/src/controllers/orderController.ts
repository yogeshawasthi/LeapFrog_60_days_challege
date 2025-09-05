import { AuthRequest } from "../middleware/authMiddleware";
import { Response } from "express";
import { OrderData, PaymentMethod } from "../types/orderTypes";
import Order from "../database/models/Order";
import Payment from "../database/models/Payment";
import OrderDetail from "../database/models/OrderDetails";


class OrderController {

    async createOrder(req:AuthRequest,res:Response):Promise<void>{
    const userId = req.user?.id;
    const {phoneNumber,shippingAddress,totalAmount,paymentDetails,items}:OrderData = req.body;
    if(!phoneNumber || !shippingAddress || !totalAmount || !paymentDetails || !paymentDetails.paymentMethod || items.length===0){
      res.status(400).json({message:"Please Provide phoneNumber,shippingAddress,totalAmount,paymentDetails,items"});
      return;
    }

    const orderData = await Order.create({
      phoneNumber,
      shippingAddress,
      totalAmount,
      userId
    })

    await Payment.create({
        paymentMethod : paymentDetails.paymentMethod
    });
    for (var i = 0; i < items.length; i++) {
      await OrderDetail.create({
        quantity: items[i].quantity,
        productId: items[i].productId,
        orderId : orderData.id
      });
    }

    if(paymentDetails.paymentMethod ==PaymentMethod.Khalti){
        //khalti integraton code
    }else{
        res.status(201).json({message:"Order Created Successfully with Cash on Delivery",orderData});

    }
  } 
}

//today  was my  sisters birthday so i cannot attend to complete the khalti integration i will defiently do it tommrow
// sorry but i learned about merchant account creation i will jump to integration  tomorrow
