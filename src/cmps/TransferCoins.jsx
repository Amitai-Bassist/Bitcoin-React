import { Component } from 'react'

import { userService } from '../services/user.service'

export class TransferCoins extends Component {
    state = {
        toContact: null,
        coins: null,
        msg: false
    }

    componentDidMount(){}
    
    sendCoins = () => {
        const {toContact,coins} = this.state
        if (!toContact &!coins) return
        userService.sendCoins(toContact,coins)
        this.setState({ msg: true})
    }

    handleChange = ({ target }) => {
        console.log(target);
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
                this.setState({ coins: value})
                break;
            case 'text':
                this.setState({ toContact: value })
                break;
            default:
                break;
        }
    }

    render() {
    return (
        <>
            <section className='transfer-coins'>
                <h1>Transfer BitCoin</h1>
                <div>
                    <label htmlFor="">To contact</label>
                    <input onChange={this.handleChange} type="text" name='toContact' id='toContact' />
                </div>
                <div>
                    <label htmlFor="">coins</label>
                    <input type="number" onChange={this.handleChange} name='coins' id='coins'/>
                </div>
                <button onClick={this.sendCoins} className='btn-white'>send</button>
            </section>
            {this.state.msg? <div className='user-msg'>sent coins successfully</div> : <div></div>}
        </>
    )
}
}