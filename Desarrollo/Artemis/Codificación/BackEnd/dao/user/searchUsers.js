const User = require("../../models/user")
const {error_response}=require('../../utils/utils')

let searchUsers=(req,res)=>{

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