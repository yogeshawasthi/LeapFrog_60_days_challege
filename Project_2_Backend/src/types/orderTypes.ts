


export interface OrderData{
    phoneNumber : string,
    shippingAddress : string,
    totalAmount : number,
    paymentDetails : {
        paymentMethod : PaymentMethod,
        paymentStatus? : string,
        pidx?: string
    },
    items : OrderDetails[]
}

export interface OrderDetails{
    quantity : number,
    productId : string
}

 export enum PaymentMethod{
    COD = 'cod',
    Khalti = 'khalti'
}

enum PaymentStatus{
    paid = 'paid',
    unpaid = 'unpaid'
}

export interface khaltiResponse{
    pidx : string,
    payment_url : string,
    expires_at : Date | string,
    expires_in : number,
    user_fee : number
}

export interface TranscationVerificationResponse{
     "pidx": string,
   "total_amount": 1000,
   "status": "Completed",
   "transaction_id": "GFq9PFS7b2iYvL8Lir9oXe",
   "fee": 0,
   "refunded": false

}