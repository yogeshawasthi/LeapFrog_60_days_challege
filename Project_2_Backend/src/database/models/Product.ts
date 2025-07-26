import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
}from 'sequelize-typescript'

@Table({
    tableName : 'products',
    modelName: 'Product',
    timestamps :  true

})
class Product extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id : string;

    @Column({
        type: DataType.STRING,
        allowNull : false    
    })
    declare productName : string
   
    @Column({
        type: DataType.STRING
    })
    declare productDescription:string

    @Column({
        type : DataType.STRING
    })

    declare productPrice: number
     @Column({
        type : DataType.STRING
    })
    declare productTotalStockQty: number

     @Column({
        type : DataType.STRING
    })
    declare productImageUrl: string
}

export default Product