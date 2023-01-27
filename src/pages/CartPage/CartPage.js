import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { CartContainer, CheckoutContainer, HeaderContainer } from "./style";
import CartItem from "../../components/CartItem/CartItem";

export default function CartPage() {
	const { cartList } = useContext(OrderContext);

	return (
		<CartContainer>
			<div>
                <HeaderContainer>
                    <h1>Item</h1>
                    <h1>Price</h1>
                </HeaderContainer>
				{cartList.map((item) => (
					<CartItem key={item._id} item={item} />
				))}
			</div>
			<CheckoutContainer>
				<div>
					<p>
						Subtotal: ${" "}
						{cartList.reduce((acc, item) => acc + item.price, 0)}
					</p>
				</div>
				<button>Checkout</button>
			</CheckoutContainer>
		</CartContainer>
	);
}
