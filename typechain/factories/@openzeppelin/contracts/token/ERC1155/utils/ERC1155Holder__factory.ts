/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ERC1155Holder,
  ERC1155HolderInterface,
} from "../../../../../../@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103c0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c811461006e578063f23a6e61146100a6575b600080fd5b6100596100543660046100fc565b6100c5565b60405190151581526020015b60405180910390f35b61008d61007c36600461027d565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610065565b61008d6100b4366004610326565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b14806100f657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60006020828403121561010e57600080fd5b81356001600160e01b03198116811461012657600080fd5b9392505050565b80356001600160a01b038116811461014457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561018757610187610149565b604052919050565b600082601f8301126101a057600080fd5b813560206001600160401b038211156101bb576101bb610149565b8160051b6101ca82820161015f565b92835284810182019282810190878511156101e457600080fd5b83870192505b84831015610203578235825291830191908301906101ea565b979650505050505050565b600082601f83011261021f57600080fd5b81356001600160401b0381111561023857610238610149565b61024b601f8201601f191660200161015f565b81815284602083860101111561026057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561029557600080fd5b61029e8661012d565b94506102ac6020870161012d565b935060408601356001600160401b03808211156102c857600080fd5b6102d489838a0161018f565b945060608801359150808211156102ea57600080fd5b6102f689838a0161018f565b9350608088013591508082111561030c57600080fd5b506103198882890161020e565b9150509295509295909350565b600080600080600060a0868803121561033e57600080fd5b6103478661012d565b94506103556020870161012d565b9350604086013592506060860135915060808601356001600160401b0381111561037e57600080fd5b6103198882890161020e56fea2646970667358221220a8a731cfe4316603c914a4ab49c4cd232ef8df3301105f39070dd736fa5215e164736f6c634300080f0033";

type ERC1155HolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155HolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155Holder__factory extends ContractFactory {
  constructor(...args: ERC1155HolderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155Holder> {
    return super.deploy(overrides || {}) as Promise<ERC1155Holder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1155Holder {
    return super.attach(address) as ERC1155Holder;
  }
  override connect(signer: Signer): ERC1155Holder__factory {
    return super.connect(signer) as ERC1155Holder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155HolderInterface {
    return new utils.Interface(_abi) as ERC1155HolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Holder {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Holder;
  }
}
