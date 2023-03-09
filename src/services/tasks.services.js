const tasksModel=require('../models/tasks.model')
const tasksCategories=require('../models/tasks_categories.model')
const tasksSubcategories=require('../models/tasks_subcategories.model')
const categories=require('../models/categories.model')
const subcategories=require('../models/subcategories.model')

class tasksServices {
    static async newTask(task){
        const newTask=await tasksModel.create(task)
        return newTask
    }
    static async relTaskCategories(taskId,categoryId){
        const newRelation=await tasksCategories.create({taskId,categoryId})
        return newRelation
    }
    static async relTaskSubcategories(taskId,subcategoryId){
        const newRelation=await tasksSubcategories.create({taskId,subcategoryId})
    }
    static async getAll(id){
        const allTasks=await tasksModel.findAll({
            where:{userId:id},
            include:[{
                model:categories,
                through:tasksCategories,
                attributes:['name','id']
            },
            {
                model:subcategories,
                through:tasksSubcategories,
                attributes:['name','id'],
                include:categories
            }]
        })
        return allTasks
    }
    static async checkTask(id,userId){
        const checked=await tasksModel.update({status:true},{
            where:{id:id,userId:userId}
        })
        return checked
    }
    static async deleteTask(id,userId){
        const deletedTask=await tasksModel.destroy({
            where:{id:id,userId:userId}
        })
        return deletedTask
    }
}
module.exports=tasksServices

