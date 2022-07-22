// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";

interface IMetaERC1155Upgradable {
    function setURI(string memory newuri) external;

    function pause() external;

    function unpause() external;

    function mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) external;

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) external;
}
