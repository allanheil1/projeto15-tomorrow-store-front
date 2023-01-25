import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs'; 

import UserContext from '../../contexts/UserContext';

import { FooterStyle } from './style';

export default function Footer(){

    return(

        <FooterStyle>

                <Link to='/home'>
                    Home
                </Link>

                <Link to='/cart'>
                    <BsCart2 size={40}/>
                </Link>

                <Link to='/orders'>
                    Orders
                </Link>
            
        </FooterStyle>

    )

}