const removeFromArray = function(array) {
    let removed = []
    const args = Array.from(arguments)
    for (i = 0; i < array.length; i++){
        if (!args.includes(array[i])){
            removed.push(array[i]);
        }
    }
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
