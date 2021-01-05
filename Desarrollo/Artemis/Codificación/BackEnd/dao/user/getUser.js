const User = require("../../models/user")
const {error_response, custom_error_response}=require('../../utils/utils')

let getUser=(req,res)=>{

    let nick_name=req.query.nick_name

    User.findOne({nick_name: nick_name})
        .populate('folders','name')
        .exec((err,user)=>{

            if(err){ return error_response(400, res, err) }

            if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

            res.send(user)
        })

}

module.exports={
    getUser
}