import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull,
} from 'sequelize-typescript'

@Table({
    tableName: 'users',
    modelName: 'User',
    timestamps: true
})
class User extends Model {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare username: string;

    @Column({
       type: DataType.ENUM('customer','admin'),
       defaultValue: "customer",
       allowNull: false
   })
   declare role : string


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare password: string;
}

export default User;