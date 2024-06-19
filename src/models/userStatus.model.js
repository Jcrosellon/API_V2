import sequelize from "../config/connect.db.js";
import { Model,DataTypes } from "sequelize";

class UserStatus extends Model{};
UserStatus.init({
    UserStatus_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    UserStatus_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    UserStatus_descriptions:{
        type:DataTypes.STRING,
        allowNull:true,
    }
},{sequelize,modelName:"User_Status"});
export default UserStatus;