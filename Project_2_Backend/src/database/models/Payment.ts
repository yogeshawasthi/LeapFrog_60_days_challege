import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
}from 'sequelize-typescript'

@Table({
    tableName : 'payments',
    modelName: 'Payment',
    timestamps :  true

})
class Payment extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id : string;

    @Column({
        type: DataType.ENUM('COD','khalti','esewa'),
        allowNull : false    
    })
    declare paymentMethod : string 
    
    @Column({
        type: DataType.ENUM('paid','unpaid',),
        defaultValue: 'unpaid'
    })
    declare orderStatus : string   

    @Column({
        type: DataType.STRING,
    })
    declare pidx : string   
   
}

export default Payment