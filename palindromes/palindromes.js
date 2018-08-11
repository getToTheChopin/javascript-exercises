var palindromes = function(inputPhrase) {

    let cleanInput ="";
    let answer = false;
    let reverseInput="";

    cleanInput = removePunctuation(inputPhrase);
    reverseInput = reverseString(cleanInput);

    if(cleanInput === reverseInput) {
        answer = true;
    }

    return answer;
}

function removePunctuation(input){
    let answer = "";

    let stringArray = input.split("");

    for(i=0;i<stringArray.length;i++) {

        if(stringArray[i] === "!" || stringArray[i] === "." || stringArray[i] === ",") {

            stringArray[i] = " ";

        }

    }

    answer = stringArray.join("").toUpperCase();

    answer = answer.replace(/\s/g,'');

    return answer;
}

function reverseString(input){

    let stringArray = input.split("");
    let reverseStringArray = [];

    for(i=0;i<stringArray.length;i++) {
        reverseStringArray[i] = stringArray[stringArray.length-i-1];
    }

    let result = reverseStringArray.join("");

    return result;
}

module.exports = palindromes
