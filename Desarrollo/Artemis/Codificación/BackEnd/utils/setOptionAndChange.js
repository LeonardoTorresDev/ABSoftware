const {unique,custom_response,error_response, custom_error_response}=require('./utils')

let setOptionAndChange=(res,option,mainStat,mainArray,checkStat,checkArray,mainObject,userId,arrayResponse)=>{

    let answer=arrayResponse[0]

    if(!unique(checkArray,userId)){
        checkArray.splice(checkArray.indexOf(userId),1)
        checkStat=checkArray.length
        answer=arrayResponse[1]
    }

    if(!unique(mainArray,userId)){
        mainArray.splice(mainArray.indexOf(userId),1)
        answer=arrayResponse[2]
    }
    else{
        mainArray.push(userId)
    }

    mainStat=mainArray.length

    if(option==='like'){
        mainObject.likes=mainStat
        mainObject.usersThatLiked=mainArray
        mainObject.dislikes=checkStat
        mainObject.usersThatDisliked=checkArray
    }
    else if(option==='dislike'){
        mainObject.likes=checkStat
        mainObject.usersThatLiked=checkArray
        mainObject.dislikes=mainStat
        mainObject.usersThatDisliked=mainArray
    }
    else{
        return custom_error_response(500,res,"Opcion no valida")
    }   

    mainObject.save((err,_)=>{
        if(err){return error_response(400,res,err)}
        return custom_response(res,answer)
    })
}

module.exports={
    setOptionAndChange
}