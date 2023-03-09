const Credentials = require("../models/credentials.model")
const Users = require("../models/users.model")

class userServices {
    static async getIdByUuid(uuid){
        try {
            const credential=await Credentials.findOne({where:{uuid:uuid}})
            if (credential===null) {
                return credential
            }else{
                return credential.userId
            }
        } catch (error) {
            throw error
        }
    }
    static async getCredentialByMail(mail){
        try {
            const credentials=await Credentials.findByPk(mail,{
                attributes:{exclude:['userId','createdAt']},
                include:{
                    model:Users
                }
            })
            return credentials
        } catch (error) {
            throw error
        }
    }
    static async newCredential(credential){
        try {
            const theCreatedCredential=await Credentials.create(credential)
            return theCreatedCredential
        } catch (error) {
            throw error
        }
    }
    static async newUser(user){
        try {
            const theCreatedUser=await Users.create(user)
            return theCreatedUser
        } catch (error) {
            throw error
        }
    }
    static async deletUser(id){
        
        await Credentials.destroy({
            where:{userId:id}
        })
        return await Users.destroy({
            where:{id:id}
        })
    }
}
module.exports=userServices