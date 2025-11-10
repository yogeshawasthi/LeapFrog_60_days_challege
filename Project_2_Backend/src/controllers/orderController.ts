import { AuthRequest } from "../middleware/authMiddleware";
import { Response ,Request} from "express";
import {
  khaltiResponse,
  OrderData,
  OrderStatus,
  PaymentMethod,
  TranscationStatus,
  TranscationVerificationResponse,
} from "../types/orderTypes";
import Order from "../database/models/Order";
import Payment from "../database/models/Payment";
import OrderDetail from "../database/models/OrderDetails";
import axios from "axios";
import { pid } from "process";
import { Model, or } from "sequelize";
import Product from "../database/models/Product";

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
          "https://a.khalti.com/api/v2/epayment/initiate/",
          data,
          {
            headers: {
              Authorization: "Key 1014d18482e3486d8fb65a0185b9f683",
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
          console.error(
            "Khalti API error:",
            error.response?.data || error.message
          );
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
  async verifyTransaction(req: AuthRequest, res: Response): Promise<void> {
    const { pidx } = req.body;
    const userId = req.user?.id;
    if (!pidx) {
      res.status(400).json({
        message: "Please Provide pidx",
      });
      return;
    }
    const response = await axios.post(
      "https://a.khalti.com/api/v2/epayment/lookup/",
      { pidx },
      {
        headers: {
          Authorization: "Key 1014d18482e3486d8fb65a0185b9f683",
        },
      }
    );

    const data: TranscationVerificationResponse = response.data;
    console.log(data);
    if (data.status == TranscationStatus.Completed) {
      await Payment.update(
        {
          paymenttatus: "paid",
        },
        {
          where: {
            pidx: pidx,
          },
        }
      );
      res.status(200).json({
        message: "Payment verified sucessfully",
      });
    } else {
      res.status(401).json({
        message: "Payment is not Verified",
      });
    }
  }
  //customer side 
  async fetchMyOrders(req:AuthRequest,res:Response):Promise<void>{
    const userId = req.user?.id
    const orders = await Order.findAll({
      where :{
        userId
      },
      include : [
        {
          model : Payment
        }
      ]
    })
    if(orders.length > 0) {
      res.status(200).json({
        message : "order fetched sucessfully"
      })
  }else{
    res.status(404).json({
      message: "you havent ordered anything yet ..",
      data : []
    })
  }
}
async fetchOrderDetails(req:AuthRequest,res:Response):Promise<void>{
  const userId = req.user?.id
  const orderId = req.params.id
  const orderDetails = await Order.findAll({
    where :{
      orderId
    },
    include:[{
      model : Product
    }]
  })
  if(orderDetails.length > 0) {
      res.status(200).json({
        message : "orderDetails fetched sucessfully"
      })
  }else{
    res.status(404).json({
      message: "No any orderdetails of the id",
      data : []
    })
  }
}
async cancelMyOrder(req:AuthRequest,res:Response):Promise<void>{
  const userId = req.user?.id
  const orderId = req.params.id
  const order:any = await Order.findAll({
    where : {
      userId,
      id : orderId
    }
})
if(order.orderStatus === OrderStatus.Ontheway || order.OrderStatus==OrderStatus.preparation)
{
  res.status(200).json({
    message : "You cannot cancell order when ti ti sin on the eay or preparation "
  })
  return
}
await Order.update({ OrderStatus: OrderStatus.Cancelled },{
    where: {
      id: orderId,
    },
  });
  res.status(200).json({
    message : "Order Cancelled Successfully"

})
//customer side ends here

}
//Admin side Starts form  here 
// more admin api are to come and will move to frontend
// i will try more better frontend than the tutor

async changeOrderStatus(req:Request,res:Response):Promise<void>{
  const orderId = req.params.id
  const orderStatus:OrderStatus = req.body.orderStatus
  await Order.update({ orderStatus
  },{
      where: {
        id: orderId,
      },
    });

    res.status(200).json({
      message: 'Order Status Updated  Sucessfully'
    })

 
  
  }

  async changePaymentStatus(req:Request,res:Response):Promise<void>{
    
  }

}

export default new OrderController();

//  Today  was my  sisters b irthday so i cannot attend to complete the khalti integration i will defiently do it tommrow
// sorry but i learned about merchant account creation i will jump to integration  tomorrow i will complete my integration
// so sad to hear 17 deaths in protest . it will be worst tommrow just like bangladesh
// finally protest went successful as pm resigned but lots of people died in the process, as well as public properties were destroyed
// cheif justice will be head of the country as pm under control today
// i am loosing my battle i need some consistency
// khalti integraton done
// today i explored aws fellowship for 1 month 1 , 2,3 modules summmary as provided my teacher
// clebrated vanza birthday so sorry for today ,
// i though hosting will be tough but it was easy
// i need to work on day time
//  i am late so late painting work is being done i need to work less
// i want to know how can i fix this
// love you dashaii . happy dasaiii everybody 
// vanzi have gone to daizi i missing the noise they were creating
// hhi how are you 
// finally completed
// i need to do complete overview of the project form forntend to backend 
// form tommorw i will be doing 2 hours moring and 2 hours evening coding
// i need to do complete overview of the project form forntend to backend 
// form tommorw i will be doing 2 hours moring and 2 hours evening coding
//lets get back