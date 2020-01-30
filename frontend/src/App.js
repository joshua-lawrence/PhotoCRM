import React from 'react';
import Navigation from './components/navigation';
import Home from './pages/home';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import './App.css';

function getCharCount(event) {
  const text = document.querySelector('#char-input').value

  axios
    .get(`/char_count?text=${text}`).then(({data}) => {
      document.querySelector('#char-count').textContent = `${data.count} characters!`
    })
    .catch(err => console.log(err))
}

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

            </Route>
            <Route path="/jobs">

            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
