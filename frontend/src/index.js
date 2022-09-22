import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

// Routes
import Home from './pages/home';
import PrivateRoute from './routes/privateRoute';
import Page404 from './pages/page404';
import Register from './pages/register';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
