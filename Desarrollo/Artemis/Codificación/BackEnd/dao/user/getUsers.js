const User = require("../../models/user")
const {error_response}=require('../../utils/utils')

let getUsers=(req,res)=>{

    let from=req.query.from || 0;
    from = Number(from);

    let limit =req.query.limit || 0;
    limit=Number(limit);

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