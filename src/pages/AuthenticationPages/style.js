import styled from 'styled-components';

export const AuthenticationPageStyle = styled.div`
  width: 100%;
  height: 100vh;
	display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #020e27;
  img{
    height: 200px;
    margin-bottom: -40px;
  }

  input{
    font-family: 'Roboto', sans-serif;
    height: 45px;
    width: 303px;
    margin-bottom: 6px;
    background: #020e27;
    border-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    color: #FFFFFF;
    padding-left: 10px;
    ::placeholder{
      color: #DBDBDB;
      font-size: 20px;
      text-decoration: none;
    }

  }

  button{
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 303px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #020e27;
    text-align: center;
    margin-bottom: 25px;
    background-color: #FFFFFF;
  }
  button:disabled{
    opacity: 0.75;
  }
`

export const Message = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #FFFFFF;
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

