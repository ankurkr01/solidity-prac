import {ethers} from 'ethers'
 
const provider = new ethers.JsonRpcProvider(`https://eth-mainnet.g.alchemy.com/v2/iz6LsPljNhwNtf9CZDjrj_uMRUdQxvg1`) 


const queryBlockChain = async()=>{
    const blockNum = await provider.getBlockNumber()
    // console.log(blockNum);


    const balance = await provider.getBalance('0x5638cbdC72bd8554055883D309CFc70357190CF3')
    console.log(balance );

    

}

queryBlockChain()