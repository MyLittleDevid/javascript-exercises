const reverseString = function(word) {
    let reversedString="";
    let i= word.length-1;

    for(;i>=0;i--){
        reversedString+=word.charAt(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
