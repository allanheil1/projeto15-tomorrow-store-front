import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Logo from '../../assets/logo.jpeg';
import { AuthenticationPageStyle, Message, Form } from './style'

export default function SignUpPage() {

    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
      email: '',
      name: '',
      photo: '',
      password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    function SignUpRequest(e){
      e.preventDefault();
      setIsLoading(true);
      const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', { ...signUpData });
      promise.then(() => {
        setIsLoading(false);
        navigate('/');
      });
      promise.catch((err) => {
        setIsLoading(false);
        const errorMsg = err.response.statusText;
        alert(`Erro: ${errorMsg}`);
      })
    }

    function OnChange(e) {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value});
    }

    return (
      <AuthenticationPageStyle>
        <img src={Logo} />

        <Form onSubmit={SignUpRequest}>
          <input 
            type='email' placeholder='email'
            value={signUpData.email} name='email'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <input 
            type='password' placeholder='password'
            value={signUpData.password} name='password'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <input 
            type='text' placeholder='name'
            value={signUpData.name} name='name'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <input 
            type='text' placeholder='photo'
            value={signUpData.photo} name='photo'
            onChange={OnChange} required
            disabled={isLoading}
          />
          <button type='submit' disabled={isLoading}>
                Sign-Up
          </button>
        </Form>

        <Link to={isLoading ? '' : '/'}>
          <Message>
            Already have an account? Sign-in!
          </Message>
        </Link>
      </AuthenticationPageStyle>
    );
}