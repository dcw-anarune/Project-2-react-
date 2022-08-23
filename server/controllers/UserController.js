const {user} = require('../models')

class UserController {

    static async getUser(req, res){
        try{
            let users = await user.findAll()

            res.json(users)
            
        }catch(err){
            res.json(err)
        }

    }

    static async createUser(req, res){
        try{
            const {name, no_hp, alamat} = req.body
            let resultUser = await user.create({
                name,no_hp, alamat
            })


            res.json(resultUser)
        

        }catch(err){
            res.json(err)
        }
        
    }


    static async updateUser (req, res){
        try{
            const id = +req.params.id
            const {name, no_hp, alamat} = req.body

            let result = await user.update({
                name,no_hp, alamat
            },{
                where: {id}
            })

            result[0] === 1 ?
            res.json({
                message:`id ${id} has update`
            }):
            res.json({
                message:`id ${id} not update`
            })

        }catch(err){
            res.json(err)
        }


    }

    static async deleteUser (req, res){
        try{
            const id = +req.params.id

            let result = await user.destroy({
                where: {id}
            })

            result === 1 ?
            res.json({
                message:`id ${id} deleted`
            }):
            res.json({
                message:`id ${id}  not deleted`
            })
            


        }catch(err){
            res.json(err)
        }

    }
}

module.exports = UserController;
