


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
   refunded: boolean

}

 export enum TranscationStatus{
    Completed = 'Completed',
    Refunded = 'Refunded',
    Pending = 'Pending',
    Initiated = 'Initiated'
}
//hi
// the
/// aja paral boke maile
// finally my new phone ,, Nothing 3a is here with me