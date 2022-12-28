import { Component } from 'react'
 
export class Loggin extends Component {
    state = {

    }
    componentDidMount(){}
    render() {
    return (
        <section className='login container'>
           <h1>Log-in</h1>
            <div>
                <label htmlFor="">username</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">password</label>
                <input type="number" />
            </div> 
            <button>Log-in</button>
        </section>
    )
    }
}