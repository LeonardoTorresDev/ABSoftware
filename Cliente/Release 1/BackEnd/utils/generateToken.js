const jwt=require('jsonwebtoken')

const generateToken=(userDB)=>{

    let token=jwt.sign(
        {user:userDB},
        process.env.SEED,
        {expiresIn: process.env.EXPIRATION_TOKEN}
    )
    
    return token 
}

module.exports={
    generateToken
}