/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IMidasGoldRouterInterface extends ethers.utils.Interface {
  functions: {
    "getMinimunTokenAmout(address,string)": FunctionFragment;
    "getNativeNetworkCurrencyPriceInUsd()": FunctionFragment;
    "getRequiredEthAmount(string)": FunctionFragment;
    "isPayingWithNativeCurrency(address)": FunctionFragment;
    "swapBnbForUSD(uint256)": FunctionFragment;
    "swapTokensForStableCoin(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMinimunTokenAmout",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNativeNetworkCurrencyPriceInUsd",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequiredEthAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPayingWithNativeCurrency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapBnbForUSD",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForStableCoin",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMinimunTokenAmout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNativeNetworkCurrencyPriceInUsd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequiredEthAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPayingWithNativeCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapBnbForUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForStableCoin",
    data: BytesLike
  ): Result;

  events: {};
}

export class IMidasGoldRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IMidasGoldRouterInterface;

  functions: {
    getMinimunTokenAmout(
      tokenAddress: string,
      network: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNativeNetworkCurrencyPriceInUsd(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRequiredEthAmount(
      network: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isPayingWithNativeCurrency(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    swapBnbForUSD(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapTokensForStableCoin(
      tokenAddress: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getMinimunTokenAmout(
    tokenAddress: string,
    network: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNativeNetworkCurrencyPriceInUsd(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRequiredEthAmount(
    network: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isPayingWithNativeCurrency(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  swapBnbForUSD(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapTokensForStableCoin(
    tokenAddress: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getMinimunTokenAmout(
      tokenAddress: string,
      network: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNativeNetworkCurrencyPriceInUsd(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequiredEthAmount(
      network: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPayingWithNativeCurrency(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swapBnbForUSD(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokensForStableCoin(
      tokenAddress: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getMinimunTokenAmout(
      tokenAddress: string,
      network: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNativeNetworkCurrencyPriceInUsd(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequiredEthAmount(
      network: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPayingWithNativeCurrency(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapBnbForUSD(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapTokensForStableCoin(
      tokenAddress: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMinimunTokenAmout(
      tokenAddress: string,
      network: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNativeNetworkCurrencyPriceInUsd(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequiredEthAmount(
      network: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPayingWithNativeCurrency(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapBnbForUSD(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForStableCoin(
      tokenAddress: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}