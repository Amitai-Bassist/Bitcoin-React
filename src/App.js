import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader';
import { AppFooter } from './cmps/AppFooter';


import './assets/scss/global.scss';

import {Home} from './views/Home';
import {ContactIndex} from './views/ContactIndex';
import {ContactDetails} from './views/ContactDetails';
import {ContactEdit} from './views/ContactEdit';
import {BitCoinMarket} from './views/BitCoinMarket';


function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader className="App-header"></AppHeader>
        <main>
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route path="/contact/:id" component={ContactDetails} />
            <Route path="/contact" component={ContactIndex} />
            <Route path="/market" component={BitCoinMarket} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <AppFooter />
        {/* <UserDetails /> */}
      </div>
    </Router>
  );
}

export default App;
