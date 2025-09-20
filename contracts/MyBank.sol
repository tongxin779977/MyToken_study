// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract MyBank {
    mapping(address => uint256) public balances;

    address public immutable MyBankAddress;

    constructor(address _address) {
        MyBankAddress = _address;
    }

    //查看余额
    function checkTheBalance() public view returns (uint256) {
        return balances[msg.sender] / minimumUnit();
    }

    //存钱
    function deposlit(uint256 amount) public {
        amount = amount * minimumUnit();
        require(
            IERC20(MyBankAddress).transferFrom(
                msg.sender,
                address(this),
                amount
            ),
            "transferFrom error"
        );
        balances[msg.sender] += amount;
    }

    //取钱
    function withdraw(uint256 amount) external quotaVerification(amount) {
        amount = amount * minimumUnit();

        SafeERC20.safeTransfer(IERC20(MyBankAddress), msg.sender, amount);
        balances[msg.sender] -= amount;
    }

    //转账
    function transfer(
        address _address,
        uint256 amount
    ) public quotaVerification(amount) {
        amount = amount * minimumUnit();

        balances[msg.sender] -= amount;
        balances[_address] += amount;
    }

    //展示最小单位
    function minimumUnit() private pure returns (uint256) {
        return 10 ** 18;
    }

    //共通校验
    //校验当前余额额度是否够用
    modifier quotaVerification(uint256 amount) {
        amount = amount * minimumUnit();
        require(
            amount < balances[msg.sender],
            "the amount more then bank of balance"
        );
        _;
    }
}
