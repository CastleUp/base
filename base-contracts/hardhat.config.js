require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

module.exports = {
  solidity: "0.8.28",
  namedAccounts: {
    deployer: {
      default: 0, // первый аккаунт из кошелька
    },
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    base: {
      url: "https://mainnet.base.org", // Base mainnet
      accounts: [process.env.PRIVATE_KEY], // твой приватный ключ
    },
    baseGoerli: {
      url: "https://goerli.base.org", // Base testnet
      accounts: [process.env.PRIVATE_KEY],
    },
    baseSepolia: {
      url: "https://sepolia.base.org", // RPC Base Sepolia
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
