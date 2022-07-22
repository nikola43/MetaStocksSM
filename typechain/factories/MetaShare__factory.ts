/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MetaShare, MetaShareInterface } from "../MetaShare";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnMetaStocksFranchiseShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "exists",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newuri",
        type: "string",
      },
    ],
    name: "setURI",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200001c62000022565b620000e4565b600054610100900460ff16156200008f5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e2576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b61267180620000f46000396000f3fe608060405234801561001057600080fd5b506004361061011c5760003560e01c8062fdd58e1461012157806301ffc9a71461014757806302fe53051461016a5780630e89341c1461017f5780631f7fdffa1461019f5780632eb2c2d6146101b25780633f4ba83a146101c55780634e1273f4146101cd5780634f558e79146101ed5780635c975abb146102105780636b20c4541461021b578063715018a61461022e578063731133e9146102365780638129fc1c146102495780638456cb59146102515780638da5cb5b14610259578063a22cb4651461026e578063bd85b03914610281578063dc5ff870146102a2578063e985e9c5146102b5578063f242432a146102f1578063f2fde38b14610304578063f5298aca14610317575b600080fd5b61013461012f366004611928565b61032a565b6040519081526020015b60405180910390f35b61015a610155366004611968565b6103c2565b604051901515815260200161013e565b61017d610178366004611a2b565b610414565b005b61019261018d366004611a7b565b610428565b60405161013e9190611ae1565b61017d6101ad366004611ba8565b6104bc565b61017d6101c0366004611c40565b6104d6565b61017d610522565b6101e06101db366004611ce9565b610534565b60405161013e9190611dee565b61015a6101fb366004611a7b565b600090815261012d6020526040902054151590565b60c95460ff1661015a565b61017d610229366004611e01565b61065d565b61017d6106a5565b61017d610244366004611e74565b6106b7565b61017d6106cb565b61017d61079b565b6102616107ab565b60405161013e9190611ec8565b61017d61027c366004611edc565b6107ba565b61013461028f366004611a7b565b600090815261012d602052604090205490565b61017d6102b0366004611f18565b6107c9565b61015a6102c3366004611f4b565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b61017d6102ff366004611f7e565b6107d4565b61017d610312366004611fe2565b610819565b61017d610325366004611f18565b61088f565b60006001600160a01b03831661039a5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b5060009081526065602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b14806103f357506001600160e01b031982166303a24d0760e21b145b8061040e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b61041c6108d2565b61042581610931565b50565b60606067805461043790611ffd565b80601f016020809104026020016040519081016040528092919081815260200182805461046390611ffd565b80156104b05780601f10610485576101008083540402835291602001916104b0565b820191906000526020600020905b81548152906001019060200180831161049357829003601f168201915b50505050509050919050565b6104c46108d2565b6104d08484848461093d565b50505050565b6001600160a01b0385163314806104f257506104f285336102c3565b61050e5760405162461bcd60e51b815260040161039190612037565b61051b8585858585610a86565b5050505050565b61052a6108d2565b610532610c21565b565b606081518351146105995760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b6064820152608401610391565b600083516001600160401b038111156105b4576105b461198c565b6040519080825280602002602001820160405280156105dd578160200160208202803683370190505b50905060005b84518110156106555761062885828151811061060157610601612086565b602002602001015185838151811061061b5761061b612086565b602002602001015161032a565b82828151811061063a5761063a612086565b602090810291909101015261064e816120b2565b90506105e3565b509392505050565b6001600160a01b038316331480610679575061067983336102c3565b6106955760405162461bcd60e51b815260040161039190612037565b6106a0838383610c6d565b505050565b6106ad6108d2565b6105326000610dfa565b6106bf6108d2565b6104d084848484610e4c565b600054610100900460ff16158080156106eb5750600054600160ff909116105b8061070c57506106fa30610f25565b15801561070c575060005460ff166001145b6107285760405162461bcd60e51b8152600401610391906120cb565b6000805460ff19166001179055801561074b576000805461ff0019166101001790555b610753610f34565b8015610425576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6107a36108d2565b610532610fec565b6097546001600160a01b031690565b6107c5338383611029565b5050565b6106a083838361088f565b6001600160a01b0385163314806107f057506107f085336102c3565b61080c5760405162461bcd60e51b815260040161039190612037565b61051b8585858585611109565b6108216108d2565b6001600160a01b0381166108865760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610391565b61042581610dfa565b6001600160a01b0383163314806108ab57506108ab83336102c3565b6108c75760405162461bcd60e51b815260040161039190612037565b6106a0838383611233565b336108db6107ab565b6001600160a01b0316146105325760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610391565b60676107c5828261215f565b6001600160a01b0384166109635760405162461bcd60e51b81526004016103919061221e565b81518351146109845760405162461bcd60e51b81526004016103919061225f565b336109948160008787878761133d565b60005b8451811015610a30578381815181106109b2576109b2612086565b6020026020010151606560008784815181106109d0576109d0612086565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254610a1891906122a7565b90915550819050610a28816120b2565b915050610997565b50846001600160a01b031660006001600160a01b0316826001600160a01b03166000805160206125fc8339815191528787604051610a6f9291906122bf565b60405180910390a461051b81600087878787611353565b8151835114610aa75760405162461bcd60e51b81526004016103919061225f565b6001600160a01b038416610acd5760405162461bcd60e51b8152600401610391906122ed565b33610adc81878787878761133d565b60005b8451811015610bc5576000858281518110610afc57610afc612086565b602002602001015190506000858381518110610b1a57610b1a612086565b60209081029190910181015160008481526065835260408082206001600160a01b038e168352909352919091205490915081811015610b6b5760405162461bcd60e51b815260040161039190612332565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610baa9084906122a7565b9250508190555050505080610bbe906120b2565b9050610adf565b50846001600160a01b0316866001600160a01b0316826001600160a01b03166000805160206125fc8339815191528787604051610c039291906122bf565b60405180910390a4610c19818787878787611353565b505050505050565b610c296114b5565b60c9805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610c639190611ec8565b60405180910390a1565b6001600160a01b038316610c935760405162461bcd60e51b81526004016103919061237c565b8051825114610cb45760405162461bcd60e51b81526004016103919061225f565b6000339050610cd78185600086866040518060200160405280600081525061133d565b60005b8351811015610d9f576000848281518110610cf757610cf7612086565b602002602001015190506000848381518110610d1557610d15612086565b60209081029190910181015160008481526065835260408082206001600160a01b038c168352909352919091205490915081811015610d665760405162461bcd60e51b8152600401610391906123bf565b60009283526065602090815260408085206001600160a01b038b1686529091529092209103905580610d97816120b2565b915050610cda565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03166000805160206125fc8339815191528686604051610dde9291906122bf565b60405180910390a46040805160208101909152600090526104d0565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038416610e725760405162461bcd60e51b81526004016103919061221e565b336000610e7e856114fe565b90506000610e8b856114fe565b9050610e9c8360008985858961133d565b60008681526065602090815260408083206001600160a01b038b16845290915281208054879290610ece9084906122a7565b909155505060408051878152602081018790526001600160a01b03808a16926000929187169160008051602061261c833981519152910160405180910390a4610f1c83600089898989611549565b50505050505050565b6001600160a01b03163b151590565b600054610100900460ff1615808015610f545750600054600160ff909116105b80610f755750610f6330610f25565b158015610f75575060005460ff166001145b610f915760405162461bcd60e51b8152600401610391906120cb565b6000805460ff191660011790558015610fb4576000805461ff0019166101001790555b610fcc6040518060200160405280600081525061160b565b610fd461163b565b610fdc61166a565b610fe4611699565b610753611699565b610ff46116c0565b60c9805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c563390565b816001600160a01b0316836001600160a01b03160361109c5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b6064820152608401610391565b6001600160a01b03838116600081815260666020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661112f5760405162461bcd60e51b8152600401610391906122ed565b33600061113b856114fe565b90506000611148856114fe565b905061115883898985858961133d565b60008681526065602090815260408083206001600160a01b038c1684529091529020548581101561119b5760405162461bcd60e51b815260040161039190612332565b60008781526065602090815260408083206001600160a01b038d8116855292528083208985039055908a168252812080548892906111da9084906122a7565b909155505060408051888152602081018890526001600160a01b03808b16928c8216929188169160008051602061261c833981519152910160405180910390a4611228848a8a8a8a8a611549565b505050505050505050565b6001600160a01b0383166112595760405162461bcd60e51b81526004016103919061237c565b336000611265846114fe565b90506000611272846114fe565b90506112928387600085856040518060200160405280600081525061133d565b60008581526065602090815260408083206001600160a01b038a168452909152902054848110156112d55760405162461bcd60e51b8152600401610391906123bf565b60008681526065602090815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a905290929088169160008051602061261c833981519152910160405180910390a4604080516020810190915260009052610f1c565b6113456116c0565b610c19868686868686611706565b611365846001600160a01b0316610f25565b15610c195760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061139e9089908990889088908890600401612403565b6020604051808303816000875af19250505080156113d9575060408051601f3d908101601f191682019092526113d691810190612461565b60015b611485576113e561247e565b806308c379a00361141e57506113f961249a565b806114045750611420565b8060405162461bcd60e51b81526004016103919190611ae1565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b6064820152608401610391565b6001600160e01b0319811663bc197c8160e01b14610f1c5760405162461bcd60e51b815260040161039190612523565b60c95460ff166105325760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610391565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061153857611538612086565b602090810291909101015292915050565b61155b846001600160a01b0316610f25565b15610c195760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190611594908990899088908890889060040161256b565b6020604051808303816000875af19250505080156115cf575060408051601f3d908101601f191682019092526115cc91810190612461565b60015b6115db576113e561247e565b6001600160e01b0319811663f23a6e6160e01b14610f1c5760405162461bcd60e51b815260040161039190612523565b600054610100900460ff166116325760405162461bcd60e51b8152600401610391906125b0565b61042581611882565b600054610100900460ff166116625760405162461bcd60e51b8152600401610391906125b0565b6105326118a9565b600054610100900460ff166116915760405162461bcd60e51b8152600401610391906125b0565b6105326118d9565b600054610100900460ff166105325760405162461bcd60e51b8152600401610391906125b0565b60c95460ff16156105325760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610391565b6001600160a01b03851661178e5760005b835181101561178c5782818151811061173257611732612086565b602002602001015161012d600086848151811061175157611751612086565b60200260200101518152602001908152602001600020600082825461177691906122a7565b909155506117859050816120b2565b9050611717565b505b6001600160a01b038416610c195760005b8351811015610f1c5760008482815181106117bc576117bc612086565b6020026020010151905060008483815181106117da576117da612086565b60200260200101519050600061012d60008481526020019081526020016000205490508181101561185e5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a206275726e20616d6f756e74206578636565647320746f74604482015267616c537570706c7960c01b6064820152608401610391565b600092835261012d60205260409092209103905561187b816120b2565b905061179f565b600054610100900460ff1661041c5760405162461bcd60e51b8152600401610391906125b0565b600054610100900460ff166118d05760405162461bcd60e51b8152600401610391906125b0565b61053233610dfa565b600054610100900460ff166119005760405162461bcd60e51b8152600401610391906125b0565b60c9805460ff19169055565b80356001600160a01b038116811461192357600080fd5b919050565b6000806040838503121561193b57600080fd5b6119448361190c565b946020939093013593505050565b6001600160e01b03198116811461042557600080fd5b60006020828403121561197a57600080fd5b813561198581611952565b9392505050565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b03811182821017156119c7576119c761198c565b6040525050565b60006001600160401b038311156119e7576119e761198c565b6040516119fe601f8501601f1916602001826119a2565b809150838152848484011115611a1357600080fd5b83836020830137600060208583010152509392505050565b600060208284031215611a3d57600080fd5b81356001600160401b03811115611a5357600080fd5b8201601f81018413611a6457600080fd5b611a73848235602084016119ce565b949350505050565b600060208284031215611a8d57600080fd5b5035919050565b6000815180845260005b81811015611aba57602081850181015186830182015201611a9e565b81811115611acc576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006119856020830184611a94565b60006001600160401b03821115611b0d57611b0d61198c565b5060051b60200190565b600082601f830112611b2857600080fd5b81356020611b3582611af4565b604051611b4282826119a2565b83815260059390931b8501820192828101915086841115611b6257600080fd5b8286015b84811015611b7d5780358352918301918301611b66565b509695505050505050565b600082601f830112611b9957600080fd5b611985838335602085016119ce565b60008060008060808587031215611bbe57600080fd5b611bc78561190c565b935060208501356001600160401b0380821115611be357600080fd5b611bef88838901611b17565b94506040870135915080821115611c0557600080fd5b611c1188838901611b17565b93506060870135915080821115611c2757600080fd5b50611c3487828801611b88565b91505092959194509250565b600080600080600060a08688031215611c5857600080fd5b611c618661190c565b9450611c6f6020870161190c565b935060408601356001600160401b0380821115611c8b57600080fd5b611c9789838a01611b17565b94506060880135915080821115611cad57600080fd5b611cb989838a01611b17565b93506080880135915080821115611ccf57600080fd5b50611cdc88828901611b88565b9150509295509295909350565b60008060408385031215611cfc57600080fd5b82356001600160401b0380821115611d1357600080fd5b818501915085601f830112611d2757600080fd5b81356020611d3482611af4565b604051611d4182826119a2565b83815260059390931b8501820192828101915089841115611d6157600080fd5b948201945b83861015611d8657611d778661190c565b82529482019490820190611d66565b96505086013592505080821115611d9c57600080fd5b50611da985828601611b17565b9150509250929050565b600081518084526020808501945080840160005b83811015611de357815187529582019590820190600101611dc7565b509495945050505050565b6020815260006119856020830184611db3565b600080600060608486031215611e1657600080fd5b611e1f8461190c565b925060208401356001600160401b0380821115611e3b57600080fd5b611e4787838801611b17565b93506040860135915080821115611e5d57600080fd5b50611e6a86828701611b17565b9150509250925092565b60008060008060808587031215611e8a57600080fd5b611e938561190c565b9350602085013592506040850135915060608501356001600160401b03811115611ebc57600080fd5b611c3487828801611b88565b6001600160a01b0391909116815260200190565b60008060408385031215611eef57600080fd5b611ef88361190c565b915060208301358015158114611f0d57600080fd5b809150509250929050565b600080600060608486031215611f2d57600080fd5b611f368461190c565b95602085013595506040909401359392505050565b60008060408385031215611f5e57600080fd5b611f678361190c565b9150611f756020840161190c565b90509250929050565b600080600080600060a08688031215611f9657600080fd5b611f9f8661190c565b9450611fad6020870161190c565b9350604086013592506060860135915060808601356001600160401b03811115611fd657600080fd5b611cdc88828901611b88565b600060208284031215611ff457600080fd5b6119858261190c565b600181811c9082168061201157607f821691505b60208210810361203157634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602f908201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60408201526e195c881b9bdc88185c1c1c9bdd9959608a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016120c4576120c461209c565b5060010190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b601f8211156106a057600081815260208120601f850160051c810160208610156121405750805b601f850160051c820191505b81811015610c195782815560010161214c565b81516001600160401b038111156121785761217861198c565b61218c816121868454611ffd565b84612119565b602080601f8311600181146121c157600084156121a95750858301515b600019600386901b1c1916600185901b178555610c19565b600085815260208120601f198616915b828110156121f0578886015182559484019460019091019084016121d1565b508582101561220e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60208082526021908201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526028908201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206040820152670dad2e6dac2e8c6d60c31b606082015260800190565b600082198211156122ba576122ba61209c565b500190565b6040815260006122d26040830185611db3565b82810360208401526122e48185611db3565b95945050505050565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60208082526023908201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526024908201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604082015263616e636560e01b606082015260800190565b6001600160a01b0386811682528516602082015260a06040820181905260009061242f90830186611db3565b82810360608401526124418186611db3565b905082810360808401526124558185611a94565b98975050505050505050565b60006020828403121561247357600080fd5b815161198581611952565b600060033d11156124975760046000803e5060005160e01c5b90565b600060443d10156124a85790565b6040516003193d81016004833e81513d6001600160401b0380831160248401831017156124d757505050505090565b82850191508151818111156124ef5750505050505090565b843d87010160208285010111156125095750505050505090565b612518602082860101876119a2565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906125a590830184611a94565b979650505050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fe4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fbc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62a264697066735822122072055b96bc2d739731dba751ecefde5e1a3b11e8c65159ef8b28044141a4577764736f6c634300080f0033";

export class MetaShare__factory extends ContractFactory {
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
  ): Promise<MetaShare> {
    return super.deploy(overrides || {}) as Promise<MetaShare>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MetaShare {
    return super.attach(address) as MetaShare;
  }
  connect(signer: Signer): MetaShare__factory {
    return super.connect(signer) as MetaShare__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaShareInterface {
    return new utils.Interface(_abi) as MetaShareInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetaShare {
    return new Contract(address, _abi, signerOrProvider) as MetaShare;
  }
}
