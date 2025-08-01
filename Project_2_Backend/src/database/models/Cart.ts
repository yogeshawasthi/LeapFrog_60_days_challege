import { NUMBER } from 'sequelize';
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
        type: DataType.INTEGER,
        allowNull : false    
    })
    declare quantity : number;

}

export default Cart