const taskServices = require('../services/tasks.services')
const userServices = require('../services/users.services')


const newTask = async (req, res) => {
    try {
        const { uuid } = req.headers
        const id = await userServices.getIdByUuid(uuid)
        if (id === null) {
            res.status(404).json({
                msg: "Incorrect uuid or this user doesn't exist",
                uuid: uuid
            })
        } else {
            const { title, description, importance, categories, subcategories } = req.body
            const newTask = await taskServices.newTask({
                title,
                description,
                importance,
                userId: id
            })
            for (const element of categories) {
                await taskServices.relTaskCategories(newTask.id, element)
            }
            for (const element of subcategories) {
                await taskServices.relTaskSubcategories(newTask.id, element)
            }
            res.json(newTask)
        }
    } catch (error) {
        res.status(404).json(error)
    }
}
const getAllTasks = async (req, res) => {
    try {
        const { uuid } = req.headers
        const id = await userServices.getIdByUuid(uuid)
        if (id === null) {
            res.status(404).json({
                msg: "Incorrect uuid or this user doesn't exist",
                uuid: uuid
            })
        } else {
            const allTasks = await taskServices.getAll(id)
            res.json(allTasks)
        }
    } catch (error) {
        res.status(404).json(error)
    }
}
const checkTask = async (req, res) => {
    try {
        const { uuid } = req.headers
        const id = await userServices.getIdByUuid(uuid)
        if (id === null) {
            res.status(404).json({
                msg: "Incorrect uuid or this user doesn't exist",
                uuid: uuid
            })
        } else {
            const { taskId } = req.params
            const checked=await taskServices.checkTask(taskId,id)
            if (checked[0]===0) {
                
                res.status(400).json('Failed, 0 tasks afected')
            } else {
                res.json(checked)
            }
            
        }
    } catch (error) {
        res.status(404).json(error)
    }
}
const deleteTask=async (req,res)=>{
    // este controlador por el momento solo elimina la tarea pero deja las relaciones entre las categorias y subcategorias
    // algo que no debria pasar, es solucionable pero ya no habia tiempo JAJA
    try {
        const {uuid}=req.headers
        const id=await userServices.getIdByUuid(uuid)
        if (id===null) {
            res.status(404).json({
                msg:"Incorrect uuid or this user doesn't exist",
                uuid:uuid
            })
        }else{
            const { taskId } = req.params
            const deletedTask=await taskServices.deleteTask(taskId,id)
            res.json(deletedTask)
        }
    } catch (error) {
        res.status(404).json(error)
    }
}
module.exports = {
    newTask,
    getAllTasks,
    checkTask,
    deleteTask,
}