import axios from "axios";

export const bitcoinService = {
    getBitcoin,
    getAvgBlockSize,
    // getAvgBtcToUsd,
  
  };

async function getBitcoin(coins){
    try{
        const response = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        return response.data
    } catch (error){
        console.log(error);
    }
}

async function getAvgBlockSize(coins){
    try{

    } catch (error){
        console.log(error);
    }
}