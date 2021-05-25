const TalhaTokenSale = artifacts.require("TalhaTokenSale.sol");

module.exports = function(deployer) {
	deployer.deploy(TalhaTokenSale,'0x3dbc4E75ffCEeB080691b889523fB458D77318C2',1200000000000000);
}