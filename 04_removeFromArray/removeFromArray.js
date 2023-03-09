const removeFromArray = function(num,...numEliminar) {
    const numLength= num.length;
    const numEliminarLength = numEliminar.length;

    for(i=0;i<numLength;i++){
        for(j=0;j<numEliminarLength;j++){
            if(num[i] === numEliminar[j]){
                num.splice(i,1);
                i--;
            }
        }
    }
    return num;
};

// Do not edit below this line
module.exports = removeFromArray;
