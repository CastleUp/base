// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ContractE {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function withdraw(address payable to, uint256 amount) external {
        require(msg.sender == owner, "Not owner");
        require(address(this).balance >= amount, "Insufficient balance");
        to.transfer(amount);
    }
}
