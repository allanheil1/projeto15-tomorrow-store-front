import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import Logo from '../../assets/storelogo.png';
import { AuthenticationPageStyle, Message, Form } from './style'

export default function SignUpPage() {
    const { setVisibleHeader } = useContext(UserContext);
    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState({
      email: '',
      name: '',
      photoURL: '',
      password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        setVisibleHeader(false);
        // eslint-disable-next-line
    },[]);

    function SignUpRequest(e){
      e.preventDefault();
      setIsLoading(true);
      console.log(signUpData);
      const promise = axios.post(process.env.REACT_APP_SIGNUP_URL , signUpData);
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
            type='text' placeholder='photo URL'
            value={signUpData.photoURL} name='photoURL'
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
