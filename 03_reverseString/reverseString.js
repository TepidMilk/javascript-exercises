const reverseString = function(string) {
    let text = string
    let reversed = ""
    for (i = 1; i < text.length + 1; i++){
        reversed += text.substr(-i, 1);
    }
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
