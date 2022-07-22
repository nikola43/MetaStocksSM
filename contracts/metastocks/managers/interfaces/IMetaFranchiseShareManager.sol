// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../../../enums/MetaFranchiseType.sol";

interface IMetaFranchiseShareManager {
    function createMetaFranchise(
        address to,
        uint256 companyId,
        MetaFranchiseType _metaFranchiseType,
        bytes memory data
    ) external;
}
