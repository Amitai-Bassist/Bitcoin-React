import { Component } from 'react'
 
export class Home extends Component {
    state = {
        coins: 100,
        btc: 0.01570048,
        user: 'Moshe'
    }
    componentDidMount(){}
    render() {
        const {user, coins, btc} = this.state
        return (
            <section className='container'>
                <div>Hello {user}!</div>
                <div>Coins: {coins}</div>
                <div>BTC: {btc}</div>
            </section>
        )
    }
}