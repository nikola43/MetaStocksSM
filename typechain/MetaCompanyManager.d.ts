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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MetaCompanyManagerInterface extends ethers.utils.Interface {
  functions: {
    "burnMetaFranchise(address,uint256,uint256,uint8)": FunctionFragment;
    "ceos(address)": FunctionFragment;
    "ceosCompanies(address)": FunctionFragment;
    "claimFromAllFranchises()": FunctionFragment;
    "claimFromAllFranchisesBNB()": FunctionFragment;
    "companiesCeos(uint256)": FunctionFragment;
    "createCompany(address)": FunctionFragment;
    "createFranchise(address)": FunctionFragment;
    "createMetaFranchiseUsingBNB(uint256)": FunctionFragment;
    "createMetaFranchiseUsingUnclaimedBNB(uint256)": FunctionFragment;
    "getCEOS()": FunctionFragment;
    "getCompanyCEOAddress(uint256)": FunctionFragment;
    "getCompanyId(address)": FunctionFragment;
    "getCreateFranchisePriceBNB()": FunctionFragment;
    "getFranchiseValue()": FunctionFragment;
    "getFranchisesLastClaimDates(address)": FunctionFragment;
    "getMetaFranchisesUnclaimedRewards(address)": FunctionFragment;
    "getMetaFranchisesUnclaimedRewardsBNB(address)": FunctionFragment;
    "getNumberOfMetaFranchises(address)": FunctionFragment;
    "getTotalCeos()": FunctionFragment;
    "getTotalCompanies()": FunctionFragment;
    "getTotalFranchises()": FunctionFragment;
    "getTotalInvested()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "isCeo(address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "paused()": FunctionFragment;
    "self()": FunctionFragment;
    "sellMetaFranchise(address,uint256,uint256,uint8)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burnMetaFranchise",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ceos", values: [string]): string;
  encodeFunctionData(
    functionFragment: "ceosCompanies",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromAllFranchises",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromAllFranchisesBNB",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "companiesCeos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createCompany",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createFranchise",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createMetaFranchiseUsingBNB",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createMetaFranchiseUsingUnclaimedBNB",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getCEOS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCompanyCEOAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCompanyId",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreateFranchisePriceBNB",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFranchiseValue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFranchisesLastClaimDates",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetaFranchisesUnclaimedRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMetaFranchisesUnclaimedRewardsBNB",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumberOfMetaFranchises",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalCeos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalCompanies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalFranchises",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalInvested",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "isCeo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "self", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sellMetaFranchise",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "burnMetaFranchise",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ceos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ceosCompanies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromAllFranchises",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromAllFranchisesBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "companiesCeos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFranchise",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMetaFranchiseUsingBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMetaFranchiseUsingUnclaimedBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCEOS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCompanyCEOAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompanyId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreateFranchisePriceBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFranchiseValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFranchisesLastClaimDates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetaFranchisesUnclaimedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetaFranchisesUnclaimedRewardsBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumberOfMetaFranchises",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalCeos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalCompanies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalFranchises",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalInvested",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isCeo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "self", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellMetaFranchise",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CreateCompany(address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateCompany"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type CreateCompanyEvent = TypedEvent<
  [string, BigNumber] & { account: string; companyId: BigNumber }
>;

export type InitializedEvent = TypedEvent<[number] & { version: number }>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class MetaCompanyManager extends BaseContract {
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

  interface: MetaCompanyManagerInterface;

  functions: {
    burnMetaFranchise(
      to: string,
      companyId: BigNumberish,
      amount: BigNumberish,
      _metaFranchiseType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ceos(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    ceosCompanies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimFromAllFranchises(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimFromAllFranchisesBNB(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    companiesCeos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createCompany(
      account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createFranchise(
      _account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createMetaFranchiseUsingBNB(
      _number: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createMetaFranchiseUsingUnclaimedBNB(
      _number: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCEOS(overrides?: CallOverrides): Promise<[string[]]>;

    getCompanyCEOAddress(
      companyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getCompanyId(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCreateFranchisePriceBNB(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFranchiseValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFranchisesLastClaimDates(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getMetaFranchisesUnclaimedRewards(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMetaFranchisesUnclaimedRewardsBNB(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNumberOfMetaFranchises(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalCeos(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalCompanies(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalFranchises(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalInvested(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _metaCompanyAddress: string,
      _metaFranchiseManagerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isCeo(_account: string, overrides?: CallOverrides): Promise<[boolean]>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    self(overrides?: CallOverrides): Promise<[string]>;

    sellMetaFranchise(
      to: string,
      companyId: BigNumberish,
      amount: BigNumberish,
      _metaFranchiseType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  burnMetaFranchise(
    to: string,
    companyId: BigNumberish,
    amount: BigNumberish,
    _metaFranchiseType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ceos(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  ceosCompanies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  claimFromAllFranchises(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimFromAllFranchisesBNB(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  companiesCeos(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  createCompany(
    account: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createFranchise(
    _account: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createMetaFranchiseUsingBNB(
    _number: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createMetaFranchiseUsingUnclaimedBNB(
    _number: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCEOS(overrides?: CallOverrides): Promise<string[]>;

  getCompanyCEOAddress(
    companyId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getCompanyId(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

  getCreateFranchisePriceBNB(overrides?: CallOverrides): Promise<BigNumber>;

  getFranchiseValue(overrides?: CallOverrides): Promise<BigNumber>;

  getFranchisesLastClaimDates(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getMetaFranchisesUnclaimedRewards(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMetaFranchisesUnclaimedRewardsBNB(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNumberOfMetaFranchises(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalCeos(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalCompanies(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalFranchises(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalInvested(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _metaCompanyAddress: string,
    _metaFranchiseManagerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isCeo(_account: string, overrides?: CallOverrides): Promise<boolean>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  self(overrides?: CallOverrides): Promise<string>;

  sellMetaFranchise(
    to: string,
    companyId: BigNumberish,
    amount: BigNumberish,
    _metaFranchiseType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    burnMetaFranchise(
      to: string,
      companyId: BigNumberish,
      amount: BigNumberish,
      _metaFranchiseType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ceos(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    ceosCompanies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimFromAllFranchises(overrides?: CallOverrides): Promise<void>;

    claimFromAllFranchisesBNB(overrides?: CallOverrides): Promise<void>;

    companiesCeos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createCompany(account: string, overrides?: CallOverrides): Promise<void>;

    createFranchise(_account: string, overrides?: CallOverrides): Promise<void>;

    createMetaFranchiseUsingBNB(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createMetaFranchiseUsingUnclaimedBNB(
      _number: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getCEOS(overrides?: CallOverrides): Promise<string[]>;

    getCompanyCEOAddress(
      companyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getCompanyId(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreateFranchisePriceBNB(overrides?: CallOverrides): Promise<BigNumber>;

    getFranchiseValue(overrides?: CallOverrides): Promise<BigNumber>;

    getFranchisesLastClaimDates(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getMetaFranchisesUnclaimedRewards(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetaFranchisesUnclaimedRewardsBNB(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfMetaFranchises(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalCeos(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalCompanies(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalFranchises(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalInvested(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _metaCompanyAddress: string,
      _metaFranchiseManagerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isCeo(_account: string, overrides?: CallOverrides): Promise<boolean>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    self(overrides?: CallOverrides): Promise<string>;

    sellMetaFranchise(
      to: string,
      companyId: BigNumberish,
      amount: BigNumberish,
      _metaFranchiseType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CreateCompany(address,uint256)"(
      account?: string | null,
      companyId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; companyId: BigNumber }
    >;

    CreateCompany(
      account?: string | null,
      companyId?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; companyId: BigNumber }
    >;

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

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    burnMetaFranchise(
      to: string,
      companyId: BigNumberish,
      amount: BigNumberish,
      _metaFranchiseType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ceos(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    ceosCompanies(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    claimFromAllFranchises(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimFromAllFranchisesBNB(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    companiesCeos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createCompany(
      account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createFranchise(
      _account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createMetaFranchiseUsingBNB(
      _number: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createMetaFranchiseUsingUnclaimedBNB(
      _number: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCEOS(overrides?: CallOverrides): Promise<BigNumber>;

    getCompanyCEOAddress(
      companyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCompanyId(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCreateFranchisePriceBNB(overrides?: CallOverrides): Promise<BigNumber>;

    getFranchiseValue(overrides?: CallOverrides): Promise<BigNumber>;

    getFranchisesLastClaimDates(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetaFranchisesUnclaimedRewards(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMetaFranchisesUnclaimedRewardsBNB(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumberOfMetaFranchises(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalCeos(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalCompanies(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalFranchises(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalInvested(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _metaCompanyAddress: string,
      _metaFranchiseManagerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isCeo(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    self(overrides?: CallOverrides): Promise<BigNumber>;

    sellMetaFranchise(
      to: string,
      companyId: BigNumberish,
      amount: BigNumberish,
      _metaFranchiseType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burnMetaFranchise(
      to: string,
      companyId: BigNumberish,
      amount: BigNumberish,
      _metaFranchiseType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ceos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ceosCompanies(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimFromAllFranchises(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimFromAllFranchisesBNB(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    companiesCeos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createCompany(
      account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createFranchise(
      _account: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createMetaFranchiseUsingBNB(
      _number: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createMetaFranchiseUsingUnclaimedBNB(
      _number: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCEOS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCompanyCEOAddress(
      companyId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCompanyId(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreateFranchisePriceBNB(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFranchiseValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFranchisesLastClaimDates(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMetaFranchisesUnclaimedRewards(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMetaFranchisesUnclaimedRewardsBNB(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumberOfMetaFranchises(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalCeos(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalCompanies(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalFranchises(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalInvested(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _metaCompanyAddress: string,
      _metaFranchiseManagerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isCeo(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    self(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sellMetaFranchise(
      to: string,
      companyId: BigNumberish,
      amount: BigNumberish,
      _metaFranchiseType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
