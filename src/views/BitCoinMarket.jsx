import { Component } from 'react'
import {bitcoinService} from '../services/bitcoin.service'


export class BitCoinMarket extends Component {
state = {
}
componentDidMount(){
    this.getCoins()
}

async getCoins(){
    const bitAns = await bitcoinService.getBitcoin(50)
    console.log('coins',bitAns);
}
render() {
return (
<section className='BitCoinMarket container'>
    <div>market</div>
</section>
)
}
}