/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  MetaERC1155ReceiverHolder,
  MetaERC1155ReceiverHolderInterface,
} from "../../../../../../contracts/metastocks/tokens/core/ERC1155/MetaERC1155ReceiverHolder";

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
  "0x608060405234801561001057600080fd5b506103cf806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c811461006e578063f23a6e61146100a6575b600080fd5b61005961005436600461010b565b6100c5565b60405190151581526020015b60405180910390f35b61008d61007c36600461028c565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610065565b61008d6100b4366004610335565b63f23a6e6160e01b95945050505050565b60006100d0826100d6565b92915050565b60006001600160e01b03198216630271189760e51b14806100d057506301ffc9a760e01b6001600160e01b03198316146100d0565b60006020828403121561011d57600080fd5b81356001600160e01b03198116811461013557600080fd5b9392505050565b80356001600160a01b038116811461015357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561019657610196610158565b604052919050565b600082601f8301126101af57600080fd5b813560206001600160401b038211156101ca576101ca610158565b8160051b6101d982820161016e565b92835284810182019282810190878511156101f357600080fd5b83870192505b84831015610212578235825291830191908301906101f9565b979650505050505050565b600082601f83011261022e57600080fd5b81356001600160401b0381111561024757610247610158565b61025a601f8201601f191660200161016e565b81815284602083860101111561026f57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156102a457600080fd5b6102ad8661013c565b94506102bb6020870161013c565b935060408601356001600160401b03808211156102d757600080fd5b6102e389838a0161019e565b945060608801359150808211156102f957600080fd5b61030589838a0161019e565b9350608088013591508082111561031b57600080fd5b506103288882890161021d565b9150509295509295909350565b600080600080600060a0868803121561034d57600080fd5b6103568661013c565b94506103646020870161013c565b9350604086013592506060860135915060808601356001600160401b0381111561038d57600080fd5b6103288882890161021d56fea2646970667358221220ee24b383713665694e9d236483cf020692517fe417190674e214115df2d3c14664736f6c634300080f0033";

type MetaERC1155ReceiverHolderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetaERC1155ReceiverHolderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetaERC1155ReceiverHolder__factory extends ContractFactory {
  constructor(...args: MetaERC1155ReceiverHolderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MetaERC1155ReceiverHolder> {
    return super.deploy(overrides || {}) as Promise<MetaERC1155ReceiverHolder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MetaERC1155ReceiverHolder {
    return super.attach(address) as MetaERC1155ReceiverHolder;
  }
  override connect(signer: Signer): MetaERC1155ReceiverHolder__factory {
    return super.connect(signer) as MetaERC1155ReceiverHolder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaERC1155ReceiverHolderInterface {
    return new utils.Interface(_abi) as MetaERC1155ReceiverHolderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetaERC1155ReceiverHolder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MetaERC1155ReceiverHolder;
  }
}
