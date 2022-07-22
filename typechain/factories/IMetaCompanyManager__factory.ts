/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMetaCompanyManager,
  IMetaCompanyManagerInterface,
} from "../IMetaCompanyManager";

const _abi = [
  {
    inputs: [],
    name: "createCompany",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IMetaCompanyManager__factory {
  static readonly abi = _abi;
  static createInterface(): IMetaCompanyManagerInterface {
    return new utils.Interface(_abi) as IMetaCompanyManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetaCompanyManager {
    return new Contract(address, _abi, signerOrProvider) as IMetaCompanyManager;
  }
}
