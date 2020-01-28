import React from 'react';
import Navigation from './components/home/navigation';
import Action from './components/home/action';
import Scheduling from './components/home/scheduling';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import './App.css';

function getCharCount(event) {
  const text = document.querySelector('#char-input').value

  axios
    .get(`/char_count?text=${text}`).then(({data}) => {
      document.querySelector('#char-count').textContent = `${data.count} characters!`
    })
    .catch(err => console.log(err))
}

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Action />
        <Scheduling />
      </Container>
    </div>
  );
}

export default App;
