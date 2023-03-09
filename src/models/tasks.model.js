const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Tasks=db.define('tasks',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING(30),
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    importanceId:{
        type:DataTypes.INTEGER,
        defaultValue:1,
        field:'importance_id'
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'user_id'
    }
})
module.exports=Tasks