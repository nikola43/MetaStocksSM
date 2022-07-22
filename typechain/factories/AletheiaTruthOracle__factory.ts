/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AletheiaTruthOracle,
  AletheiaTruthOracleInterface,
} from "../AletheiaTruthOracle";

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
    name: "getKimdomTokenPriceOracle",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
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
        internalType: "address",
        name: "kindomTokenAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "self",
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
        internalType: "address",
        name: "kindomTokenAddress",
        type: "address",
      },
    ],
    name: "setOracles",
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
  "0x608060405234801561001057600080fd5b5061038b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80637104ddb21461005c578063b6215c411461007a578063c4d66de81461008b578063e3f53d42146100a0578063f2fde38b146100b3575b600080fd5b305b6040516001600160a01b03909116815260200160405180910390f35b6001546001600160a01b031661005e565b61009e610099366004610325565b6100c6565b005b61009e6100ae366004610325565b610209565b61009e6100c1366004610325565b610248565b600054610100900460ff16158080156100e65750600054600160ff909116105b806101005750303b158015610100575060005460ff166001145b6101685760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff19166001179055801561018b576000805461ff0019166101001790555b6000805462010000600160b01b031916336201000002179055600180546001600160a01b0319166001600160a01b0384161790558015610205576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6000546201000090046001600160a01b0316331461022657600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546201000090046001600160a01b0316331461026557600080fd5b6001600160a01b0381166102ca5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161015f565b600080546001600160a01b038381166201000081810262010000600160b01b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b60006020828403121561033757600080fd5b81356001600160a01b038116811461034e57600080fd5b939250505056fea2646970667358221220a0e5fa73f3b64bdd9bca42c942b549e3ab7d673ce27dc4f670ddc63a88b27b8f64736f6c634300080f0033";

export class AletheiaTruthOracle__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AletheiaTruthOracle> {
    return super.deploy(overrides || {}) as Promise<AletheiaTruthOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AletheiaTruthOracle {
    return super.attach(address) as AletheiaTruthOracle;
  }
  connect(signer: Signer): AletheiaTruthOracle__factory {
    return super.connect(signer) as AletheiaTruthOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AletheiaTruthOracleInterface {
    return new utils.Interface(_abi) as AletheiaTruthOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AletheiaTruthOracle {
    return new Contract(address, _abi, signerOrProvider) as AletheiaTruthOracle;
  }
}
