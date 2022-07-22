// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";

interface IMetaERC721Upgradable {
    function pause() external;

    function unpause() external;

    function safeMint(address to) external;

    // The following functions are overrides required by Solidity.
    function supportsInterface(bytes4 interfaceId)
        external
        view
        returns (bool);
}
