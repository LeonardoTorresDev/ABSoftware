const {unique,custom_response,error_response}=require('./utils')

let setOption=(res,mainStat,mainArray,mainObject,userId,arrayResponse)=>{

    let answer=arrayResponse[0]
    if(!unique(mainArray,userId)){
        mainArray.splice(mainArray.indexOf(userId),1)
        answer=arrayResponse[1]
    }
    else{
        mainArray.push(userId)
    }
    mainStat=mainArray.length

    mainObject.reports=mainStat
    mainObject.usersReport=mainArray

    mainObject.save((err,_)=>{
        if(err){ return error_response(400,res,err) }
        return custom_response(res,answer)
    })
}

module.exports={
    setOption
}