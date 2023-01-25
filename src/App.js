import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';

import GlobalStyle from './globalStyle/globalStyle';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';

export default function App() {

  const [token, setToken] = useState(null);
  const [userPhoto, setUserPhoto] = useState('');
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
            <Route path='/orders' element={<OrdersPage />}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}


