const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");

// function sleep(ms)
//  {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

async function main() {
    

    // signers = await ethers.getSigners();
    signers = await ethers.getSigners();
    user1= signers[0];
    owner = signers[1]
    relayer = signers[2];
    const usdt = "0xFF951459631294B9405B5fEd43BE700cd2B4dB82"

    const USDT = await ethers.getContractFactory("USDT");
      const usdt2 = await USDT.attach(usdt);
    //   await usdt.deployed();
      console.log("usdt.address: ", user1.address, owner.address, relayer.address);

      const callData = "0xa9059cbb00000000000000000000000042783c38d4f1c211c0e3ba76b052cc7a8633105900000000000000000000000000000000000000000000021e19e0c9bab2400000"
    const data = {
        nonce: 1,                 // get from contract
        verifyingAddress: usdt,
        chainId: "80001",
            callData : "0xa9059cbb00000000000000000000000042783c38d4f1c211c0e3ba76b052cc7a8633105900000000000000000000000000000000000000000000021e19e0c9bab2400000"
    }
    
         
    const message = await ethers.utils.solidityKeccak256(["uint256", "address", "uint256", "bytes"], [data.nonce, data.verifyingAddress, data.chainId, data.callData])
    const messageHash = await ethers.utils.arrayify(message)
    const sig = await owner.signMessage(messageHash);
 
    const spli = await ethers.utils.splitSignature(sig);
    // await usdt.mint(owner.address , 100000)
  
   console.log("match ----- ", messageHash, sig, spli.r, spli.s, spli.v)
  
  

    console.log("signature -------- ", spli)
    
    // console.log("match ----- ", await usdt.connect(owner).transfer(owner.address , 1000))
    await usdt2.connect(relayer).executeMetaTransaction(owner.address, callData, spli.r, spli.s, spli.v, {value:0})
    // sleep(5000)

    // console.log("done......", await usdt.transfer(user1.address , 1000))

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

// async function signData(user, nonce, verifyingAddress, _chainId) {
//   const message = await ethers.utils.solidityKeccak256(["uint256", "address", "uint256"], [_nonce, verifyingAddress, chainId])
//   const messageHash = await ethers.utils.arrayify(message)
//   const sig = await user.signMessage(messageHash);
