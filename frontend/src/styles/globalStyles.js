import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  body {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background: -moz-linear-gradient(top, #C33864 0%, #822A99 50%, #1E2670 100%);
    background: -webkit-linear-gradient(top, #C33864 0%, #822A99 50%, #1E2670 100%);
    background: linear-gradient(to bottom, #C33864 0%, #822A99 50%, #1E2670 100%);
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

`;

export const Container = styled.section`
  width: 100%;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
