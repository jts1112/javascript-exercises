const repeatString = function(string, repeats) {
    if(repeats < 0 ) {
        return "ERROR"
    }

    let returnedString = "";
    for(let i = 0; i <repeats;i++) {
        returnedString+=string
    }
    return returnedString
};

// Do not edit below this line
module.exports = repeatString;
