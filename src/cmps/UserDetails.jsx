import { Component } from 'react'
 
export class UserDetails extends Component {
state = {
    coins: 100,
    btc: 0.01570048,
    user: 'Moshe'
}
componentDidMount(){}
render() {
    const {user, coins, btc} = this.state
return (
<section className='class-name'>
    <div>Hello {user}!</div>
    <div>Coins: {coins}</div>
    <div>BTC: {btc}</div>
</section>
)
}
}