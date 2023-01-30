import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { UserContext } from "../../contexts/UserContext";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import dayjs from "dayjs";
import {
	CheckoutContainer,
	Method,
	MethodContainer,
	PaymentContainer,
} from "./style";
import crypto from "../../assets/crypto.png";
import card from "../../assets/card.png";

function Checkout() {
	const [animation, setAnimation] = useState(false);
	const [selectedMethod, setSelectedMethod] = useState("");
	const [loading, setLoading] = useState(false);
	const { cartList, setCartList } = useContext(OrderContext);
	const { token, checkLogin } = useContext(UserContext);
	const navigate = useNavigate();
	const totalPrice = cartList.reduce((acc, item) => acc + item.price, 0);
	useEffect(() => {
		checkLogin();
		if (cartList.length !== 0) {
			setTimeout(setAnimation, 100, true);
		} else {
			alert(
				"Your cart is empty! Please add some items to your cart before proceeding to checkout."
			);
			navigate("/home");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleSelection(e) {
		setSelectedMethod(e.target.name);
	}

	async function handleCheckout() {
		if (selectedMethod === "") {
			alert("Please select a payment method!");
			return;
		}
		const itemList = cartList.map((item) => ({
			name: item.name,
			price: item.price,
		}));
		const order = {
			date: dayjs().format("MM/DD/YY"),
			payMethod: selectedMethod,
			totalPrice: totalPrice,
			itemsList: itemList,
		};
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			await axios.post(
				process.env.REACT_APP_POST_ORDER,
				order,
				config
			);
			setCartList([]);
			navigate('/success');
		} catch (error) {
			console.log(error);
		}
	}
	if (loading){
		return <Loading />
	}

	return (
		<CheckoutContainer animation={animation}>
			<h1>Choose your payment method</h1>
			<MethodContainer>
				<Method
					name="credit"
					selection={selectedMethod}
					onClick={handleSelection}
				>
					<img src={card} alt="Credit Card" />
					<h2>Credit Card</h2>
				</Method>
				<Method
					name="debit"
					selection={selectedMethod}
					onClick={handleSelection}
				>
					<img src={card} alt="Debit Card" />
					<h2>Debit Card</h2>
				</Method>
				<Method
					name="crypto"
					selection={selectedMethod}
					onClick={handleSelection}
				>
					<img src={crypto} alt="Crypto" />
					<h2>Crypto</h2>
				</Method>
			</MethodContainer>
			<PaymentContainer>
				<div>
					<p>
						Subtotal: ${" "}
						{totalPrice}
					</p>
				</div>
				<button
					onClick={async () => {
						setLoading(true);
						await handleCheckout();
					}}
				>
					Checkout
				</button>
			</PaymentContainer>
		</CheckoutContainer>
	);
}

export default Checkout;
