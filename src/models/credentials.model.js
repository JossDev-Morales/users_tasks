const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Credentials=db.define('credentials',{
    mail:{
        type:DataTypes.STRING(30),
        primaryKey:true,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'user_id'
    },
    uuid:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps: true,
    updatedAt:false
})
module.exports=Credentials