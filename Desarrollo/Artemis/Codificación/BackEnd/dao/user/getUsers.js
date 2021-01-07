const User = require("../../models/user")
const {error_response,custom_error_response}=require('../../utils/utils')

let getUsers=(req,res)=>{

    if(req.query.from<0){
        custom_error_response(400,res,"From no debe ser un número negativo")
    }

    if(req.query.limit<0){
        custom_error_response(400,res,"Limit no debe ser un número negativo")
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

            res.send(users)

        })

}

module.exports={
    getUsers
}