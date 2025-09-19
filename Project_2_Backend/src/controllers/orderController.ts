import { AuthRequest } from "../middleware/authMiddleware";
import { Response } from "express";
import { khaltiResponse, OrderData, PaymentMethod, TranscationStatus, TranscationVerificationResponse } from "../types/orderTypes";
import Order from "../database/models/Order";
import Payment from "../database/models/Payment";
import OrderDetail from "../database/models/OrderDetails";
import axios from "axios";
import { pid } from "process";

class OrderController {
  async createOrder(req: AuthRequest, res: Response): Promise<void> {
    const userId = req.user?.id;
    const {
      phoneNumber,
      shippingAddress,
      totalAmount,
      paymentDetails,
      items,
    }: OrderData = req.body;
    if (
      !phoneNumber ||
      !shippingAddress ||
      !totalAmount ||
      !paymentDetails ||
      !paymentDetails.paymentMethod ||
      items.length === 0
    ) {
      res.status(400).json({
        message:
          "Please Provide phoneNumber,shippingAddress,totalAmount,paymentDetails,items",
      });
      return;
    }
    const paymentData = await Payment.create({
      paymentMethod: paymentDetails.paymentMethod,
    });

    const orderData = await Order.create({
      phoneNumber,
      shippingAddress,
      totalAmount,
      userId,
      paymentId: paymentData.id,
    });

    for (var i = 0; i < items.length; i++) {
      await OrderDetail.create({
        quantity: items[i].quantity,
        productId: items[i].productId,
        orderId: orderData.id,
      });
    }

    if (paymentDetails.paymentMethod == PaymentMethod.Khalti) {
      //khalti integraton code
      const data = {
        return_url: "http://localhost:3000/success",
        purchase_order_id: orderData.id,
        amount: totalAmount * 100, // accepts paisa only so converted rupes to paisa
        website_url: "http://localhost:3000",
        purchase_order_name: "OrderName_" + orderData.id,
      };
      try {
        const response = await axios.post(
          'https://a.khalti.com/api/v2/epayment/initiate/',
          data,
          {
            headers: {
              'Authorization': 'Key 1014d18482e3486d8fb65a0185b9f683',
            },
          }
        );
        const khaltiResponse: khaltiResponse = response.data;
        paymentData.pidx = khaltiResponse.pidx;
        paymentData.save();
        res.status(200).json({
          message: "Order Created Successfully ",
          url: khaltiResponse.payment_url,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Khalti API error:", error.response?.data || error.message);
          res.status(500).json({
            message: "Khalti API Error",
            errorMessage: error.response?.data || error.message,
          });
        
        }
        return;
      }
    } else {
      res.status(200).json({
        message: "Order Created Successfully ",
        orderData,
      });
    }
  }
  async verifyTransaction(req:AuthRequest,res:Response):Promise<void>{
    const {pidx} = req.body
    const userId = req.user?.id
    if(!pidx){
      res.status(400).json({
        message: "Please Provide pidx"
      })
      return
    }
    const response = await axios.post("https://a.khalti.com/api/v2/epayment/lookup/",{pidx},{
      headers : {
        'Authorization' : 'Key 1014d18482e3486d8fb65a0185b9f683'
      }
    })
    const data : TranscationVerificationResponse = 
    response.data
    if(data.status ==TranscationStatus.Completed)
    {

      
    }else{
      res.status(200).json({
        message : "Payment is not Verified"
      })

    }
  }
}

export default new OrderController();

//  Today  was my sisters birthday so i cannot attend to complete the khalti integration i will defiently do it tommrow
// sorry but i learned about merchant account creation i will jump to integration  tomorrow i will complete my integration
// so sad to hear 17 deaths in protest . it will be worst tommrow just like bangladesh
// finally protest went successful as pm resigned but lots of people died in the process, as well as public properties were destroyed
// cheif justice will be head of the country as pm under control today
// i am loosing my battle i need some consistency
// khalti integraton done
// today i explored aws fellowship for 1 month 1 , 2,3 modules summmary as provided my teacher
// clebrated vanza birthday so sorry for today , 
// i though hosting will be tough but it was easy