import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 450px;
  width: 350px;
  color: #5258a5;
  border-radius: 15px;
  background-color: #ede0f0;

  form {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #5258a5;

    h2 {
      margin: 40px 0;
      padding: 25px 0 0 0;
      z-index: 2;
    }

    label {
      display: flex;
      flex-direction: column;
      margin: 10px;

      input {
        padding: 13px;
        width: 300px;
        border: none;
        border-radius: 20px;
      }
    }

    button {
      width: 300px;
      padding: 13px;
      border: none;
      border-radius: 20px;
      margin-top: 15px;
      color: #fff;
      background-color: #c33864;
      cursor: pointer;
    }
  }

  p {
    display: flex;
    align-content: flex-end;
  }

  a {
    color: #c33864;
    text-decoration: none;
    margin: 0 5px;
  }
`;
