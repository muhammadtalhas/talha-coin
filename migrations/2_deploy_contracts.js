//2_deploy_contracts.js

//This would work if truffle didint suck and I had infinate money to test with. Unfortunetley, I dont.
//Instead Im creating seperate scripts for the token and the sale and doing manual injection of contract addresses

// const TalhaToken = artifacts.require("TalhaToken.sol");
// const TalhaTokenSale = artifacts.require("TalhaTokenSale.sol");

// module.exports = function(deployer) {
// 	deployer.deploy(TalhaToken, 1000000).then(() => {
// 		return deployer.deploy(TalhaTokenSale, TalhaToken.address, 1200000000000000);
// 	})
// }

//1200000000000000 = 0.0012 = ~5 usd