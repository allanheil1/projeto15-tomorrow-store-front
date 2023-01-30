import { useContext, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import {
	CartContainer,
	PaymentContainer,
	HeaderContainer,
	EmptyCart,
} from "./style";

import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function CartPage() {
	const { cartList } = useContext(OrderContext);
	const { checkLogin } = useContext(UserContext);
	const [nextPage, setNextPage] = useState(false);
	const navigate = useNavigate();
	checkLogin();

	function handleSubmit() {
		setNextPage(true);
		setTimeout(navigate, 500, "/checkout");
	}


	if (cartList.length === 0) {
		return (
			<EmptyCart>
				<h1>Your cart is empty!</h1>
				<h2>
					Please add some items to your cart before proceeding to
					checkout.
				</h2>
			</EmptyCart>
		);
	}

	return (
		<CartContainer next={nextPage}>
			<div>
				<HeaderContainer>
					<h1>Item</h1>
					<h1>Price</h1>
				</HeaderContainer>
				{cartList.map((item) => (
					<CartItem key={item._id} item={item} />
				))}
			</div>
			<PaymentContainer>
				<div>
					<p>
						Subtotal: ${" "}
						{cartList.reduce((acc, item) => acc + item.price, 0)}
					</p>
				</div>
				<button onClick={handleSubmit}>Proceed to Payment</button>
			</PaymentContainer>
		</CartContainer>
	);
}
