const User = require("../../models/user")
const cloudinary = require('cloudinary')
const underscore = require("underscore")
const bcrypt = require("bcrypt")

const { error_response, custom_response, custom_error_response } = require("../../utils/utils")

let updateUser = async (req, res) => {
    let id = req.user._id

    let body = underscore.pick(req.body, ["nick_name", "artistic_name", "email"])

    if (req.body.password) {
        body.password = bcrypt.hashSync(req.body.password, 10)
    }

    const result = await cloudinary.v2.uploader.upload(req.file.path)

    User.findById(id, async (err, user)=>{
        if (err) { return error_response(400, res, err)}

        if(user==null) { return custom_error_response(400, "Usuario no encontrado")}

        //Logica para borrar imagen de cloudinary si el user.img_public_id existe
        if(user.img_public_id != null) { await cloudinary.v2.uploader.destroy(user.img_public_id)}
        
        //cambiar parametros
        user.profile_img_url = result.url
        user.img_public_id = result.public_id

        user.save(async (err)=>{
            if (err) { return error_response(400, res, err)}

            await fs.unlink(req.file.path)

            custom_response(res, "Usuario actualizado con éxito")
        })
    })
}

module.exports = {
  updateUser,
}
