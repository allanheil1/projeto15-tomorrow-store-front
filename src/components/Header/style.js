import styled from 'styled-components';

export const HeaderStyle = styled.div`
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #020e27;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const PhotoStyle = styled.div`
    img{
        margin-left: 40px;
        border-radius: 50%;
        height: 40px;
        width: 40px; 
    }
`

export const LogoStyle = styled.div`
    img{
        height: 50px;
        width: 50px;
    }
`

export const LogOutStyle = styled.div`
    color: #FFFFFF;
    height: 25px;
    width: 25px;
    margin-right: 40px;
`



