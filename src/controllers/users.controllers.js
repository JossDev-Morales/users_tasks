const userServices = require("../services/users.services")
const {v4}=require('uuid')

const register=async (req,res)=>{
    const {password,mail,username}=req.body
    try {
        const theCreatedUser=await userServices.newUser({username})
        try {
            const theCreatedCredential=await userServices.newCredential({password,mail,userId: theCreatedUser.id,uuid:v4()})
            res.json(theCreatedCredential)
        } catch (error) {
        // aqui el codigo es un poco ambiguo JAJA, si al crear la credencial algo sale mal
        // el usuario ya estaria creado aunque la credencial no
        // por eso eliminamos el usuario en caso de que la credencial devuelva un error.
            await userServices.deletUser(theCreatedUser.id)
            res.status(404).json(error)
        }
    } catch (error) {
        res.status(404).json(error)
    }
    
}
const logger=async (req,res)=>{
    try {
        const {mail,password}=req.body
        const credential=await userServices.getCredentialByMail(mail)
        if (credential===null) {
            res.status(404).json({
                msg:"No users with this mail",
                mail:mail
            })
        }else if(credential.password!==password){
            res.status(404).json({
                msg:"wrong password for the user with the next mail.",
                mail:mail,
                wrongPassword:password
            })
        }else{
            res.json(credential)
        }
    } catch (error) {
        res.status(404).json(error)
    }
}
const deletUser=async (req,res)=>{
    try {
        const {uuid}=req.headers
        const id=await userServices.getIdByUuid(uuid)
        if (id===null) {
            res.status(404).json({
                msg:"Incorrect uuid or this user doesn't exist",
                uuid:uuid
            })
        }else{
            const userDeleted=await userServices.deletUser(id)
            res.status(204).json(userDeleted)
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports={
    register,
    logger,
    deletUser,
}