import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <Provider store={store}>
      <Outlet />
      <GlobalStyles />
      <ToastContainer autoClose={2000} className='toast-container' />
    </Provider>
  );
}

export default App;
