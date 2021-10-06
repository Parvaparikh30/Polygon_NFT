
const hre = require("hardhat");


async function main() {
    console.log("1")
    const NFT = await hre.ethers.getContractFactory("NFT");
    const WALLET_ADDRESS = "0xD59fcF0EaC5946b8a1fB12e6F83eAC74F2688bc2"
    const CONTRACT_ADDRESS = "0x5652121B15E69381f6a0f1F5CD8DC7981Da365Ef"
    const URI = "https://ipfs.io/ipfs/Qmd9MCGtdVz2miNumBHDbvj8bigSgTwnr4SbyH6DNnpWdt?filename=0-PUG.json"
    const contract = NFT.attach(CONTRACT_ADDRESS);
    console.log(contract)
    await contract.createCollectible(URI).then((txn) => {
        // Log Txn
        console.log(txn.hash)
        return(txn)
    });

}

