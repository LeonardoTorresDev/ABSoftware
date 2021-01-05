const User=require('../../models/user');
const {error_response, custom_error_response}=require('../../utils/utils')

function get_folders(req, res){

    User.findOne({nick_name: req.user.nick_name})
    .populate('folders')
    .exec(function (err, user){

        if(err){ return error_response(400, res, err) }

        if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

        res.send(user.folders)
    })
}

module.exports={get_folders}