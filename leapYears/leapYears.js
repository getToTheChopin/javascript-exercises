var leapYears = function(inputYear) {

    let outputBoolean = false;

    if(inputYear % 4 === 0){

        outputBoolean = true;

        if(inputYear % 100 === 0 && inputYear % 400 !== 0) {
            outputBoolean = false;
        }

    }
    
    return outputBoolean;
}

module.exports = leapYears
