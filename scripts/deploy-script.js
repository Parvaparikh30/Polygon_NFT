const hre = require("hardhat");
const fs = require('fs');

async function main() {
    const NFT = await hre.ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log("NFT deployed to:", nft.address);
    const URL = "https://ipfs.io/ipfs/Qmdzkn5HEAhvkKhKrwQCmDqs3URLDUdT7Kzn3i3ottCkiK?filename=Pug.json"
    const add = nft.address;
    const contract = NFT.attach(add);
    await (contract.createCollectible(URL))
    
}
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});