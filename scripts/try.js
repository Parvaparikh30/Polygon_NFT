const hre = require("hardhat");


 async function main(){
    console.log("1")
    const NFT = await hre.ethers.getContractFactory("NFT");
    //const WALLET_ADDRESS = "0xD59fcF0EaC5946b8a1fB12e6F83eAC74F2688bc2"
    const CONTRACT_ADDRESS = "0x3C54975f6f370c628b73933b44a83725d2790E89"
    //const URI = "https://ipfs.io/ipfs/Qmd9MCGtdVz2miNumBHDbvj8bigSgTwnr4SbyH6DNnpWdt?filename=0-PUG.json"
    const contract = NFT.attach(CONTRACT_ADDRESS);
    console.log(contract)
 }

