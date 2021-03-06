/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
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

export interface IDividendPayingTokenInterface extends utils.Interface {
  functions: {
    "distributeDividends()": FunctionFragment;
    "dividendOf(address)": FunctionFragment;
    "withdrawDividend()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "distributeDividends"
      | "dividendOf"
      | "withdrawDividend"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "distributeDividends",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dividendOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDividend",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "distributeDividends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dividendOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDividend",
    data: BytesLike
  ): Result;

  events: {
    "DividendWithdrawn(address,uint256)": EventFragment;
    "DividendsDistributed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DividendWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DividendsDistributed"): EventFragment;
}

export interface DividendWithdrawnEventObject {
  to: string;
  weiAmount: BigNumber;
}
export type DividendWithdrawnEvent = TypedEvent<
  [string, BigNumber],
  DividendWithdrawnEventObject
>;

export type DividendWithdrawnEventFilter =
  TypedEventFilter<DividendWithdrawnEvent>;

export interface DividendsDistributedEventObject {
  from: string;
  weiAmount: BigNumber;
}
export type DividendsDistributedEvent = TypedEvent<
  [string, BigNumber],
  DividendsDistributedEventObject
>;

export type DividendsDistributedEventFilter =
  TypedEventFilter<DividendsDistributedEvent>;

export interface IDividendPayingToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDividendPayingTokenInterface;

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
    distributeDividends(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dividendOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawDividend(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  distributeDividends(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dividendOf(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdrawDividend(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    distributeDividends(overrides?: CallOverrides): Promise<void>;

    dividendOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawDividend(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "DividendWithdrawn(address,uint256)"(
      to?: PromiseOrValue<string> | null,
      weiAmount?: null
    ): DividendWithdrawnEventFilter;
    DividendWithdrawn(
      to?: PromiseOrValue<string> | null,
      weiAmount?: null
    ): DividendWithdrawnEventFilter;

    "DividendsDistributed(address,uint256)"(
      from?: PromiseOrValue<string> | null,
      weiAmount?: null
    ): DividendsDistributedEventFilter;
    DividendsDistributed(
      from?: PromiseOrValue<string> | null,
      weiAmount?: null
    ): DividendsDistributedEventFilter;
  };

  estimateGas: {
    distributeDividends(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dividendOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawDividend(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    distributeDividends(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dividendOf(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawDividend(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
