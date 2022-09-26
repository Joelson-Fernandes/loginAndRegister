import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FadeLoader from 'react-spinners/FadeLoader';
import { authLogin } from '../../features/auth/authSlice';

import { Container } from '../../styles/globalStyles';
import { Box } from './style';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const { email, senha } = formData;

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!email || !senha) {
      formErrors = true;
      toast.error('Todos os campos são obrigatórios');
    }

    if (formErrors) return;
    dispatch(authLogin({ email, senha }));
  };
  return (
    <Container>
      {isLoading ? (
        <FadeLoader loading={isLoading} color='#fff' />
      ) : (
        <Box>
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor='Email'>
              <input
                type='text'
                placeholder='Email'
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </label>
            <label htmlFor='Senha'>
              <input
                type='password'
                placeholder='Senha'
                value={senha}
                onChange={(e) =>
                  setFormData({ ...formData, senha: e.target.value })
                }
              />
            </label>
            <button type='submit'>LOGIN</button>
          </form>
          <p>
            Não tem login ? <Link to='/register'>Cadastrar usuário</Link>
          </p>
        </Box>
      )}
    </Container>
  );
}
