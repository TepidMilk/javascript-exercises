const repeatString = function(string, num) {
    let repeater = "";
    if (num < 0){
        return "ERROR"
    }
    for (i = 1; i <= num; i++){
        repeater += string;
    }
    return repeater;
}
// Do not edit below this line
module.exports = repeatString;
