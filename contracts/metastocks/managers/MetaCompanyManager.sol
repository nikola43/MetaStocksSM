// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "../tokens/stock/interfaces/IMetaCompany.sol";
import "./interfaces/IMetaFranchiseManager.sol";
import "../tokens/core/ERC1155/MetaERC1155ReceiverHolder.sol";
struct CEO {
    address account;
}

contract MetaCompanyManager is
    MetaERC1155ReceiverHolder,
    Initializable,
    PausableUpgradeable
{
    IMetaCompany MetaCompany;
    IMetaFranchiseManager metaFranchiseManager;

    mapping(address => uint256) public ceosCompanies;
    mapping(uint256 => address) public companiesCeos;
    mapping(address => bool) public ceos;
    uint256 totalCeos;
    uint256 totalCompanies;
    uint256 totalInvested;
    address private _owner;

    event CreateCompany(address indexed account, uint256 companyId);
    // Modifier to verify the caller is the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    function initialize(
        address _metaCompanyAddress,
        address _metaFranchiseManagerAddress
    ) public initializer {
        _owner = msg.sender;
        MetaCompany = IMetaCompany(_metaCompanyAddress);
        metaFranchiseManager = IMetaFranchiseManager(
            _metaFranchiseManagerAddress
        );
        totalCeos = 0;
        totalCompanies = 0;
        totalInvested = 0;
    }

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

    function getCompanyId(address _account) external view returns (uint256) {
        return ceosCompanies[_account];
    }

    function getCompanyCEOAddress(uint256 companyId)
        external
        view
        returns (address)
    {
        return companiesCeos[companyId];
    }

    function isCeo(address _account) external view returns (bool) {
        return ceos[_account];
    }

    function createCompany(address account) external payable {
        uint256 companyId = MetaCompany.safeMint(account);
        ceosCompanies[account] = companyId;
        companiesCeos[companyId] = account;
        ceos[account] = true;
        totalCeos++;
        totalCompanies++;
        emit CreateCompany(account, ceosCompanies[account]);
    }

    function getTotalCeos() external view returns (uint256) {
        return totalCeos;
    }

    function getTotalCompanies() external view returns (uint256) {
        return totalCompanies;
    }

    function getTotalInvested() external view returns (uint256) {
        return totalInvested;
    }

    function getTotalFranchises() external view returns (uint256) {
        return metaFranchiseManager.getTotalFranchises();
    }

    function getCEOS() external view returns (address[] memory) {
        address[] memory users = new address[](totalCompanies);
        for (uint256 index = 0; index < totalCompanies; index++) {
            users[index] = companiesCeos[index];
        }
        return users;
    }

    function createFranchise(address _account) external payable {
        if (!ceos[_account]) {
            this.createCompany(_account);
        }

        metaFranchiseManager.createMetaFranchise(
            address(metaFranchiseManager),
            this.getCompanyId(_account),
            0,
            MetaFranchiseType.MetaFranchiseType1
        );
        totalInvested += msg.value;
    }

    function createMetaFranchiseUsingBNB(uint256 _number) external payable {
        if (!ceos[msg.sender]) {
            this.createCompany(msg.sender);
        }
        metaFranchiseManager.createMetaFranchiseUsingBNB{value: msg.value}(
            address(metaFranchiseManager),
            this.getCompanyId(msg.sender),
            0,
            _number
        );
        totalInvested += msg.value;
    }

    function getMetaFranchisesUnclaimedRewards(address account)
        external
        view
        returns (uint256)
    {
        return
            metaFranchiseManager.getMetaFranchisesUnclaimedRewards(
                this.getCompanyId(account)
            );
    }

    function getFranchisesLastClaimDates(address account)
        external
        view
        returns (uint256[] memory)
    {
        return
            metaFranchiseManager.getFranchisesLastClaimDates(
                this.getCompanyId(account)
            );
    }

    function createMetaFranchiseUsingUnclaimedBNB(uint256 _number)
        external
        payable
    {
        metaFranchiseManager.createMetaFranchiseUsingUnclaimedBNB{
            value: msg.value
        }(
            address(metaFranchiseManager),
            this.getCompanyId(msg.sender),
            0,
            _number
        );
        totalInvested += msg.value;
    }

    function getMetaFranchisesUnclaimedRewardsBNB(address account)
        external
        view
        returns (uint256)
    {
        return
            metaFranchiseManager.getMetaFranchisesUnclaimedRewardsBNB(
                this.getCompanyId(account)
            );
    }

    function claimFromAllFranchises() external {
        metaFranchiseManager.claimFromAllFranchises(
            this.getCompanyId(msg.sender)
        );
    }

    function claimFromAllFranchisesBNB() external {
        metaFranchiseManager.claimFromAllFranchisesBNB(
            this.getCompanyId(msg.sender),
            msg.sender
        );
    }

    function getCreateFranchisePriceBNB() external view returns (uint256) {
        return metaFranchiseManager.getCreateFranchisePriceBNB();
    }

    function getNumberOfMetaFranchises(address account)
        external
        view
        returns (uint256)
    {
        return
            metaFranchiseManager.getNumberOfMetaFranchises(
                this.getCompanyId(account)
            );
    }

    function getFranchiseValue() external view returns (uint256) {
        return metaFranchiseManager.getFranchiseValue();
    }

    function burnMetaFranchise(
        address to,
        uint256 companyId,
        uint256 amount,
        MetaFranchiseType _metaFranchiseType
    ) external {
        metaFranchiseManager.burnMetaFranchise(
            to,
            companyId,
            amount,
            _metaFranchiseType
        );
    }

    function sellMetaFranchise(
        address to,
        uint256 companyId,
        uint256 amount,
        MetaFranchiseType _metaFranchiseType
    ) external {
        metaFranchiseManager.sellMetaFranchise(
            to,
            companyId,
            amount,
            _metaFranchiseType
        );
    }
}
