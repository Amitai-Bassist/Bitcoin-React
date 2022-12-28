import { NavLink, withRouter } from 'react-router-dom'
import bitcoinLogo from '../assets/imgs/Bitcoin.svg.png'

function _AppHeader(props) {
    return (
        <header className="app-header">
            <section className="container flex space-between">
                <NavLink exact to="/"  className='logo flex space-between'>
                    <img className='header-logo' src={bitcoinLogo} alt="" />
                    <div>Mister BITCoin</div>
                </NavLink>
                <nav className='flex space-between app-nav'>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/contact" >Contacts</NavLink>
                    <NavLink to="/market" >Market</NavLink>
                    <NavLink to="/login" >Log-in</NavLink>
                </nav>
            </section>
        </header>
    )
}


export const AppHeader = withRouter(_AppHeader)