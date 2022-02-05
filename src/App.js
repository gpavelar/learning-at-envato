import React, { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';

import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Pastel from './Pastel';
import Feijoada from './Feijoada';

function App() {
  const [path, setPath] = useState('');
  const [history, setHistory] = useState();

  const pastelFood = () => {
    setPath('pastel');
    history.push('/pastel');
  };

  const feijoadaFood = () => {
    setPath('feijoada');
    history.push('/feijoada');
  };

  useEffect(() => {
    setHistory(createBrowserHistory());
  }, []);

  return (
    <div className="App">
      <h2 id="foods-heading">Foods</h2>
      {/* <ul aria-label="foods"> */}
      <ul aria-labelledby="foods-heading">
        <li>
          <a onClick={() => pastelFood()}> Pastel food </a>
        </li>
        <li>
          <a onClick={() => feijoadaFood()}> Feijoada food </a>
        </li>
      </ul>
      Top 10 Eaten Food
      <ul>
        <li>Sugar cane</li>
        <li>Strogonoff</li>
        <li>Testing</li>
      </ul>
      {path == 'pastel' && <Pastel />}
      {path == 'feijoada' && <Feijoada />}
    </div>
  );
}

export default App;
