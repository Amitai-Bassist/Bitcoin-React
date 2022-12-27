import { NavLink, withRouter } from 'react-router-dom'


function _AppHeader(props) {
    return (
        <header className="app-header">
            <section className="container flex space-between">
                <div>
                    {/* <img src={"../assets/imgs/bitcoin2"} alt="" /> */}
                    <div>Mister BITCoin</div>
                </div>
                <nav className='flex space-between'>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/contact" >Contacts</NavLink>
                    <NavLink to="/market" >Market</NavLink>
                </nav>
            </section>
        </header>
    )
}


export const AppHeader = withRouter(_AppHeader)