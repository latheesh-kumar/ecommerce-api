let isEmpty =(value)=>{
    if(value == undefined || value == null || value == ''){
        return true
    }
    else {
        return false
    }
}
module.exports={
    isEmpty : isEmpty
}