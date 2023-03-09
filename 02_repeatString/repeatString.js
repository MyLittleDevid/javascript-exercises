const repeatString = function(world, num) {
    let repeatedString="";
    if(num >=0){
        for(let i =0;i<num;i++){
            repeatedString+= world;
        }
        return repeatedString   
    }
    else{
        repeatedString="ERROR";
        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
