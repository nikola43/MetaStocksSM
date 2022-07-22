// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "hardhat/console.sol";

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

import "../tokens/core/interfaces/IMetaFranchise.sol";
import "../../models/TransactionFees.sol";
import "../../enums/MetaFranchiseType.sol";
import "../tokens/core/ERC1155/MetaERC1155ReceiverHolder.sol";
import "hardhat/console.sol";

contract MetaFranchiseManager is Initializable, PausableUpgradeable {
    address private _owner;
    IMetaFranchise metaFranchise;
    uint256 private createFranchisePriceBNB;
    uint256 private createFranchisePrice;
    uint256 private hireWorkerFranchisePriceBNB;
    uint256 private maintainceFranchiseExpensesBNBPercent;
    uint256 private maintainceFranchiseExpenses;
    uint256 private franchiseDailyEarningsBNB;
    uint256 private franchiseDailyEarnings;
    uint256 private franchiseDailyInterval;
    uint256 private franchiseWorkersMultiplicator;
    address private paymentTokenAddress;
    address private teamAddress;
    uint256 private teamAddressPercent;
    uint256 private totalFranchises;

    mapping(uint256 => uint256) franchiseContinents;

    mapping(uint256 => mapping(uint256 => uint256))
        public franchisesUsdInvested;
    mapping(uint256 => uint256) public lastFranchiseClaimDate;

    mapping(uint256 => mapping(uint256 => uint256)) public companyFranchises;
    mapping(uint256 => uint256) public companyFranchisesCounter;

    mapping(uint256 => mapping(uint256 => uint256))
        public franchisesLastClaimDates;

    mapping(uint256 => mapping(uint256 => uint256)) public franchisesWorkers;

    event CreateFranchise(
        address indexed account,
        uint256 companyId,
        uint256 franchiseType,
        uint256 amount
    );
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
        createFranchisePriceBNB = 300000000000000000; // 0.30BNB
        franchiseDailyEarningsBNB = 8300000000000000; // 0.0083BNB
        maintainceFranchiseExpensesBNBPercent = 100; // 0.01BNB
        createFranchisePrice = 10 ether;
        franchiseDailyEarnings = 170000000000000000;
        maintainceFranchiseExpenses = 1 ether;
        franchiseDailyInterval = 1 days;
        totalFranchises = 0;

        paymentTokenAddress = address(0);
        teamAddress = 0x162aEe8E48825e3320cA3975D099daf6e6A3076a;
        teamAddressPercent = 1000;
        metaFranchise = IMetaFranchise(_metaFranchiseAddress);
    }

    receive() external payable {}

    function self() public view returns (address) {
        return address(this);
    }

    /**
     * @dev Transfers ownership of the contract to a new account ('newOwner').
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(
            newOwner != address(0),
            "Ownable: new owner is the zero address"
        );
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }

    function getCreateFranchisePrice() external view returns (uint256) {
        return createFranchisePrice;
    }

    function getMaintainceFranchiseExpenses() external view returns (uint256) {
        return maintainceFranchiseExpenses;
    }

    function getFranchiseDailyEarnings() external view returns (uint256) {
        return franchiseDailyEarnings;
    }

    function getCreateFranchisePriceBNB() external view returns (uint256) {
        return createFranchisePriceBNB;
    }

    function getMaintainceFranchiseExpensesBNBPercent()
        external
        view
        returns (uint256)
    {
        return maintainceFranchiseExpensesBNBPercent;
    }

    function getFranchiseDailyEarningsBNB() external view returns (uint256) {
        return franchiseDailyEarningsBNB;
    }

    function getHireWorkerFranchisePriceBNB() external view returns (uint256) {
        return hireWorkerFranchisePriceBNB;
    }

    function getPaymentTokenAddress() external view returns (address) {
        return paymentTokenAddress;
    }

    function getFranchisesUsdInvested(uint256 companyId, uint256 franchiseType)
        external
        view
        returns (uint256)
    {
        return franchisesUsdInvested[companyId][franchiseType];
    }

    function setHireWorkerFranchisePrice(uint16 _hireWorkerFranchisePriceBNB)
        external
        virtual
    {
        hireWorkerFranchisePriceBNB = _hireWorkerFranchisePriceBNB;
    }

    function setMaintainceFranchiseExpenses(uint16 _maintainceFranchiseExpenses)
        external
        virtual
    {
        maintainceFranchiseExpenses = _maintainceFranchiseExpenses;
    }

    function setFranchiseDailyEarnings(uint16 _franchiseDailyEarnings)
        external
        virtual
    {
        franchiseDailyEarnings = _franchiseDailyEarnings;
    }

    function setMaintainceFranchiseExpensesBNBPercent(
        uint16 _maintainceFranchiseExpenses
    ) external virtual {
        maintainceFranchiseExpensesBNBPercent = _maintainceFranchiseExpenses;
    }

    function setFranchiseDailyEarningsBNB(uint16 _franchiseDailyEarnings)
        external
        virtual
    {
        franchiseDailyEarningsBNB = _franchiseDailyEarnings;
    }

    function setPaymentTokenAddress(address _paymentTokenAddress)
        external
        virtual
    {
        paymentTokenAddress = _paymentTokenAddress;
        IERC20(paymentTokenAddress).approve(self(), type(uint256).max);
    }

    function setCreateFranchisePrice(uint16 _createFranchisePrice)
        external
        virtual
    {
        createFranchisePrice = _createFranchisePrice;
    }

    function setCreateFranchisePriceBNB(uint16 _createFranchisePrice)
        external
        virtual
    {
        createFranchisePriceBNB = _createFranchisePrice;
    }

    function getNumberOfMetaFranchises(uint256 companyId)
        external
        view
        returns (uint256)
    {
        return companyFranchises[companyId][0];
    }

    function getFranchisesByContinent(uint256 _continentId)
        public
        view
        returns (uint256)
    {
        return franchiseContinents[_continentId];
    }

    function getMetaFranchisesUnclaimedRewards(uint256 companyId)
        external
        view
        returns (uint256)
    {
        uint256 totalUnclaimed = 0;

        for (uint256 typeIndex = 0; typeIndex < 10; typeIndex++) {
            uint256 typeNumber = companyFranchises[companyId][typeIndex];

            for (uint256 index = 0; index < typeNumber; index++) {
                totalUnclaimed +=
                    ((uint256(
                        block.timestamp -
                            franchisesLastClaimDates[companyId][typeNumber]
                    ) * franchiseDailyEarnings) / franchiseDailyInterval) *
                    franchisesWorkers[companyId][typeNumber];
            }
        }

        return totalUnclaimed;
    }

    function getTotalFranchises() external view returns (uint256) {
        return totalFranchises;
    }

    function getMetaFranchisesUnclaimedRewardsBNB(uint256 companyId)
        external
        view
        returns (uint256)
    {
        uint256 totalUnclaimed = 0;
        uint256 franchisesNumber = this.getNumberOfMetaFranchises(companyId);
        console.log("franchisesNumber", franchisesNumber);
        for (uint256 index = 0; index < franchisesNumber; index++) {
            totalUnclaimed += ((uint256(
                block.timestamp - franchisesLastClaimDates[companyId][index]
            ) * franchiseDailyEarningsBNB) / franchiseDailyInterval);
        }
        console.log("totalUnclaimed", totalUnclaimed);

        return totalUnclaimed;
    }

    function getFranchisesLastClaimDates(uint256 _companyId)
        external
        view
        returns (uint256[] memory)
    {
        uint256 franchisesNumber = companyFranchises[_companyId][0];
        uint256[] memory claimsDates = new uint256[](franchisesNumber);
        for (uint256 index = 0; index < franchisesNumber; index++) {
            claimsDates[index] = franchisesLastClaimDates[_companyId][index];
        }
        return claimsDates;
    }

    function createMetaFranchiseUsingUnclaimedBNB(
        address _to,
        uint256 _companyId,
        uint256 _continentId,
        uint256 _number
    ) external payable {
        uint256 totalUnclaimed = this.getMetaFranchisesUnclaimedRewards(
            _companyId
        );

        require(
            totalUnclaimed >= createFranchisePriceBNB * _number,
            "Low amount"
        );
        payable(teamAddress).transfer(
            (totalUnclaimed * teamAddressPercent) / 10000
        );

        companyFranchises[_companyId][0] += _number;
        companyFranchisesCounter[_companyId] += _number;
        franchiseContinents[_continentId] += _number;
        totalFranchises += _number;
        metaFranchise.mint(_to, 0, _number, "0x0");

        // todo try save gas
        uint256 franchisesNumber = companyFranchisesCounter[_companyId];
        for (uint256 index = 0; index < franchisesNumber; index++) {
            if (franchisesLastClaimDates[_companyId][index] == 0) {
                franchisesLastClaimDates[_companyId][index] = block.timestamp;
            }
        }

        emit CreateFranchise(msg.sender, _companyId, 0, _number);
    }

    function createMetaFranchiseUsingBNB(
        address _to,
        uint256 _companyId,
        uint256 _continentId,
        uint256 _number
    ) external payable {
        require(msg.value >= createFranchisePriceBNB * _number, "Low amount");
        payable(teamAddress).transfer((msg.value * teamAddressPercent) / 10000);

        companyFranchises[_companyId][0] += _number;
        companyFranchisesCounter[_companyId] += _number;
        franchiseContinents[_continentId] += _number;
        totalFranchises += _number;
        //metaFranchise.mint(_to, 0, _number, "0x0");

        // todo try save gas
        uint256 franchisesNumber = companyFranchisesCounter[_companyId];
        for (uint256 index = 0; index < franchisesNumber; index++) {
            if (franchisesLastClaimDates[_companyId][index] == 0) {
                franchisesLastClaimDates[_companyId][index] = block.timestamp;
            }
        }

        emit CreateFranchise(msg.sender, _companyId, 0, _number);
    }

    function createMetaFranchise(
        address to,
        uint256 companyId,
        uint256 _continentId,
        MetaFranchiseType _metaFranchiseType
    ) external {
        IERC20(paymentTokenAddress).transferFrom(
            address(msg.sender),
            address(self()),
            createFranchisePrice
        );

        uint256 franchiseType = metaFranchise.getMetaFranchiseType(
            _metaFranchiseType
        );

        metaFranchise.mint(to, franchiseType, 1, "0x0");

        companyFranchises[companyId][franchiseType] += 1;
        franchisesWorkers[companyId][franchiseType] += 1;
        franchisesLastClaimDates[companyId][franchiseType] = block.timestamp;

        /*
        uint256 tokensValueInUSD = midasMultinetworkRouterManager
            .getTokensValueInUSD(paymentTokenAddress, createFranchisePrice);
        franchisesUsdInvested[companyId][franchiseType] = tokensValueInUSD;
        */

        franchiseContinents[_continentId] += 1;

        emit CreateFranchise(msg.sender, companyId, franchiseType, 1);
    }

    function hireWorkerUsingBNB(
        uint256 companyId,
        MetaFranchiseType _metaFranchiseType
    ) external payable {
        require(msg.value >= createFranchisePriceBNB, "Low amount");
        payable(teamAddress).transfer((msg.value * teamAddressPercent) / 10000);

        uint256 franchiseType = metaFranchise.getMetaFranchiseType(
            _metaFranchiseType
        );

        franchisesWorkers[companyId][franchiseType] += 1;
    }

    function hireWorker(uint256 companyId, MetaFranchiseType _metaFranchiseType)
        external
    {
        /*
        IERC20(paymentTokenAddress).transferFrom(
            address(msg.sender),
            address(self()),
            hireWorkerFranchisePriceBNB
        );

        
        uint256 tokensValueInUSD = midasMultinetworkRouterManager
            .getTokensValueInUSD(
                paymentTokenAddress,
                hireWorkerFranchisePriceBNB
            );
            

        uint256 franchiseType = metaFranchise.getMetaFranchiseType(
            _metaFranchiseType
        );

        //franchisesUsdInvested[companyId][franchiseType] = tokensValueInUSD;
        franchisesWorkers[companyId][franchiseType] += 1;
           */
    }

    function claimFromAllFranchises(uint256 _companyId) external {
        uint256 totalUnclaimed = this.getMetaFranchisesUnclaimedRewards(
            _companyId
        );

        IERC20(paymentTokenAddress).transferFrom(
            address(self()),
            address(msg.sender),
            totalUnclaimed
        );

        for (uint256 typeIndex = 0; typeIndex < 10; typeIndex++) {
            franchisesLastClaimDates[_companyId][typeIndex] = block.timestamp;
        }
    }

    function claimFromAllFranchisesBNB(uint256 _companyId, address companyOwner)
        external
    {
        uint256 totalUnclaimed = this.getMetaFranchisesUnclaimedRewardsBNB(
            _companyId
        );

        console.log("getMetaFranchisesUnclaimedRewardsBNB", totalUnclaimed);

        uint256 franchisesNumber = this.getNumberOfMetaFranchises(_companyId);

        console.log("franchisesNumber", franchisesNumber);
        for (uint256 index = 0; index < franchisesNumber; index++) {
            franchisesLastClaimDates[_companyId][index] = block.timestamp;
        }

        payable(teamAddress).transfer(
            (totalUnclaimed * maintainceFranchiseExpensesBNBPercent) / 10000
        );
        payable(companyOwner).transfer(
            totalUnclaimed -
                (totalUnclaimed * maintainceFranchiseExpensesBNBPercent) /
                10000
        );
    }

    function getFranchiseValue() external view returns (uint256) {
        /*
        chainlinkDataFeedsManager.getTokensValueInUSD(
            _tokenAddress,
            _amount,
            _network,
            midasMultiNetworkRouter
        );
        */
        return 100000000;
    }

    function burnMetaFranchise(
        address to,
        uint256 companyId,
        uint256 amount,
        MetaFranchiseType _metaFranchiseType
    ) external {}

    function sellMetaFranchise(
        address to,
        uint256 companyId,
        uint256 amount,
        MetaFranchiseType _metaFranchiseType
    ) external {}
}
