/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMetaFranchiseManager,
  IMetaFranchiseManagerInterface,
} from "../../../../../contracts/metastocks/managers/interfaces/IMetaFranchiseManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum MetaFranchiseType",
        name: "_metaFranchiseType",
        type: "uint8",
      },
    ],
    name: "burnMetaFranchise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_companyId",
        type: "uint256",
      },
    ],
    name: "claimFromAllFranchises",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_companyId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "companyOwner",
        type: "address",
      },
    ],
    name: "claimFromAllFranchisesBNB",
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
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_continentId",
        type: "uint256",
      },
      {
        internalType: "enum MetaFranchiseType",
        name: "_metaFranchiseType",
        type: "uint8",
      },
    ],
    name: "createMetaFranchise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_companyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_continentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "createMetaFranchiseUsingBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_companyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_continentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_number",
        type: "uint256",
      },
    ],
    name: "createMetaFranchiseUsingUnclaimedBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreateFranchisePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreateFranchisePriceBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFranchiseDailyEarnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFranchiseDailyEarningsBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFranchiseValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_continentId",
        type: "uint256",
      },
    ],
    name: "getFranchisesByContinent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_companyId",
        type: "uint256",
      },
    ],
    name: "getFranchisesLastClaimDates",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "franchiseType",
        type: "uint256",
      },
    ],
    name: "getFranchisesUsdInvested",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHireWorkerFranchisePriceBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaintainceFranchiseExpenses",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaintainceFranchiseExpensesBNBPercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
    ],
    name: "getMetaFranchisesUnclaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
    ],
    name: "getMetaFranchisesUnclaimedRewardsBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
    ],
    name: "getNumberOfMetaFranchises",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPaymentTokenAddress",
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
    inputs: [],
    name: "getTotalFranchises",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
      {
        internalType: "enum MetaFranchiseType",
        name: "_metaFranchiseType",
        type: "uint8",
      },
    ],
    name: "hireWorker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
      {
        internalType: "enum MetaFranchiseType",
        name: "_metaFranchiseType",
        type: "uint8",
      },
    ],
    name: "hireWorkerUsingBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "companyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum MetaFranchiseType",
        name: "_metaFranchiseType",
        type: "uint8",
      },
    ],
    name: "sellMetaFranchise",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_createFranchisePrice",
        type: "uint16",
      },
    ],
    name: "setCreateFranchisePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_createFranchisePrice",
        type: "uint16",
      },
    ],
    name: "setCreateFranchisePriceBNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_franchiseDailyEarnings",
        type: "uint16",
      },
    ],
    name: "setFranchiseDailyEarnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_franchiseDailyEarnings",
        type: "uint16",
      },
    ],
    name: "setFranchiseDailyEarningsBNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_hireWorkerFranchisePriceBNB",
        type: "uint16",
      },
    ],
    name: "setHireWorkerFranchisePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_maintainceFranchiseExpenses",
        type: "uint16",
      },
    ],
    name: "setMaintainceFranchiseExpenses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_maintainceFranchiseExpenses",
        type: "uint16",
      },
    ],
    name: "setMaintainceFranchiseExpensesBNBPercent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_paymentTokenAddress",
        type: "address",
      },
    ],
    name: "setPaymentTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMetaFranchiseManager__factory {
  static readonly abi = _abi;
  static createInterface(): IMetaFranchiseManagerInterface {
    return new utils.Interface(_abi) as IMetaFranchiseManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetaFranchiseManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IMetaFranchiseManager;
  }
}