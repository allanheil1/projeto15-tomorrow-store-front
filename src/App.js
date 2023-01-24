import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';

export default function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ token, setToken, user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignInPage />}/>
            <Route path='/sign-up' element={<SignUpPage />}/>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/cart' element={<CartPage />}/>
            <Route path='/orders' element={<OrderPage />}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}


