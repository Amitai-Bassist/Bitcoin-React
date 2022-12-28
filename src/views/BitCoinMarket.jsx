import { Component } from 'react'
import {bitcoinService} from '../services/bitcoin.service'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  import { BtcToUsd } from "../cmps/BtcUsdChart";
  import { BlockSizeChart, BlockSizeData } from "../cmps/BlockSizeChart";
  
export class BitCoinMarket extends Component {
state = {
    avgBlockSizeData: null,
    avgBtcToUsd: null,
}
componentDidMount(){
    this.getCoins()
    this.getBlockSizeData();
    this.getAvgBtcToUsd();
}

async getBlockSizeData() {
    const blockSizeData = await bitcoinService.getAvgBlockSize();
    this.setState({ avgBlockSizeData: blockSizeData });
  }
  async getAvgBtcToUsd() {
    const btcToUsd = await bitcoinService.getAvgBtcToUsd();
    this.setState({ avgBtcToUsd: btcToUsd });
  }

async getCoins(){
    const bitAns = await bitcoinService.getBitcoin(50)
    console.log('coins',bitAns);
}
render() {
    const { avgBlockSizeData, avgBtcToUsd } = this.state;
    if (!avgBlockSizeData) return <div>Loading...</div>;
return (
<section className='BitCoinMarket container'>
    <div>market</div>
    <BlockSizeChart data={this.state.avgBlockSizeData}></BlockSizeChart>
    <BtcToUsd data={this.state.avgBtcToUsd}></BtcToUsd>
</section>
)
}
}