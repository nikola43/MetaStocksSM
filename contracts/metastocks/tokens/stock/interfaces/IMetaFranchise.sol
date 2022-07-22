// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import "../../../../enums/MetaFranchiseType.sol";

interface IMetaFranchise {
    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external;

    function safeMint(address to) external returns (uint256);

    function getMetaFranchiseType(MetaFranchiseType _metaFranchiseType)
        external
        pure
        returns (uint256);

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external;
}
