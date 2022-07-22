// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IMidasGoldRouter {
    function getNativeNetworkCurrencyPriceInUsd()
        external
        view
        returns (uint256);

    function isPayingWithNativeCurrency(address tokenAddress)
        external
        view
        returns (bool);

    function getRequiredEthAmount(string memory network)
        external
        view
        returns (uint256);

    function swapBnbForUSD(uint256 _amount) external;

    function getMinimunTokenAmout(address tokenAddress, string memory network)
        external
        view
        returns (uint256);

    function swapTokensForStableCoin(
        address tokenAddress,
        address to,
        uint256 amount
    ) external;
}
