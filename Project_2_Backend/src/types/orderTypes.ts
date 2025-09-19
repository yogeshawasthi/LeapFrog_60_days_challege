


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
    pidx: string,
   total_amount: number,
   status: TranscationStatus,
   transaction_id: string,
   fee: number,
   refunded: false

}

enum TranscationStatus{
    Completed = 'completed',
    Refunded = 'refunded',
    Pending = 'pending',
    Initiated = 'initiated'
}