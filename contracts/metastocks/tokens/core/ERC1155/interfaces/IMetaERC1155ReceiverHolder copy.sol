// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";

interface IMetaERC1155ReceiverHolder {
    function onERC1155Received(
        address,
        address,
        uint256,
        uint256,
        bytes memory
    ) external returns (bytes4);

    function onERC1155BatchReceived(
        address,
        address,
        uint256[] memory,
        uint256[] memory,
        bytes memory
    ) external returns (bytes4);

    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}
