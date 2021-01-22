import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header.js';
import Routes from './routes';

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <h1>FINANCES</h1>
          <Header />
          <Routes />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
