const Credentials=require('./credentials.model')
const Users=require('./users.model')
const Tasks=require('./tasks.model')
const Importance=require('./importance.model')
const Categories=require('./categories.model')
const Subcategories=require('./subcategories.model')
const TasksCategories=require('./tasks_categories.model')
const TasksSubcategories=require('./tasks_subcategories.model')

const initModel=()=>{

    Users.hasOne(Credentials)
    Credentials.belongsTo(Users,{foreignKey:'userId'})

    Users.hasMany(Tasks)
    Tasks.belongsTo(Users,{foraignKey:'userId'})

    Importance.hasMany(Tasks)
    Tasks.belongsTo(Importance,{foreignKey:'importanceId'})

    Tasks.belongsToMany(Categories,{ through:TasksCategories })
    Categories.belongsToMany(Tasks,{ through:TasksCategories })

    Tasks.belongsToMany(Subcategories,{ through:TasksSubcategories })
    Subcategories.belongsToMany(Tasks,{ through:TasksSubcategories })

    Categories.hasMany(Subcategories)
    Subcategories.belongsTo(Categories,{foreignKey:'categoryId'})
}
module.exports=initModel