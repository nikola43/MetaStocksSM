// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "../tokens/core/interfaces/IMetaShare.sol";
import "../../enums/MetaFranchiseType.sol";
import "../tokens/core/ERC1155/MetaERC1155ReceiverHolder.sol";

contract MetaShareManager is MetaERC1155ReceiverHolder, Initializable {
    address private _owner;
    IMetaShare metaShare;
    uint256 SHARES_NUMBER;
    uint256[] ids;
    uint256[] amounts;
    mapping(uint256 => mapping(uint256 => uint256)) public franchisesShares;
    // Modifier to verify the caller is the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    function initialize(address _metaFranchiseAddress) public initializer {
        _owner = msg.sender;
        SHARES_NUMBER = 100;
        ids = new uint256[](SHARES_NUMBER);
        amounts = new uint256[](SHARES_NUMBER);

        for (uint256 index = 0; index < SHARES_NUMBER; index++) {
            ids.push(0);
            amounts.push(1);
        }

        metaShare = IMetaShare(_metaFranchiseAddress);
    }

    function self() public view virtual returns (address) {
        return address(this);
    }

    function createMetaFranchiseShares(
        address to,
        uint256 companyId,
        uint256 franchiseId
    ) external {
        metaShare.mintBatch(to, ids, amounts, "0x0");
        franchisesShares[companyId][franchiseId] += SHARES_NUMBER;
    }

    function getNumberOfMetaFranchiseShares(
        uint256 companyId,
        uint256 franchiseId
    ) external view returns (uint256) {
        return franchisesShares[companyId][franchiseId];
    }

    function burnMetaFranchiseShares(
        uint256 companyId,
        uint256 franchiseId,
        uint256 amount
    ) external {
        require(
            amount <= franchisesShares[companyId][franchiseId],
            "Burn exceded share allowance"
        );

        require(
            franchisesShares[companyId][franchiseId] - amount >= 0,
            "Balance after burn cant be lower than zero"
        );

        franchisesShares[companyId][franchiseId] -= amount;
        metaShare.burnMetaFranchiseShare(msg.sender, franchiseId, amount);
    }

    function sellMetaFranchiseShares(
        uint256 companyId,
        uint256 franchiseId,
        uint256 amount
    ) external {
        require(
            amount <= franchisesShares[companyId][franchiseId],
            "Burn exceded share allowance"
        );

        require(
            franchisesShares[companyId][franchiseId] - amount >= 0,
            "Balance after burn cant be lower than zero"
        );

        franchisesShares[companyId][franchiseId] -= amount;

        metaShare.safeTransferFrom(address(this), msg.sender, 1, amount, "0x0");
    }
}
