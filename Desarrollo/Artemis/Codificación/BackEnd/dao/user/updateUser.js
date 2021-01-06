const User = require("../../models/user")
const underscore = require("underscore")
const bcrypt = require("bcrypt")

const { error_response, custom_response } = require("../../utils/utils")

let updateUser = (req, res) => {
    let id = req.user._id

    let body = underscore.pick(req.body, ["nick_name", "artistic_name", "email"])

    if (req.body.password) {
        body.password = bcrypt.hashSync(req.body.password, 10)
    }

    User.findByIdAndUpdate(id, body, (err, _) => {

        if (err) { return error_response(400, res, err)}
        custom_response(res, "Usuario actualizado con éxito")
    })
}

module.exports = {
  updateUser,
}
