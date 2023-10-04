// const { ethers, upgrades } = require("hardhat");
// const hre = require("hardhat");


// async function main() {
//   // signers = await ethers.getSigners();
//   signers = await ethers.getSigners();
//   relayer = signers[0];
//   owner = signers[1];
//   user1 = signers[2];
//   // user2 = signers[2];
//   // user3 = signers[3]
//   // relayer = signers[2];
//   // console.log("user 1 and relayer ----", relayer.address, user1.address);
//   // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   // const unlockTime = currentTimestampInSeconds + 60;

//   // const lockedAmount = ethers.utils.parseEther("0.001");

//   // const Lock = await ethers.getContractFactory("Lock");
//   // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   // await lock.deployed();

//   // console.log(
//   //   `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
//   // );
//   const USDT = await ethers.getContractFactory("USDT");
//   const usdt = await USDT.deploy();
//   await usdt.deployed();
//   console.log("usdt.address: ", usdt.address);

//   const data = {
//     nonce: 1,                 // get from contract
//     verifyingAddress: usdt.address,
//     chainId: "80001"
    
// }




// const message = await ethers.utils.solidityKeccak256(["uint256", "address", "uint256"], [data.nonce, data.verifyingAddress, data.chainId])

// const messageHash = await ethers.utils.arrayify(message)

// const sig = await user1.signMessage(messageHash);

// const spli = await ethers.utils.splitSignature(sig);
// await usdt.mint(owner.address , 100000)
// console.log("match ----- ", messageHash, sig, await usdt.connect(relayer).transfer(owner.address , 10000))


// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

import { ethers } from "hardhat";
import { IINRTX , IINRTX__factory  , INRTX ,INRTX__factory} from "../typechain-types";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.utils.parseEther("0.001");
  // const [deployer] = await ethers.getSigners();

  // console.log("Deploying contracts with the account:", deployer.address);


  // const Token = await ethers.getContractFactory("Factory");
  // const token = await Token.deploy();
  // await token.deployed();
  // console.log("token.address: ", token.address)

  // const Token = await ethers.getContractFactory("Token");
  // const token = await Token.deploy("MyToken" , "MTK" , 1000000000000 ,"0x4bd99066c8D069B0021bB712e9fA01904360d7CC" , "0x889DFbc9B2a35f98852d2a306338ae4C4d0f3331");
  // await token.deployed();
  // console.log("token.address: ", token.address);

  // const Factory = await ethers.getContractFactory("Factory");
  // const factory = await Factory.deploy();
  // await factory.deployed();
  // console.log("factory.address: ", factory.address)
  console.log("usdt.address");

  const USDT = await ethers.getContractFactory("INRTX");
  console.log("usdt.address");

  const usdt = await USDT.deploy();
  console.log("usdt.address");

  await usdt.deployed();
  console.log("usdt.address", usdt.address);

  // const Vishal = await ethers.getContractFactory("Vishal");
  // const vishal = await Vishal.deploy();
  // await vishal.deployed();
  // console.log("vishal.address", vishal.address);

  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });


  // console.log(
  //   `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

