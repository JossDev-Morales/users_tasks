const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Subcategories=db.define('subcategories',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        unique:true
    },
    categoryId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'category_id'
    }
},{
    timestamps:false
})
module.exports=Subcategories