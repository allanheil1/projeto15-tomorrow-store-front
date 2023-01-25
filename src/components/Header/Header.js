import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { } from './style';
import Logo from '../../assets/logo.jpeg';
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
                <Link to='/sign-in'>
                    <FiLogOut size={25} /> 
                </Link>
            </LogOutStyle>

        </HeaderStyle>
    )

}