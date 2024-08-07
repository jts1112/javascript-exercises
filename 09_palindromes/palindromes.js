const palindromes = function (string) {
    let string1 = string.replace(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    string1 = string1.toLowerCase();
    for (let i = 0 ; i < Math.floor(string1.length / 2) ; i++) {
        let rightTracker = string1.charAt(string1.length -1 - i);
        if(string1.charAt(i) != rightTracker) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
