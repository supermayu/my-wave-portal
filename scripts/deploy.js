// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

/*async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});*/

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();
  const waveContract = await hre.ethers.getContractFactory("WavePortal");
  const wavePortal = await waveContract.deploy();

  console.log("Deploying contracts with account:", deployer.address);
  console.log("Account balancce:", accountBalance.toString());
  console.log("Contract deployed to", wavePortal.address);
  console.log("Contract deployed by:", deployer.address);
}

const runMain = async () => {
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}

runMain();


//deploy address: 0x1BD57B24a7B2d74c48aaaf48DeEDa4CbDFe20955
