require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.PROD_ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
