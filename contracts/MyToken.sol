// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    function hello() public pure returns (string memory) {
        return "hello word!";
    }

    function MinimumUnit(uint num) private view returns (uint) {
        return num * 10 ** decimals();
    }

    constructor() ERC20("xinTong", "XT") {
        _mint(msg.sender, MinimumUnit(10000));
    }
}
