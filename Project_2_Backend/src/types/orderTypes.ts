


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