require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goeril: {
      url: "https://eth-goerli.g.alchemy.com/v2/bkOtpzI6wBHmeEw33POdtekRoleybnVQ",
      accounts: ["0decf618a0dd6591eb93187f238c732785df03b2487404937b821450dbc720fc"]
    },
  },
};
