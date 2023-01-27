import { useContext, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext.js";
import { CartItemContainer } from "./style";
import { IoRemoveCircle } from "react-icons/io5";
function CartItem({ item }) {
	const { cartList, setCartList } = useContext(OrderContext);
	const [isRemoved, setIsRemoved] = useState(false);

	function removeItem() {
		setIsRemoved(true);
		setTimeout(() => {
			setCartList(
				cartList.filter((cartItem) => cartItem._id !== item._id)
			);
		}, 500);
	}

	return (
		<CartItemContainer isRemoved={isRemoved}>
			<img src={item.image} alt={item.name} />
			<h1>{item.name}</h1>
			<p>$ {item.price}</p>
			<IoRemoveCircle onClick={removeItem} />
		</CartItemContainer>
	);
}

export default CartItem;
