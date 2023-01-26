import styled from "styled-components";

export const ProductStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 48%;
    max-width: 300px;
	height: 30%;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
    margin-top: 10px;
	> img {
		width: 100%;
		height: 150px;
		object-fit: cover;
	}
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	padding: 0 10px 5px 10px;
	> h1 {
		font-size: 20px;
		font-weight: 700;
	}
	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
		width: 100%;
	}
	> div > p {
		font-size: 15px;
	}
	> div > button {
		width: 60px;
		height: 30px;
		border: none;
		border-radius: 10px;
		font-size: 15px;
		color: #fff;
        background: linear-gradient(180deg, #79e499 0%, #0dcdf4 100%);
	}
`;
