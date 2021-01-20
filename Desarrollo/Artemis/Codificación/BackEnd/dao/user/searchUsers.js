const User = require("../../models/user")
const {error_response,custom_error_response}=require('../../utils/utils')

let searchUsers=(req,res)=>{
    if(!req.params.term){
        return custom_error_response(400,res,"No se ha mandado ninguna busqueda")
    }
    if(req.params.term.length>250){
        return custom_error_response(400,res,"La busqueda excede el numero de caracteres permitidos")
    }

    let term=req.params.term

    let regex=new RegExp(term,'i')

    User.find({nick_name: regex})
        .populate('folders','name')
        .exec((err,users)=>{
            if(err){ return error_response(400, res, err) }
            res.send(users)
        })
}

module.exports={
    searchUsers
}