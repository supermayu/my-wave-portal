const hre = require("hardhat");

const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();

    console.log("Contract added to:", waveContract.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());

    //テスト一回目
    let waveTxn = await waveContract.wave("A wave!");
    await waveTxn.wait();
    const [_, randomPerson] = await hre.ethers.getSigners();

    //テスト二回目
    waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
    await waveTxn.wait();

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);
}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
};

runMain();