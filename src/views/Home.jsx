import { Component } from 'react'
import {bitcoinService}  from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import bitcoinImg from '../assets/imgs/bitcoin-img.j'

export class Home extends Component {
    state = {
        user: null,
        bitcoin: null,
    }
    async componentDidMount(){
        this.setUser()
        
        
    }

    async setUser(){
        const user = userService.getUser()
        this.setState({ user:user }, () => {
            console.log(this.state.user)
          }) 
        const bitcoin = await bitcoinService.getBitcoin(user.coins)
        this.setState({ bitcoin: bitcoin }, () => {
            console.log(this.state)
          }) 
    }

    render() {
        const {user, bitcoin} = this.state
        if (!user || !bitcoin) return
        return (
            <section className='container'>
                <div>Hello {user.name}!</div>
                <div>Coins: {user.coins}</div>
                <div>BTC: {bitcoin}</div>
                <h1>Last moves:</h1>
                <section>
                    {user.moves.map((move,idx) =>
                       <div key={move.id}>{idx + 1}. Transferred {move.coins} coins to {move.toContact} at {move.time}</div> 
                    )}
                </section>

            </section>
        )
    }
}