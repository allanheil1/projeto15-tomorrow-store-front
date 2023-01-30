import styled from "styled-components";

export const CheckoutContainer = styled.div`
	margin: 70px 0;
	width: 100%;
	height: calc(100vh - 140px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	//Commented due to unknown bug
	/* transform: ${(props) =>  
		props.animation ? "translateX(0%)" : "translateX(100%)"};
	transition: transform 0.5s ease-in-out; */
	> h1 {
		font-size: 2rem;
		font-weight: 600;
		margin: 20px;
	}
`;

export const PaymentContainer = styled.div`
	padding: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	> div {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 20px;
	}
	> div > p {
		font-size: 1.2rem;
		font-weight: 600;
	}
	> button {
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

export const MethodContainer = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Method = styled.button`
    width: 80%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: ${(props) => props.selection === props.name ? "2px solid #0dcdf4" : "1px solid #ccc"};
    border-radius: 5px;
    margin: 10px 0;
    padding: 10px;
    background: transparent;
    > img{
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
    > h2{
        font-size: 1.2rem;
        font-weight: 500;
    }
`;