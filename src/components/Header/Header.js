import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

import { } from './style';
import Logo from '../../assets/logo.png';
import { HeaderStyle, LogOutStyle, LogoStyle, PhotoStyle } from './style.js';

export default function Header({userPhoto}){
    return(
        <HeaderStyle>

            <PhotoStyle>
                <img src={userPhoto}/>
            </PhotoStyle>

            <LogoStyle>
                <img src={Logo}/>
            </LogoStyle>

            <LogOutStyle>
                <Link to='/'>
                    <HiOutlineLogout size={30} /> 
                </Link>
            </LogOutStyle>

        </HeaderStyle>
    )

}