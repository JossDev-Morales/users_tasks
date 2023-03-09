const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Categories=db.define('categories',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(20),
        unique:true
    }
},{
    timestamps:false
})
module.exports=Categories