/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CronusTimeKeeper,
  CronusTimeKeeperInterface,
} from "../../../../contracts/chainlinkOracles/CronusTimeOracle.sol/CronusTimeKeeper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tykheAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104de806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634585e33b1461005c5780636e04ff0d14610071578063b2bdfa7b1461009b578063c4d66de8146100c6578063f2fde38b146100d9575b600080fd5b61006f61006a366004610383565b6100ec565b005b61008461007f366004610383565b610162565b6040516100929291906103f4565b60405180910390f35b6003546100ae906001600160a01b031681565b6040516001600160a01b039091168152602001610092565b61006f6100d4366004610453565b610181565b61006f6100e7366004610453565b6102b5565b6001546002546100fc9042610483565b111561015e576004805460408051638b95b54760e01b815290516001600160a01b0390921692638b95b54792828201926000929082900301818387803b15801561014557600080fd5b505af1158015610159573d6000803e3d6000fd5b505050505b5050565b60006060600154600254426101779190610483565b1191509250929050565b600054610100900460ff16158080156101a15750600054600160ff909116105b806101bb5750303b1580156101bb575060005460ff166001145b6102235760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610246576000805461ff0019166101001790555b6201518060015542600255600480546001600160a01b0319166001600160a01b038416179055801561015e576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6003546001600160a01b031633146102cc57600080fd5b6001600160a01b0381166103315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161021a565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000806020838503121561039657600080fd5b82356001600160401b03808211156103ad57600080fd5b818501915085601f8301126103c157600080fd5b8135818111156103d057600080fd5b8660208285010111156103e257600080fd5b60209290920196919550909350505050565b821515815260006020604081840152835180604085015260005b8181101561042a5785810183015185820160600152820161040e565b8181111561043c576000606083870101525b50601f01601f191692909201606001949350505050565b60006020828403121561046557600080fd5b81356001600160a01b038116811461047c57600080fd5b9392505050565b6000828210156104a357634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220070b6bb2a7330e0961824214d3a6058deaf697e1d0fe531c0af1c8670252a73f64736f6c634300080f0033";

type CronusTimeKeeperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CronusTimeKeeperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CronusTimeKeeper__factory extends ContractFactory {
  constructor(...args: CronusTimeKeeperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CronusTimeKeeper> {
    return super.deploy(overrides || {}) as Promise<CronusTimeKeeper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CronusTimeKeeper {
    return super.attach(address) as CronusTimeKeeper;
  }
  override connect(signer: Signer): CronusTimeKeeper__factory {
    return super.connect(signer) as CronusTimeKeeper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CronusTimeKeeperInterface {
    return new utils.Interface(_abi) as CronusTimeKeeperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CronusTimeKeeper {
    return new Contract(address, _abi, signerOrProvider) as CronusTimeKeeper;
  }
}
