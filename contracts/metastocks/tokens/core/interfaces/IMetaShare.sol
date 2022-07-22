// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IMetaShare {
    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) external;

    function burnMetaFranchiseShare(
        address to,
        uint256 tokenId,
        uint256 amount
    ) external;

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external;
}
