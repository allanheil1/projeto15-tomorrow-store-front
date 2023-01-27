import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext.js";
import { ProductInfo, ProductStyle } from "./style";

function Product({ product }) {
	const {cartList,setCartList} = useContext(OrderContext);
	const inCart = cartList.find((item) => item._id === product._id);

	function addToCart() {
		if(!inCart){
			setCartList([...cartList,product]);
		} else{
			setCartList(cartList.filter((item) => item._id !== product._id));
		}
	}

	return (
		<ProductStyle>
			<img src={product.image} />
			<ProductInfo>
				<h1>{product.name}</h1>
				<div>
					<p>$ {product.price}</p>
					<button onClick={addToCart} className={inCart?"remove":""} >{inCart?"In Cart":"Buy"}</button>
				</div>
			</ProductInfo>
		</ProductStyle>
	);
}

export default Product;