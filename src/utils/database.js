const {Sequelize}=require('sequelize')

const db= new Sequelize({
    database:'users_tasks',
    host:'localhost',
    dialect:'postgres',
    port:5432,
    username:'postgres',
    password:'keyjo2803'
})
module.exports=db