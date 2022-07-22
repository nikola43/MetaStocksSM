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

interface TykheFortuneDistributorInterface extends ethers.utils.Interface {
  functions: {
    "addFortuneReceiver(address,uint256)": FunctionFragment;
    "addFortuneReceivers(address[],uint256[])": FunctionFragment;
    "getFortuneReceiver(address)": FunctionFragment;
    "getFortuneReceiverIndex(address)": FunctionFragment;
    "getMembersCounter()": FunctionFragment;
    "getNativeKindomFortune()": FunctionFragment;
    "getSendFeeTokenAddress()": FunctionFragment;
    "getTokensFortune(address)": FunctionFragment;
    "initialize()": FunctionFragment;
    "removeFortuneReceiver(address)": FunctionFragment;
    "sendNativeKindomFortune()": FunctionFragment;
    "sendTokensFortune(address)": FunctionFragment;
    "setSendFeeTokenAddress(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateFortuneReceiverPercentage(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addFortuneReceiver",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addFortuneReceivers",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFortuneReceiver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getFortuneReceiverIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMembersCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNativeKindomFortune",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSendFeeTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensFortune",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeFortuneReceiver",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "sendNativeKindomFortune",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendTokensFortune",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendFeeTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFortuneReceiverPercentage",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addFortuneReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addFortuneReceivers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFortuneReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFortuneReceiverIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMembersCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNativeKindomFortune",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendFeeTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensFortune",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeFortuneReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendNativeKindomFortune",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendTokensFortune",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendFeeTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFortuneReceiverPercentage",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class TykheFortuneDistributor extends BaseContract {
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

  interface: TykheFortuneDistributorInterface;

  functions: {
    addFortuneReceiver(
      receiver: string,
      percentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addFortuneReceivers(
      receivers: string[],
      percentage: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFortuneReceiver(
      _feesReceiverAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFortuneReceiverIndex(
      _feesReceiverAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMembersCounter(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getNativeKindomFortune(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getSendFeeTokenAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTokensFortune(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeFortuneReceiver(
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendNativeKindomFortune(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendTokensFortune(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSendFeeTokenAddress(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateFortuneReceiverPercentage(
      receiver: string,
      percentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addFortuneReceiver(
    receiver: string,
    percentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addFortuneReceivers(
    receivers: string[],
    percentage: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFortuneReceiver(
    _feesReceiverAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFortuneReceiverIndex(
    _feesReceiverAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMembersCounter(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getNativeKindomFortune(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getSendFeeTokenAddress(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTokensFortune(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeFortuneReceiver(
    receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendNativeKindomFortune(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendTokensFortune(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSendFeeTokenAddress(
    newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateFortuneReceiverPercentage(
    receiver: string,
    percentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addFortuneReceiver(
      receiver: string,
      percentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addFortuneReceivers(
      receivers: string[],
      percentage: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getFortuneReceiver(
      _feesReceiverAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getFortuneReceiverIndex(
      _feesReceiverAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMembersCounter(overrides?: CallOverrides): Promise<BigNumber>;

    getNativeKindomFortune(overrides?: CallOverrides): Promise<BigNumber>;

    getSendFeeTokenAddress(overrides?: CallOverrides): Promise<string>;

    getTokensFortune(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(overrides?: CallOverrides): Promise<void>;

    removeFortuneReceiver(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sendNativeKindomFortune(overrides?: CallOverrides): Promise<void>;

    sendTokensFortune(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSendFeeTokenAddress(
      newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFortuneReceiverPercentage(
      receiver: string,
      percentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    Initialized(
      version?: null
    ): TypedEventFilter<[number], { version: number }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addFortuneReceiver(
      receiver: string,
      percentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addFortuneReceivers(
      receivers: string[],
      percentage: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFortuneReceiver(
      _feesReceiverAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFortuneReceiverIndex(
      _feesReceiverAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMembersCounter(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getNativeKindomFortune(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getSendFeeTokenAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTokensFortune(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeFortuneReceiver(
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendNativeKindomFortune(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendTokensFortune(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSendFeeTokenAddress(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateFortuneReceiverPercentage(
      receiver: string,
      percentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addFortuneReceiver(
      receiver: string,
      percentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addFortuneReceivers(
      receivers: string[],
      percentage: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFortuneReceiver(
      _feesReceiverAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFortuneReceiverIndex(
      _feesReceiverAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMembersCounter(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getNativeKindomFortune(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getSendFeeTokenAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTokensFortune(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeFortuneReceiver(
      receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendNativeKindomFortune(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendTokensFortune(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSendFeeTokenAddress(
      newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateFortuneReceiverPercentage(
      receiver: string,
      percentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
