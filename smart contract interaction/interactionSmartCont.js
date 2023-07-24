import { ethers } from "ethers";

// 0x166d6e1d8B6a3F9F3b3FA4782Bdd0D58049f8bF8

const provider = new ethers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/zOSxX6VAiROjWTnxRcLtiMUWAdET8wQV`)


const smart_contract_Adress = '0x166d6e1d8B6a3F9F3b3FA4782Bdd0D58049f8bF8';


const smart_contract_Abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]



const contractInteraction = async()=>{

    const myContracts = new ethers.Contract( smart_contract_Adress, smart_contract_Abi, provider)

    const contractname = await myContracts.name()

    // console.log(contractname);

    const num = await myContracts.getValue()
    console.log(num);

    const contractBalance = await myContracts.contractBalance()
    console.log(contractBalance);


    const accountBalance = await myContracts.accountBalance('0x09B4D73D7f9b4350638C7ebA63DA42cdA7a78b34')
    // console.log(accountBalance);

}

contractInteraction()

