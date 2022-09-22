import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

import { NavBar } from './style';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('login');
  };
  return (
    <NavBar>
      <li>
        <Link to='register'>Cadastrar novo usuario</Link>
      </li>
      <li>
        <Link onClick={handleLogout} to='/login'>
          Sair
        </Link>
      </li>
    </NavBar>
  );
}
