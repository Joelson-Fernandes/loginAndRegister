import styled from 'styled-components';

export const NavBar = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  li {
    padding: 10px 20px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
