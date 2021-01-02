const Folder=require('../../models/work_folder');
const User=require('../../models/user');
const {error_response, custom_error_response}=require('../../utils/utils')

function create_folder(req, res)
{
    User.findOne({nick_name: req.query.nick_name}, function(err,user){

        if(err){ return error_response(400, res, err) }

        if(user==null){ return custom_error_response(400, res, "Usuario no encontrado") }

        folder.save((err)=>{
            if(err){ return error_response(400, res, err) }

            let folder=new Folder({
                name: req.body.name      
            })

            user.folders.push(folder)

            user.save((err)=>{
                if(err){ return error_response(400, res, err) }

                res.send("Folder con nombre: " + folder.name + " creado en el usuario con nickname: " + user.nick_name)
            })
        })
    })
}

module.exports={create_folder}
