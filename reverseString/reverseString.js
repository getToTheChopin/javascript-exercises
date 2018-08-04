var reverseString = function(inputString) {

    let strArray = inputString.split('');
    let strArrayReverse = [];
    let outputString ='';

    for(i=0;i<strArray.length;i++) {
        strArrayReverse[i] = strArray[strArray.length-(i+1)];
    }

    outputString = strArrayReverse.join('');

    return outputString;
}

module.exports = reverseString