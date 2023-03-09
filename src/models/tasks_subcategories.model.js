const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const tasks_subcategories=db.define('tasks_subcategories',{
    subcategoryId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'subcategory_id'
    },
    taskId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'task_Id'
    }
},{
    timestamps:false
})
module.exports=tasks_subcategories