import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer autoClose={3000} className='toast-container' />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
