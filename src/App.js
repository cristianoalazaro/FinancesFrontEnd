import React from 'react';

import Header from './components/Header.js';
import Login from './pages/Login.js';

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>FINANCES</h1>
        <Header />
        <Login />
      </div>
    </div>
  );
}

export default App;
