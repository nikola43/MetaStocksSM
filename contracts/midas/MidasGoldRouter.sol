// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IMidasMultinetworkRouter.sol";

contract MidasGoldOracle is Initializable {
    address private _owner;
    AggregatorV3Interface private kimdomTokenPriceOracle;

    IMidasMultinetworkRouter midasMultinetworkRouter;

    mapping(string => bool) public availableChainlinkNet;
    mapping(address => bool) public _managers;
    uint256 public creationTokenPrice;
    address private aggregatorAddress;
    address public owner;

    address private stableCoinAddress;
    bool private inSwap; // used for dont take fee on swaps
    uint256 private networkId;

    modifier swapping() {
        inSwap = true;
        _;
        inSwap = false;
    }

    function initialize(
        address goldOracleAddress,
        address kindomTokenAddress,
        address _midasMultinetworkRouter,
        address _stableCoinAddress,
        uint256 _networkId
    ) public initializer {
        owner = msg.sender;
        kimdomTokenPriceOracle = AggregatorV3Interface(kindomTokenAddress);

        midasMultinetworkRouter = IMidasMultinetworkRouter(
            _midasMultinetworkRouter
        );
        networkId = _networkId;
        stableCoinAddress = _stableCoinAddress;
    }

    // Modifier to verify the caller is the owner of the contract
    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    function self() public view returns (address) {
        return address(this);
    }

    function isPayingWithNativeCurrency(address tokenAddress)
        external
        view
        returns (bool)
    {
        return
            tokenAddress == midasMultinetworkRouter.getNativeTokenAddress(97);
    }

    function setOracles(address kindomTokenAddress) public onlyOwner {
        kimdomTokenPriceOracle = AggregatorV3Interface(kindomTokenAddress);
    }

    function getKimdomTokenPriceOracle() public view returns (uint256) {
        return uint256(askOracle(kimdomTokenPriceOracle));
    }

    function askOracle(AggregatorV3Interface oracle)
        internal
        view
        returns (int256)
    {
        (
            ,
            /*uint80 roundID*/
            int256 price, /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
            ,
            ,

        ) = oracle.latestRoundData();
        return price;
    }

    function getRequiredEthAmount(string memory network)
        public
        view
        returns (uint256)
    {
        uint256 nativeTokenPrice;

        // contract need know if user are using network available on chainlink
        // for get native crypto price from chainlink or from router pool
        if (availableChainlinkNet[network]) {
            nativeTokenPrice = uint256(
                midasMultinetworkRouter.getNativeNetworkCurrencyPriceInUsd()
            );
        } else {
            // get price from router pool
            nativeTokenPrice = estimatedTokensForTokens(
                midasMultinetworkRouter.getNativeTokenAddress(97),
                stableCoinAddress,
                1 ether
            );
        }

        return (creationTokenPrice / nativeTokenPrice) * 1e8;
    }

    function getMinimunTokenAmout(address tokenAddress, string memory network)
        public
        view
        returns (uint256)
    {
        return
            estimatedTokensForTokens(
                tokenAddress,
                midasMultinetworkRouter.getNativeTokenAddress(97),
                getRequiredEthAmount(network)
            );
    }

    // return amount of tokenA needed to buy 1 tokenB
    function estimatedTokensForTokens(
        address add1,
        address add2,
        uint256 amount
    ) public view returns (uint256) {
        return
            midasMultinetworkRouter.getDexRouter().getAmountsOut(
                amount,
                pathTokensForTokens(add1, add2)
            )[1];
    }

    function getDexRouter() external view returns (IMidasMultinetworkRouter) {
        return midasMultinetworkRouter;
    }

    function setDexRouter(address _midasMultinetworkRouterAddress) external {
        midasMultinetworkRouter = IMidasMultinetworkRouter(
            _midasMultinetworkRouterAddress
        );
    }

    // return the route given the busd addresses and the token
    function pathTokensForTokens(address add1, address add2)
        private
        pure
        returns (address[] memory)
    {
        address[] memory path = new address[](2);
        path[0] = add1;
        path[1] = add2;
        return path;
    }

    function isInSwap() external view returns (bool) {
        return inSwap;
    }

    function getStableCoinAddress(uint256 _networkId)
        public
        pure
        returns (address)
    {
        address networkTokenAddress = 0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7;
        if (_networkId == 97) {
            //bsc tesnet
            networkTokenAddress = 0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7;
        } else if (_networkId == 56) {
            //bsc mainnet
            networkTokenAddress = 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c;
        } else if (_networkId == 43113) {
            //avalanche fuji
            networkTokenAddress = 0xd00ae08403B9bbb9124bB305C09058E32C39A48c;
        } else if (_networkId == 43114) {
            //avalanche mainnet
            networkTokenAddress = 0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7;
        } else if (_networkId == 4002) {
            //fantom testnet
            networkTokenAddress = 0xf1277d1Ed8AD466beddF92ef448A132661956621;
        } else if (_networkId == 250) {
            //fantom mainnet
            networkTokenAddress = 0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83;
        } else if (_networkId == 80001) {
            //polygon testnet
            networkTokenAddress = 0x0000000000000000000000000000000000001010;
        } else if (_networkId == 137) {
            //polygon mainnet
            networkTokenAddress = 0x0000000000000000000000000000000000001010;
        } else {
            revert("unsupported network");
        }

        return networkTokenAddress;
    }

    function getNativeTokenAddress(uint256 _networkId)
        external
        pure
        returns (address)
    {
        address networkTokenAddress = 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd;
        if (_networkId == 97) {
            networkTokenAddress = 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd;
        } else if (_networkId == 97) {
            networkTokenAddress = 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd;
        } else {
            revert("unsupported network");
        }

        return networkTokenAddress;
    }

    function getDexRouterAddress() external view returns (address) {
        return address(midasMultinetworkRouter);
    }

    function swapTokensForStableCoin(
        address tokenAddress,
        address to,
        uint256 amount
    ) external {
        address[] memory path = new address[](3);
        path[0] = tokenAddress;
        path[1] = this.getNativeTokenAddress(networkId);
        path[2] = stableCoinAddress;

        // Do approve for router spend swap token amount
        IERC20(stableCoinAddress).approve(
            address(midasMultinetworkRouter),
            type(uint256).max
        );

        // swap and transfer to contract
        midasMultinetworkRouter
            .swapExactTokensForTokensSupportingFeeOnTransferTokens(
                amount,
                0,
                path,
                to,
                block.timestamp + 1000
            );
    }

    function swapTokensForNativeToken(
        address token,
        address to,
        uint256 amount
    ) external {
        // generate the uniswap pair path of token -> weth
        address[] memory path = new address[](2);
        path[0] = token;
        path[1] = this.getNativeTokenAddress(networkId);

        IERC20(token).approve(
            address(midasMultinetworkRouter),
            type(uint256).max
        );

        // make the swap
        midasMultinetworkRouter
            .swapExactTokensForETHSupportingFeeOnTransferTokens(
                amount,
                0, // accept any amount of ETH
                path,
                to,
                block.timestamp
            );
    }

    /// @notice return the route given the busd addresses and the token
    function getPathForTokensToTokens(
        address tokenAddressA,
        address tokenAddressB
    ) private pure returns (address[] memory) {
        address[] memory path = new address[](2);
        path[0] = tokenAddressA;
        path[1] = tokenAddressB;
        return path;
    }

    function addLiquidity(
        address token,
        address to,
        uint256 tokenAmount,
        uint256 ethAmount
    ) external {
        // approve token transfer to cover all possible scenarios
        IERC20(token).approve(
            address(midasMultinetworkRouter),
            type(uint256).max
        );

        // add the liquidity
        midasMultinetworkRouter.addLiquidityETH{value: ethAmount}(
            address(this),
            tokenAmount,
            0, // slippage is unavoidable
            0, // slippage is unavoidable
            to, // send lp tokens to owner
            block.timestamp + 10000
        );
    }

    // IERC20(paymentTokenAddress).approve(self(), type(uint256).max);
    function getNativeNetworkCurrencyPriceInUsd()
        external
        view
        returns (uint256)
    {
        return uint256(askOracle(kimdomTokenPriceOracle));
    }

    // IERC20(paymentTokenAddress).approve(self(), type(uint256).max);
    function getTokensValueInUSD(address _tokenAddress, uint256 _amount)
        public
        view
        returns (uint256)
    {
        uint256 nativeNetworkCurrencyPrice = uint256(
            askOracle(kimdomTokenPriceOracle)
        ) * 1e10;
        address[] memory path = new address[](3);
        path[0] = _tokenAddress;
        path[1] = this.getNativeTokenAddress(networkId);
        path[2] = getStableCoinAddress(networkId);
        uint256[] memory amountsOut = midasMultinetworkRouter.getAmountsOut(
            _amount,
            path
        );
        uint256 tokenAmount = amountsOut[1];
        return (nativeNetworkCurrencyPrice * tokenAmount) / 1000000000000000000;
    }
}
