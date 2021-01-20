if(process.env.NODE_ENV==='development'){
    require('dotenv').config()
    process.env.HTTPONLY=true
    process.env.SECURE=''
}
else{
    process.env.HTTPONLY=''
    process.env.SECURE=true
}

console.log('Variables de entorno configuradas')