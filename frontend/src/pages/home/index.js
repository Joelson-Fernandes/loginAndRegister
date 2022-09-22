import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/header';
import { Container } from '../../styles/globalStyles';
import { Box } from './style';

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <Header />
      <Container>
        <Box>
          <h1>Bem vindo, {user.nome}</h1>
        </Box>
      </Container>
    </>
  );
}
