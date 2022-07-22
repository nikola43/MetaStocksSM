/*
TYKHE (Tyche) was the goddess of fortune, chance, providence and fate.
She was usually honoured in a more favourable light as Eutykhia (Eutychia),
goddess of good fortune, luck, success and prosperity.

she will help us to calculate and distribute the profits
fairly among all those who participated according
to the help they gave when we had nothing.

*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";

struct FeeReceiver {
    address receiver;
    uint256 percentage;
}

contract TykheFortuneDistributor is Initializable {
    address private sendFeeTokenAddress;
    mapping(uint256 => FeeReceiver) private feeReceivers;
    uint256 private membersCounter;
    uint256 private masterTaxDivisor;
    address private owner;
    address LIMBO_DOOR;
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    function initialize() public initializer {
        owner = msg.sender;
        membersCounter = 0;
        masterTaxDivisor = 10000;
        sendFeeTokenAddress = address(0);
        LIMBO_DOOR = address(0);
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
        address oldOwner = owner;
        owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }

    function getMembersCounter() external virtual returns (uint256) {
        return membersCounter;
    }

    function getNativeKindomFortune() external virtual returns (uint256) {
        return address(this).balance;
    }

    function getTokensFortune(address tokenAddress)
        external
        virtual
        returns (uint256)
    {
        return IERC20(tokenAddress).balanceOf(address(this));
    }

    function setSendFeeTokenAddress(address newAddress)
        external
        virtual
        onlyOwner
    {
        IERC20(newAddress).approve(address(this), type(uint256).max);
        sendFeeTokenAddress = newAddress;
    }

    function getSendFeeTokenAddress() external virtual returns (address) {
        return sendFeeTokenAddress;
    }

    function getFortuneReceiver(address _feesReceiverAddress)
        external
        virtual
        returns (address)
    {
        for (uint256 index = 0; index < membersCounter; index++) {
            if (feeReceivers[index].receiver == _feesReceiverAddress) {
                return _feesReceiverAddress;
            }
        }
        return address(0);
    }

    function getFortuneReceiverIndex(address _feesReceiverAddress)
        external
        virtual
        returns (uint256)
    {
        for (uint256 index = 0; index < membersCounter; index++) {
            if (feeReceivers[index].receiver == _feesReceiverAddress) {
                return index;
            }
        }
        return 0;
    }

    function addFortuneReceivers(
        address[] memory receivers,
        uint256[] memory percentage
    ) external virtual onlyOwner {
        require(receivers.length == percentage.length, "different length");

        // check fees percent
        uint256 totalFeesPercentage = 0;
        for (uint256 index = 0; index < receivers.length; index++) {
            totalFeesPercentage += percentage[index];
        }
        require(
            totalFeesPercentage == masterTaxDivisor,
            "all members fees should be 100%"
        );

        // add members
        for (uint256 index = 0; index < receivers.length; index++) {
            FeeReceiver memory feeReceiver = feeReceivers[index];
            feeReceivers[membersCounter] = FeeReceiver(
                receivers[index],
                percentage[index]
            );
            membersCounter++;
        }
    }

    function addFortuneReceiver(address receiver, uint256 percentage)
        external
        virtual
        onlyOwner
    {
        membersCounter++;
        feeReceivers[membersCounter] = FeeReceiver(receiver, percentage);
    }

    function updateFortuneReceiverPercentage(
        address receiver,
        uint256 percentage
    ) external virtual onlyOwner {
        require(receiver == msg.sender, "Receiver is not msg.sender");
        uint256 index = this.getFortuneReceiverIndex(receiver);
        feeReceivers[index].percentage = percentage;
    }

    function removeFortuneReceiver(address receiver)
        external
        virtual
        onlyOwner
    {
        uint256 index = this.getFortuneReceiverIndex(receiver);
        feeReceivers[index] = FeeReceiver(LIMBO_DOOR, 0);
        membersCounter--;
    }

    function sendNativeKindomFortune() external virtual {
        require(address(this).balance > 0, "no fortune to send");
        require(membersCounter > 0, "no fortune receivers");
        for (uint256 index = 0; index < membersCounter; index++) {
            FeeReceiver memory feeReceiver = feeReceivers[index];
            if (feeReceiver.receiver != LIMBO_DOOR) {
                IERC20(sendFeeTokenAddress).transferFrom(
                    address(this),
                    feeReceiver.receiver,
                    (address(this).balance * feeReceiver.percentage) /
                        masterTaxDivisor
                );
            }
        }
    }

    function getReceibersAmount(address tokenAddress)
        private
        returns (uint256[] memory)
    {
        uint256[] memory amounts = new uint256[](membersCounter);
        for (uint256 index = 0; index < membersCounter; index++) {
            FeeReceiver memory feeReceiver = feeReceivers[index];
            if (feeReceiver.receiver != LIMBO_DOOR) {
                amounts[index] =
                    (this.getTokensFortune(tokenAddress) *
                        feeReceiver.percentage) /
                    masterTaxDivisor;
            }
        }
        return amounts;
    }

    function sendTokensFortune(address tokenAddress) external virtual {
        require(this.getTokensFortune(tokenAddress) > 0, "no fortune to send");
        require(membersCounter > 0, "no fortune receivers");
        uint256[] memory amounts = getReceibersAmount(tokenAddress);
        for (uint256 index = 0; index < 6; index++) {
            FeeReceiver memory feeReceiver = feeReceivers[index];
            if (feeReceiver.receiver != LIMBO_DOOR) {
                IERC20(sendFeeTokenAddress).transferFrom(
                    address(this),
                    feeReceiver.receiver,
                    amounts[index]
                );
            }
        }
    }
}
