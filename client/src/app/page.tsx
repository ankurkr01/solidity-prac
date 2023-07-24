"use client"

import { FC } from 'react'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import { ExternalProvider } from "@ethersproject/providers";
interface pageProps {
  
} 

const Page: FC<pageProps> = ({}) => {

  
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


const writeContract = async()=>{
   
  const provider = new ethers.BrowserProvider((window as any).ethereum)
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(smart_contract_Adress, smart_contract_Abi, signer)
  // await contract.setValue(2);
  // await contract.sendEthContract({value:ethers.parseEther('0.2')})
  await contract.sendEthUser('0xB1f6d0902a858569D86b9bc42347A1E123475eAa',{value:ethers.parseEther('0.1')} )

}

useEffect(()=>{


},[smart_contract_Abi])


  return (<div>
<div>
  <button className='bg-white-800 m-5 p-2 border-slate-950 border bg-black text-white' onClick={writeContract}> send Balance to user</button>
</div>

  </div>)
}

export default Page