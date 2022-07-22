// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../../../enums/MetaFranchiseType.sol";
import "../core/ERC1155/MetaERC1155Upgradable.sol";

contract MetaShare is MetaERC1155Upgradable {
    function initialize() public virtual override initializer {
        super.initialize();
    }

    function burnMetaStocksFranchiseShare(
        address to,
        uint256 tokenId,
        uint256 amount
    ) external {
        super.burn(to, tokenId, amount);
    }
}
