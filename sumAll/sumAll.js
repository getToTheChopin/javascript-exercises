var sumAll = function(num1,num2) {

    let outputNum = 0;
    let startingNum = '';
    let endingNum = '';

    if(typeof num1 !== "number" || typeof num2 !== "number") {
        outputNum = 'ERROR';
        return outputNum;
    }

    if(num1<0 || num2 <0) {
        outputNum = 'ERROR';
        return outputNum;
    }

    if(num1 <= num2) {
        startingNum = num1;
        endingNum = num2;
    } else {
        startingNum = num2;
        endingNum = num1;
    }

    for (i=startingNum; i<=endingNum; i++) {
        outputNum += i;
    }

    return outputNum;
}

module.exports = sumAll
