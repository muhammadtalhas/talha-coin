const TalhaToken = artifacts.require("TalhaToken.sol");

module.exports = function(deployer) {
	deployer.deploy(TalhaToken, 1000000);
}