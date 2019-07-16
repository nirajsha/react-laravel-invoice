import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components/Home';
import {Cart} from './components/Cart';
import {NoMatch} from './components/NoMatch';
import {Layout}  from './components/Layout';
import {NavigationBar} from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
  <Router>
  <NavigationBar />
  <Layout>
    <Switch>
    
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route component={NoMatch} />
        
        </Switch>
        </Layout>
      </Router>
      </React.Fragment>
  );
}

export default App;
