const Folder=require('../../models/work_folder');
const User=require('../../models/user');
const {error_response, custom_error_response, unique_with_name, custom_response}=require('../../utils/utils')

function create_folder(req, res)
{
    User.findOne({nick_name: req.user.nick_name})
    .populate('folders')
    .exec(function (err, user){

        if(err){ return error_response(400, res, err) }

        if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

        if(!unique_with_name(user.folders, req.body.name)) { return custom_error_response(400, res, "Folder ya existe") }
        
        let folder=new Folder({
            owner: user._id,
            name: req.body.name      
        })

        folder.save((err)=>{
            if(err){ return error_response(400, res, err) }

            user.folders.push(folder)

            user.save((err)=>{
                if(err){ return error_response(400, res, err) }

                return custom_response(res, "Folder creado con exito")
            })
        })
    })
}

module.exports={create_folder}
