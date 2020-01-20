import React from 'react';
import Navigation from './components/home/navigation';
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
      <Navigation />
    </div>
  );
}

export default App;
