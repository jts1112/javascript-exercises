const removeFromArray = function(inputArray, ...args) {
    let returnedArray = new Array();
    
    inputArray.forEach(element => {
        if (!args.includes(element)) {
            returnedArray.push(element)
        }
    });

    return returnedArray;
};


// Do not edit below this line
module.exports = removeFromArray;
