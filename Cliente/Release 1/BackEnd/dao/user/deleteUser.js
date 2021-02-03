const {delete_user}=require('../../helpers/user/delete_user')

let deleteUser=(req,res)=>{

    delete_user(req.user._id, req, res)
}

module.exports={
    deleteUser
}