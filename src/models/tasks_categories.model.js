const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Tasks_categories=db.define('tasks_categories',{
    taskId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'task_id'
    },
    categoryId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'category_id'
    }
},{
    timestamps:false
})
module.exports=Tasks_categories