import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

import { } from './style';
import Logo from '../../assets/logo.png';
import { HeaderStyle, LogOutStyle, LogoStyle, PhotoStyle } from './style.js';
import UserContext from '../../contexts/UserContext';

export default function Header(){

    //const { userPhoto } = useContext(UserContext);

    return(
        <HeaderStyle>

            <PhotoStyle>
                <img src={Logo}/>
                {/* {userPhoto} */}
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