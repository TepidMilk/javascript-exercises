const leapYears = function(years) {
    if (years % 4 != 0){
        return false;
    }else if (years % 100 == 0 && years % 400 != 0){
        return false;
    }else return true;
};

// Do not edit below this line
module.exports = leapYears;
