const reverseString = function(inputString) {
    let reversed = "";
    for (let i = 0; i < inputString.length;i++) {
        reversed = inputString.charAt(i) + reversed
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
