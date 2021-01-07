let sendCookie=(res,name,token)=>{

    return res.cookie(name,token,{
        maxAge: process.env.EXPIRATION_TOKEN,
        secure: process.env.SECURE,
        httpOnly: process.env.HTTPONLY,
        sameSite: 'None'
    })

}

module.exports={
    sendCookie
}