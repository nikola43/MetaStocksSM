/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMetaERC721Upgradable,
  IMetaERC721UpgradableInterface,
} from "../../../../../../../../contracts/metastocks/tokens/core/SoulBound/IMetaSoulBoundUpgradable/MetaERC721Upgradable.sol/IMetaERC721Upgradable";

const _abi = [
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMetaERC721Upgradable__factory {
  static readonly abi = _abi;
  static createInterface(): IMetaERC721UpgradableInterface {
    return new utils.Interface(_abi) as IMetaERC721UpgradableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetaERC721Upgradable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IMetaERC721Upgradable;
  }
}
