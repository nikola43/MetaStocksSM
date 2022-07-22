// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../../../enums/MetaFranchiseType.sol";

interface IMetaFranchiseManager {
    function getCreateFranchisePrice() external view returns (uint256);

    function getMaintainceFranchiseExpenses() external view returns (uint256);

    function getFranchiseDailyEarnings() external view returns (uint256);

    function getCreateFranchisePriceBNB() external view returns (uint256);

    function getMaintainceFranchiseExpensesBNBPercent()
        external
        view
        returns (uint256);

    function getFranchiseDailyEarningsBNB() external view returns (uint256);

    function getHireWorkerFranchisePriceBNB() external view returns (uint256);

    function getPaymentTokenAddress() external view returns (address);

    function getFranchisesUsdInvested(uint256 companyId, uint256 franchiseType)
        external
        view
        returns (uint256);

    function setHireWorkerFranchisePrice(uint16 _hireWorkerFranchisePriceBNB)
        external;

    function setMaintainceFranchiseExpenses(uint16 _maintainceFranchiseExpenses)
        external;

    function setFranchiseDailyEarnings(uint16 _franchiseDailyEarnings) external;

    function setMaintainceFranchiseExpensesBNBPercent(
        uint16 _maintainceFranchiseExpenses
    ) external;

    function setFranchiseDailyEarningsBNB(uint16 _franchiseDailyEarnings)
        external;

    function setPaymentTokenAddress(address _paymentTokenAddress) external;

    function setCreateFranchisePrice(uint16 _createFranchisePrice) external;

    function setCreateFranchisePriceBNB(uint16 _createFranchisePrice) external;

    function getNumberOfMetaFranchises(uint256 companyId)
        external
        view
        returns (uint256);

    function getFranchisesByContinent(uint256 _continentId)
        external
        view
        returns (uint256);

    function getMetaFranchisesUnclaimedRewards(uint256 companyId)
        external
        view
        returns (uint256);

    function getTotalFranchises() external view returns (uint256);

    function getMetaFranchisesUnclaimedRewardsBNB(uint256 companyId)
        external
        view
        returns (uint256);

    function getFranchisesLastClaimDates(uint256 _companyId)
        external
        view
        returns (uint256[] memory);

    function createMetaFranchiseUsingUnclaimedBNB(
        address _to,
        uint256 _companyId,
        uint256 _continentId,
        uint256 _number
    ) external payable;

    function createMetaFranchiseUsingBNB(
        address _to,
        uint256 _companyId,
        uint256 _continentId,
        uint256 _number
    ) external payable;

    function createMetaFranchise(
        address to,
        uint256 companyId,
        uint256 _continentId,
        MetaFranchiseType _metaFranchiseType
    ) external;

    function hireWorkerUsingBNB(
        uint256 companyId,
        MetaFranchiseType _metaFranchiseType
    ) external payable;

    function hireWorker(uint256 companyId, MetaFranchiseType _metaFranchiseType)
        external;

    function claimFromAllFranchises(uint256 _companyId) external;

    function claimFromAllFranchisesBNB(uint256 _companyId, address companyOwner)
        external;

    function getFranchiseValue() external view returns (uint256);

    function burnMetaFranchise(
        address to,
        uint256 companyId,
        uint256 amount,
        MetaFranchiseType _metaFranchiseType
    ) external;

    function sellMetaFranchise(
        address to,
        uint256 companyId,
        uint256 amount,
        MetaFranchiseType _metaFranchiseType
    ) external;
}
