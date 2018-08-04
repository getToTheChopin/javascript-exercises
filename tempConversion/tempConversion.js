var ftoc = function(inputF) {

  let outputC = 0;

  outputC = (inputF - 32) / 1.8;
  outputC = Math.round(outputC * 10) / 10;

  return outputC;
  
}

var ctof = function(inputC) {
  
  let outputF = 0;

  outputF = inputC * 1.8 + 32;
  outputF = Math.round(outputF * 10) / 10;

  return outputF;

}

module.exports = {
  ftoc,
  ctof
}
