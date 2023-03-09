const {Router}=require('express')
const {register,logger,deletUser}=require('../controllers/users.controllers')

const router=Router()
router.post('/api/v1/users',register)

router.get('/api/v1/users/login',logger)

router.delete('/api/v1/users',deletUser)

module.exports=router