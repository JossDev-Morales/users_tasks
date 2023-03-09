const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Importance=db.define('importance',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(20)
    }
},{
    timestamps:false
})
module.exports=Importance