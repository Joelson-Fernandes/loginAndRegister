import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import FadeLoader from 'react-spinners/FadeLoader';
import { toast } from 'react-toastify';
import { Box } from './style';
import { Container } from '../../styles/globalStyles';
import { authUser } from '../../features/auth/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  });
  const { nome, sobrenome, email, senha } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!nome || !sobrenome || !email || !senha) {
      formErrors = true;
      toast.error('Todos os campos são obrigatórios');
    }

    if (formErrors) return;

    dispatch(authUser({ nome, sobrenome, email, senha }));
  };
  return (
    <Container>
      {isLoading ? (
        <FadeLoader loading={isLoading} color='#fff' />
      ) : (
        <Box>
          <form onSubmit={handleSubmit}>
            <h2>Cadastrar usuário</h2>
            <label htmlFor='Nome'>
              <input
                type='text'
                placeholder='Nome'
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
              />
            </label>
            <label htmlFor='Sobrenome'>
              <input
                type='text'
                placeholder='Sobrenome'
                value={formData.sobrenome}
                onChange={(e) =>
                  setFormData({ ...formData, sobrenome: e.target.value })
                }
              />
            </label>
            <label htmlFor='Email'>
              <input
                type='text'
                placeholder='Email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </label>
            <label htmlFor='Senha'>
              <input
                type='password'
                placeholder='Senha'
                value={formData.senha}
                onChange={(e) =>
                  setFormData({ ...formData, senha: e.target.value })
                }
              />
            </label>
            <button type='submit'>CADASTRAR</button>
          </form>
          <Link to='/login'>Voltar</Link>
        </Box>
      )}
    </Container>
  );
}
