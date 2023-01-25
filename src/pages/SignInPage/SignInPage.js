import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';

import Logo from '../../assets/logo.jpeg';
import { SignInPageStyle, Cadastre, Form } from './style';
import UserContext from '../../contexts/UserContext';

export default function SignInPage() {

    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    const { setUserPhoto } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    });

    function LoginRequest(e){
        e.preventDefault();
        setIsLoading(true);
        const promise = axios.post('LOGIN URL BACKEND', loginData);
        promise.then((res) => {
          setIsLoading(false);

          //SET VARIABLES FROM SERVER RESPONSE
          //setToken(res.data.token);
          //setUserPhoto(res.data.image);

          navigate('/home');
        });
        promise.catch((err) => {
          setIsLoading(false);
          const errorMsg = err.response.statusText;
          alert(`Erro: ${errorMsg}`);
        })
    }

    function OnChange(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    return (

        <SignInPageStyle>
          <img src={Logo}/>
  
          <Form onSubmit={LoginRequest}>
            <input 
              type='email' placeholder='email'
              value={loginData.email} name='email'
              onChange={OnChange} required disabled={isLoading}
            />
            <input 
              type='password' placeholder='senha'
              value={loginData.password} name='password'
              onChange={OnChange} required disabled={isLoading}
            />
            <button type='submit' disabled={isLoading}>
                Login
            </button>
          </Form>
  
          <Link to={isLoading ? '' : '/sign-up'}>
            <Cadastre>
              Ainda sem conta? Faça seu cadastro!
            </Cadastre>
          </Link>
        </SignInPageStyle>
    );

}

