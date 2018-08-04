var removeFromArray = function(inputArray) {

let outputArray = inputArray;

for(i=1;i<arguments.length;i++) {

    let index = outputArray.indexOf(arguments[i]);

    if(index > -1) {

        outputArray.splice(index,1);

    }

}

return outputArray;



}

module.exports = removeFromArray
