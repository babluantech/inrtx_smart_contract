// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "./interfce/IINRTX.sol";
import "./BasicMetaTransaction.sol";

contract INRTX is Initializable, ERC20Upgradeable, OwnableUpgradeable, BasicMetaTransaction ,IINRTX{

      uint8 private _decimals;
   
    // constructor() {
    //     _disableInitializers();
    // }

    function initialize()public initializer{
        __ERC20_init("INRTX", "INRTX");
        __Ownable_init();
         _decimals = 2;
    }

    function decimals() public pure  override returns (uint8) {
        return 2;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    
    function transfer(address to, uint256 amount) public virtual override returns (bool success) {
        success = super.transfer(to , amount);
       if(!success) revert("transfer failed");

       return success;
}
    function burn(uint _amount) public {
      require(_amount > 0, "Amount must be greater than 0");
    
      _burn(msg.sender, _amount);
}
    
   

    function _msgSender() internal view override(ContextUpgradeable, BasicMetaTransaction) returns(address sender) {
        if(msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
                sender := and(mload(add(array, index)), 0xffffffffffffffffffffffffffffffffffffffff)
            }
        } else {
            return msg.sender;
        }
    }
}