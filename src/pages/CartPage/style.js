import styled from 'styled-components';

export const CartContainer = styled.div`
    margin: 70px 0;
    width: 100vw;
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    > div{
        width: 100%;
    }
`;

export const CheckoutContainer = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    > div{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
    }
    > div > p{
        font-size: 1.2rem;
        font-weight: 600;

    }
    > button{
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background: linear-gradient(180deg, #79e499 0%, #0dcdf4 100%);
        color: white;
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
    }  
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-template-areas: "image name price remove";
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding: 10px 25px;
    > h1{
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
    }
    > h1:first-child{
        grid-area: image;
    }
    > h1:nth-child(2){
        grid-area: price;
    }
`;