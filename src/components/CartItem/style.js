import styled from "styled-components";

export const CartItemContainer = styled.div`
    margin: 10px 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "image name price remove";
    justify-items: center;
    align-items: center;
    padding: 10px 25px;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
    transform: translateX(${(props) => (props.isRemoved ? "-100%" : "0")});
    transition: transform 0.5s ease-in-out;
    > img{
        width: 50px;
        height: 50px;
    }
    > h1{
        font-size: 17px;
        grid-area: name;
        justify-self: start;
    }
    > p{
        font-size: 15px;
        grid-area: price;
        justify-self: start;
    }

    > svg{
        font-size: 25px;
        color: #8b0000;
    }
`;