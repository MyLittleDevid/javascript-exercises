const sumAll = function(start, end) {
    let sum= 0;

    if(typeof start !== 'number' || typeof end !=='number'){
        return "ERROR";
    }
    else{
        if(start< 0 || end < 0){
            return "ERROR";
        }
        else{
            if(start < end){
                for(;start<=end;start++){
                    sum+=start;
                }
                return sum;

            }
            else if(start > end){
                for(;end <= start;end++){
                    sum+=end;
                }
                return sum;
            }
            else {
                sum = start + end;
                return sum;
            }
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
