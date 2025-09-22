// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ContractD {
    uint256 public counter;

    function increment() external {
        counter++;
    }

    function decrement() external {
        require(counter > 0, "Counter is zero");
        counter--;
    }
}
