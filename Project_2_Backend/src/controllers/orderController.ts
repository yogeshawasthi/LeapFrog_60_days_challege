import { AuthRequest } from "../middleware/authMiddleware";
import { Response } from "express";
import { OrderData, PaymentMethod } from "../types/orderTypes";
import Order from "../database/models/Order";
import Payment from "../database/models/Payment";
import OrderDetail from "../database/models/OrderDetails";
import axios from "axios";


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
        const data = {
          return_url: "http://localhost:3000/success",
          purchase_ordder_id: orderData.id,
          amount : totalAmount*100,// accepts paisa only so converted rupes to paisa
          website_url: "http://localhost:3000",
          purchase_order_name: "OrderName_"+orderData.id,
        
        }
        axios.post('https://khalti.com/api/v2/epayment/initiate/',data,{
          headers: {
            Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
            "Content-Type": "application/json"
          }
        }).then(response=>{
          res.status(201).json({message:"Order Created Successfully",orderData,khaltiPaymentData:response.data});
        }).catch(error=>{
          res.status(500).json({message:"Error Creating Order",error});
        });

    }else{
        res.status(201).json({message:"Order Created Successfully with Cash on Delivery",orderData});

    }
  } 
}

//  Today  was my  sisters birthday so i cannot attend to complete the khalti integration i will defiently do it tommrow
// sorry but i learned about merchant account creation i will jump to integration  tomorrow i will complete my integration
// so sad to hear 17 deaths in protest . it will be worst tommrow just like bangladesh 
// finally protest went succesful as pm resigned but lots of people died in the process, as well as public properties were destroyed