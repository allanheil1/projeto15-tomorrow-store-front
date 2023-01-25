import styled from 'styled-components';

export const SignInPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  img{
    width: 300px;
    height: 300px;
    margin-bottom: 32px;
  }

  input{
    font-family: 'Orbitron', sans-serif;
    height: 45px;
    width: 303px;
    margin-bottom: 6px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #666666;
    padding-left: 10px;
    ::placeholder{
      color: #DBDBDB;
      font-size: 20px;
      text-decoration: none;
    }
  }

  button{
    font-family: 'Orbitron', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 303px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: white;
    text-align: center;
    margin-bottom: 25px;
    background-color: #B1B1B1;
    cursor: pointer;
  }
  button:disabled{
      opacity: 0.75;
  }
`

export const Cadastre = styled.div`
  font-family: 'Orbitron', sans-serif;
  color: #B1B1B1;
  font-size: 15px;
  text-decoration: underline;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`
