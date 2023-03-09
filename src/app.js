const express=require('express')
const morgan=require('morgan')
const cors=require('cors')
const PORT=3000
const db=require('./utils/database')
const initModels=require('./models/initModels')
const usersRoutes=require('./routes/Users.routes')
const tasksRoutes=require('./routes/Tasks.routes')
initModels()

db.authenticate()
    .then(res=>console.log('Auth db')).catch(res=>console.log('auth db failed'))
db.sync()
    .then(res=>console.log('sync db')).catch(res=>console.log('sync db failed'))

const app=express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(usersRoutes)
app.use(tasksRoutes)


app.listen(PORT,()=>{
    console.log('opened at '+PORT);
})