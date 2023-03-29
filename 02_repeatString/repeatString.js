const repeatString = function(string, num) {
    let repeater = "";
    for (i = 1; i <= num; i++){
        repeater += string;
    }
    return repeater;
};

// Do not edit below this line
module.exports = repeatString;
