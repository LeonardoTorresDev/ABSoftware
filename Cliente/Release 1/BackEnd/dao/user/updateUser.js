const User = require("../../models/user")
const cloudinary = require('cloudinary')
const bcrypt = require("bcrypt")
const fs = require('fs-extra');

const { error_response, custom_response, custom_error_response } = require("../../utils/utils")

let updateUser = async (req, res) => {

    let id = req.user._id

    User.findById(id, async (err, user)=>{
        if (err) { return error_response(400, res, err)}

        if(user==null) { return custom_error_response(400, res,"Usuario no encontrado")}   

        let body = req.body
    
        if (req.body.password) {
            body.password = bcrypt.hashSync(req.body.password, 10)
        }

        if(req.file != undefined)
        {
            const result = await cloudinary.v2.uploader.upload(req.file.path)
            console.log('Subido a cloudinary')

            //Logica para borrar imagen de cloudinary si el user.img_public_id existe
            if(user.img_public_id != null) { await cloudinary.v2.uploader.destroy(user.img_public_id); console.log('Borrada imagen')}
            
            //cambiar parametros
            user.profile_img_url = result.url
            user.img_public_id = result.public_id
        }

        if(body.nick_name){ user.nick_name = body.nick_name }
        if(body.artistic_name){ user.artistic_name = body.artistic_name }
        if(body.email){ user.email = body.email }

        user.save(async (err)=>{
            if (err) { return error_response(400, res, err)}

            if(req.file != undefined) { await fs.unlink(req.file.path); console.log('Imagen borrada de backend')}    

            custom_response(res, "Usuario actualizado con éxito")
        })
    })
}

module.exports = {
  updateUser,
}
