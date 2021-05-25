//This Dosent work lol

var TalhaToken = artifacts.require("./TalhaToken.sol");

//const TalhaTokenInstance = await TalhaToken.new();
//const gasEstimate = await TalhaTokenInstance.createInstance.estimateGas();

TalhaToken.new().then(TalhaTokenInstance => {return TalhaTokenInstance.createInstance.estimateGas()}).then(gasEstimate => console.log(gasEstimate)).catch(()=> console.log('oh no'))

//console.log(gasEstimate)
