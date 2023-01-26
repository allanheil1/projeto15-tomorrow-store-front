import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs'; 
import { HiOutlineHome, HiOutlineShoppingCart, HiOutlineClipboardList } from 'react-icons/hi'

import UserContext from '../../contexts/UserContext';

import { FooterStyle } from './style';

export default function Footer(){

    return(

        <FooterStyle>

                <Link to='/home'>
                    <HiOutlineHome size={40}/>
                </Link>

                <Link to='/cart'>
                    <HiOutlineShoppingCart size={40}/>
                </Link>

                <Link to='/orders'>
                    <HiOutlineClipboardList size={40}/>
                </Link>
            
        </FooterStyle>

    )

}