/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface MidasGoldOracleInterface extends utils.Interface {
  functions: {
    "_managers(address)": FunctionFragment;
    "addLiquidity(address,address,uint256,uint256)": FunctionFragment;
    "availableChainlinkNet(string)": FunctionFragment;
    "creationTokenPrice()": FunctionFragment;
    "estimatedTokensForTokens(address,address,uint256)": FunctionFragment;
    "getDexRouter()": FunctionFragment;
    "getDexRouterAddress()": FunctionFragment;
    "getKimdomTokenPriceOracle()": FunctionFragment;
    "getMinimunTokenAmout(address,string)": FunctionFragment;
    "getNativeNetworkCurrencyPriceInUsd()": FunctionFragment;
    "getNativeTokenAddress(uint256)": FunctionFragment;
    "getRequiredEthAmount(string)": FunctionFragment;
    "getStableCoinAddress(uint256)": FunctionFragment;
    "getTokensValueInUSD(address,uint256)": FunctionFragment;
    "initialize(address,address,address,address,uint256)": FunctionFragment;
    "isInSwap()": FunctionFragment;
    "isPayingWithNativeCurrency(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "self()": FunctionFragment;
    "setDexRouter(address)": FunctionFragment;
    "setOracles(address)": FunctionFragment;
    "swapTokensForNativeToken(address,address,uint256)": FunctionFragment;
    "swapTokensForStableCoin(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_managers"
      | "addLiquidity"
      | "availableChainlinkNet"
      | "creationTokenPrice"
      | "estimatedTokensForTokens"
      | "getDexRouter"
      | "getDexRouterAddress"
      | "getKimdomTokenPriceOracle"
      | "getMinimunTokenAmout"
      | "getNativeNetworkCurrencyPriceInUsd"
      | "getNativeTokenAddress"
      | "getRequiredEthAmount"
      | "getStableCoinAddress"
      | "getTokensValueInUSD"
      | "initialize"
      | "isInSwap"
      | "isPayingWithNativeCurrency"
      | "owner"
      | "self"
      | "setDexRouter"
      | "setOracles"
      | "swapTokensForNativeToken"
      | "swapTokensForStableCoin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_managers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "availableChainlinkNet",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "creationTokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "estimatedTokensForTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDexRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDexRouterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getKimdomTokenPriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimunTokenAmout",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNativeNetworkCurrencyPriceInUsd",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNativeTokenAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequiredEthAmount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStableCoinAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensValueInUSD",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "isInSwap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isPayingWithNativeCurrency",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "self", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDexRouter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOracles",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForNativeToken",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForStableCoin",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "_managers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "availableChainlinkNet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creationTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimatedTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDexRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDexRouterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getKimdomTokenPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimunTokenAmout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNativeNetworkCurrencyPriceInUsd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNativeTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequiredEthAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStableCoinAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensValueInUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isInSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPayingWithNativeCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "self", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDexRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForNativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForStableCoin",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MidasGoldOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MidasGoldOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _managers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    addLiquidity(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      ethAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    availableChainlinkNet(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    creationTokenPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    estimatedTokensForTokens(
      add1: PromiseOrValue<string>,
      add2: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDexRouter(overrides?: CallOverrides): Promise<[string]>;

    getDexRouterAddress(overrides?: CallOverrides): Promise<[string]>;

    getKimdomTokenPriceOracle(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinimunTokenAmout(
      tokenAddress: PromiseOrValue<string>,
      network: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNativeNetworkCurrencyPriceInUsd(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNativeTokenAddress(
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRequiredEthAmount(
      network: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStableCoinAddress(
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTokensValueInUSD(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      goldOracleAddress: PromiseOrValue<string>,
      kindomTokenAddress: PromiseOrValue<string>,
      _midasMultinetworkRouter: PromiseOrValue<string>,
      _stableCoinAddress: PromiseOrValue<string>,
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isInSwap(overrides?: CallOverrides): Promise<[boolean]>;

    isPayingWithNativeCurrency(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    self(overrides?: CallOverrides): Promise<[string]>;

    setDexRouter(
      _midasMultinetworkRouterAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOracles(
      kindomTokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapTokensForNativeToken(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapTokensForStableCoin(
      tokenAddress: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _managers(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  addLiquidity(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    tokenAmount: PromiseOrValue<BigNumberish>,
    ethAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  availableChainlinkNet(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  creationTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

  estimatedTokensForTokens(
    add1: PromiseOrValue<string>,
    add2: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDexRouter(overrides?: CallOverrides): Promise<string>;

  getDexRouterAddress(overrides?: CallOverrides): Promise<string>;

  getKimdomTokenPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

  getMinimunTokenAmout(
    tokenAddress: PromiseOrValue<string>,
    network: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNativeNetworkCurrencyPriceInUsd(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNativeTokenAddress(
    _networkId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRequiredEthAmount(
    network: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStableCoinAddress(
    _networkId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTokensValueInUSD(
    _tokenAddress: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    goldOracleAddress: PromiseOrValue<string>,
    kindomTokenAddress: PromiseOrValue<string>,
    _midasMultinetworkRouter: PromiseOrValue<string>,
    _stableCoinAddress: PromiseOrValue<string>,
    _networkId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isInSwap(overrides?: CallOverrides): Promise<boolean>;

  isPayingWithNativeCurrency(
    tokenAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  self(overrides?: CallOverrides): Promise<string>;

  setDexRouter(
    _midasMultinetworkRouterAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOracles(
    kindomTokenAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapTokensForNativeToken(
    token: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapTokensForStableCoin(
    tokenAddress: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _managers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addLiquidity(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      ethAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    availableChainlinkNet(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    creationTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    estimatedTokensForTokens(
      add1: PromiseOrValue<string>,
      add2: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDexRouter(overrides?: CallOverrides): Promise<string>;

    getDexRouterAddress(overrides?: CallOverrides): Promise<string>;

    getKimdomTokenPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getMinimunTokenAmout(
      tokenAddress: PromiseOrValue<string>,
      network: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNativeNetworkCurrencyPriceInUsd(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNativeTokenAddress(
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRequiredEthAmount(
      network: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStableCoinAddress(
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokensValueInUSD(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      goldOracleAddress: PromiseOrValue<string>,
      kindomTokenAddress: PromiseOrValue<string>,
      _midasMultinetworkRouter: PromiseOrValue<string>,
      _stableCoinAddress: PromiseOrValue<string>,
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    isInSwap(overrides?: CallOverrides): Promise<boolean>;

    isPayingWithNativeCurrency(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    self(overrides?: CallOverrides): Promise<string>;

    setDexRouter(
      _midasMultinetworkRouterAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracles(
      kindomTokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokensForNativeToken(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapTokensForStableCoin(
      tokenAddress: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _managers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidity(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      ethAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    availableChainlinkNet(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creationTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    estimatedTokensForTokens(
      add1: PromiseOrValue<string>,
      add2: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDexRouter(overrides?: CallOverrides): Promise<BigNumber>;

    getDexRouterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getKimdomTokenPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getMinimunTokenAmout(
      tokenAddress: PromiseOrValue<string>,
      network: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNativeNetworkCurrencyPriceInUsd(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNativeTokenAddress(
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRequiredEthAmount(
      network: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStableCoinAddress(
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokensValueInUSD(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      goldOracleAddress: PromiseOrValue<string>,
      kindomTokenAddress: PromiseOrValue<string>,
      _midasMultinetworkRouter: PromiseOrValue<string>,
      _stableCoinAddress: PromiseOrValue<string>,
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isInSwap(overrides?: CallOverrides): Promise<BigNumber>;

    isPayingWithNativeCurrency(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    self(overrides?: CallOverrides): Promise<BigNumber>;

    setDexRouter(
      _midasMultinetworkRouterAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOracles(
      kindomTokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapTokensForNativeToken(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapTokensForStableCoin(
      tokenAddress: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _managers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addLiquidity(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      tokenAmount: PromiseOrValue<BigNumberish>,
      ethAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    availableChainlinkNet(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creationTokenPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimatedTokensForTokens(
      add1: PromiseOrValue<string>,
      add2: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDexRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDexRouterAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getKimdomTokenPriceOracle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinimunTokenAmout(
      tokenAddress: PromiseOrValue<string>,
      network: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNativeNetworkCurrencyPriceInUsd(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNativeTokenAddress(
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRequiredEthAmount(
      network: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStableCoinAddress(
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokensValueInUSD(
      _tokenAddress: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      goldOracleAddress: PromiseOrValue<string>,
      kindomTokenAddress: PromiseOrValue<string>,
      _midasMultinetworkRouter: PromiseOrValue<string>,
      _stableCoinAddress: PromiseOrValue<string>,
      _networkId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isInSwap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPayingWithNativeCurrency(
      tokenAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    self(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDexRouter(
      _midasMultinetworkRouterAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOracles(
      kindomTokenAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForNativeToken(
      token: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForStableCoin(
      tokenAddress: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
