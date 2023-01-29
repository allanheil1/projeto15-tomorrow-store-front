import styled from 'styled-components';

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px 0;
    width: 100vw;
`

export const HeaderContainer = styled.div`
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
`

export const EmptyMessage=styled.div`
    margin-top: 30vh;
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
`

export const ButtonStore = styled.button`
    margin-top: 50px;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: linear-gradient(180deg, #79e499 0%, #0dcdf4 100%);
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
`