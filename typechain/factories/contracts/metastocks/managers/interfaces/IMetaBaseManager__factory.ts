/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMetaBaseManager,
  IMetaBaseManagerInterface,
} from "../../../../../contracts/metastocks/managers/interfaces/IMetaBaseManager";

const _abi = [
  {
    inputs: [],
    name: "createManager",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "managerId",
        type: "uint256",
      },
    ],
    name: "deleteManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getManager",
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
        internalType: "uint256",
        name: "managerId",
        type: "uint256",
      },
    ],
    name: "updateManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMetaBaseManager__factory {
  static readonly abi = _abi;
  static createInterface(): IMetaBaseManagerInterface {
    return new utils.Interface(_abi) as IMetaBaseManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetaBaseManager {
    return new Contract(address, _abi, signerOrProvider) as IMetaBaseManager;
  }
}
