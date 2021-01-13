const {delete_work_h} =  require('../../helpers/works/delete_work_h')
const { custom_response } = require('../../utils/utils')


function deleteWork (req, res)
{
    delete_work_h(req, res)

    custom_response(res, "Obra borrada con exito")
}

module.exports = {deleteWork}

