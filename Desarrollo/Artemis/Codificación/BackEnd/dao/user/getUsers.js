const User = require("../../models/user")
const {error_response,custom_response,custom_error_response}=require('../../utils/utils')

let getUsers=(req,res)=>{

    if(req.query.from<0){
        return custom_error_response(400,res,"From no debe ser un número negativo")
    }

    if(req.query.limit<0){
        return custom_error_response(400,res,"Limit no debe ser un número negativo")
    }

    let from=req.query.from || 0
    from = Number(from)

    let limit =req.query.limit || 0
    limit=Number(limit)

    User.find({})
        .skip(from)
        .limit(limit)
        .exec((err,users)=>{

            if(err){ return error_response(400, res, err) }

            if(users.length===0){ 
                return custom_response(res,"No se encontraron usuarios con los parametros de busqueda enviados")
            }

            res.send(users)
        })
}

module.exports={
    getUsers
}