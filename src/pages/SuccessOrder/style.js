import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    > svg{
        font-size: 100px;
        color: #00b894;
        margin-bottom: 20px;
    }
    > h1{
        font-size: 30px;
        color: #00b894;
    }
    > button{
        margin-top: 20px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #0FCEF3;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }
`;