import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
}from 'sequelize-typescript'

@Table({
    tableName : 'Carts',
    modelName: 'Cart',
    timestamps :  true

})
class Cart extends Model{
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
    declare Quantity : number   
   
}

export default Cart