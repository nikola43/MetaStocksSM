// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IMidasManager {
    function getManager(address _account) external view returns (address);

    function createManager() external payable;

    function updateManager(uint256 managerId) external;

    function deleteManager(uint256 managerId) external;
}
