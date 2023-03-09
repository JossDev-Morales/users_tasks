const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Users=db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true       
    },
    username:{
        type:DataTypes.STRING(30),
        allowNull:false,
        unique:true,   
    },
    name:{
        type:DataTypes.STRING(30),
        allowNull:true,
    },
    lastname:{
        type:DataTypes.STRING(30),
        allowNull:true
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    stars:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    icon:{
        type:DataTypes.STRING(50),
        defaultValue:'path__base'
    }
})
module.exports=Users