require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  compilers: {
    solc: {
      version: "^0.5.16", //Believe it or not this aint do shit. idk y. still uses 0.5.17. idc enough to figure out why
    }
  },
  networks: {
    development: {
     host: "127.0.0.1",     
     port: 7545, //geth ui and geth cli have different ports. go figure.            
     network_id: "*",      
    },
    rinkeby: {
      provider: () => { 
        return new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`);
      }, 
      network_id: 4,
      gas: 5000000,
      gasPrice:25000000000,
      from: process.env.FROM_ACCOUNT
    },
    mainnet: {
      provider: () => { 
        return new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`);
      }, 
      network_id: 1,
      confirmations: 2,//Worked well in infura
      gas: 800000,
      gasPrice: 36000000000,
      from: process.env.FROM_ACCOUNT
    }
  },
  db: {
    enabled: false
  }
};
