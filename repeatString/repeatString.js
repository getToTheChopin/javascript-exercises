var repeatString = function(inputString,num) {
    let outputString = '';

    if(num<0) {

        outputString = 'ERROR';

    }
    
    for(i=0;i<num;i++) {
        outputString += inputString;
    }

    return outputString;

}

module.exports = repeatString
