// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../../../enums/MetaFranchiseType.sol";
import "../core/ERC1155/MetaERC1155Upgradable.sol";

contract MetaFranchise is MetaERC1155Upgradable {
    function initialize() public virtual override initializer {
        super.initialize();
    }

    function getMetaFranchiseType(
        MetaFranchiseType _MetaFranchiseType
    ) external pure returns (uint256) {
        uint256 franchiseType = 0;

        if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType1
        ) {
            franchiseType = 0;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType2
        ) {
            franchiseType = 1;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType3
        ) {
            franchiseType = 2;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType4
        ) {
            franchiseType = 3;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType5
        ) {
            franchiseType = 4;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType6
        ) {
            franchiseType = 5;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType7
        ) {
            franchiseType = 6;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType8
        ) {
            franchiseType = 7;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType9
        ) {
            franchiseType = 8;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType10
        ) {
            franchiseType = 9;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType11
        ) {
            franchiseType = 10;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType12
        ) {
            franchiseType = 11;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType13
        ) {
            franchiseType = 12;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType14
        ) {
            franchiseType = 13;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType15
        ) {
            franchiseType = 14;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType16
        ) {
            franchiseType = 15;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType17
        ) {
            franchiseType = 16;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType18
        ) {
            franchiseType = 17;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType19
        ) {
            franchiseType = 18;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType20
        ) {
            franchiseType = 19;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType21
        ) {
            franchiseType = 20;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType22
        ) {
            franchiseType = 21;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType23
        ) {
            franchiseType = 22;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType24
        ) {
            franchiseType = 23;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType25
        ) {
            franchiseType = 24;
        } else if (
            _MetaFranchiseType ==
            MetaFranchiseType.MetaFranchiseType26
        ) {
            franchiseType = 25;
        } else {
            franchiseType = 0;
        }

        return franchiseType;
    }
}
