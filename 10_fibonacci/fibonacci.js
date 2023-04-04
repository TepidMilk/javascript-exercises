const fibonacci = function(n) {
    let fibSequence = [1, 1]
    if (n < 0){
        return "OOPS"
    }
    for (i = 1; i < n - 1; i++){
        fibSequence.push(fibSequence[i] + fibSequence[i-1])
    }
    
    return fibSequence.pop()
};

console.log(fibonacci(-5))

// Do not edit below this line
module.exports = fibonacci;
