import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import {
	CheckoutContainer,
	Method,
	MethodContainer,
	PaymentContainer,
} from "./style";

function Checkout() {
	const [animation, setAnimation] = useState(false);
	const [selectedMethod, setSelectedMethod] = useState("");
	const { cartList } = useContext(OrderContext);
	const navigate = useNavigate();
	useEffect(() => {
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

	return (
		<CheckoutContainer animation={animation}>
			<h1>Choose your payment method</h1>
			<MethodContainer>
				<Method
					name="credit"
					selection={selectedMethod}
					onClick={handleSelection}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png"
						alt="Credit Card"
					/>
					<h2>Credit Card</h2>
				</Method>
				<Method
					name="debit"
					selection={selectedMethod}
					onClick={handleSelection}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png"
						alt="Debit Card"
					/>
					<h2>Debit Card</h2>
				</Method>
				<Method
					name="crypto"
					selection={selectedMethod}
					onClick={handleSelection}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/1213/1213709.png"
						alt="Crypto"
					/>
					<h2>Crypto</h2>
				</Method>
			</MethodContainer>
			<PaymentContainer>
				<div>
					<p>
						Subtotal: ${" "}
						{cartList.reduce((acc, item) => acc + item.price, 0)}
					</p>
				</div>
				<button>Checkout</button>
			</PaymentContainer>
		</CheckoutContainer>
	);
}

export default Checkout;
