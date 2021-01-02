
function error_response(code, res, err)
{
    res.status(code).json({
        ok: false,
        err
    })
}

function custom_error_response(code, res, text)
{
    return res.status(code).json({
        ok:false,
        error: text
    })
}

module.exports={error_response, custom_error_response}