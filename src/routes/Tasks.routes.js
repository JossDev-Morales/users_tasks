const {Router}=require('express')
const {newTask,getAllTasks, checkTask, deleteTask}=require('../controllers/tasks.controllers')
const router=Router()

router.post('/api/v1/tasks',newTask)

router.get('/api/v1/tasks',getAllTasks)

router.put('/api/v1/tasks/:taskId/check',checkTask)

router.delete('/api/v1/tasks/:taskId',deleteTask)
module.exports=router