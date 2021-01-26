import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/Header.js';
import Routes from './routes';
import store, {persistor} from './store';

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Provider store={store} >
          <PersistGate persistor={persistor}>
            <BrowserRouter>
              <h1>FINANCES</h1>
              <Header />
              <Routes />
              <ToastContainer autoClose={3000} className='toast-container' />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
}

export default App;
