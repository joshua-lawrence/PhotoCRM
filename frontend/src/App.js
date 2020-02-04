import React from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Navigation from './components/navigation';

import Home from './pages/home';
import Customers from './pages/customers';
import Jobs from './pages/jobs';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Container>
          <Navigation />
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/customers">
                <Customers />
            </Route>
            <Route path="/jobs">
                <Jobs />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
