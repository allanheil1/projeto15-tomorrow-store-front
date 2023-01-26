import { ProductInfo, ProductStyle } from "./style";

function Product({ name, price, image }) {
	return (
		<ProductStyle>
			<img src={image} />
			<ProductInfo>
				<h1>{name}</h1>
				<div>
					<p>$ {price}</p>
					<button>Buy</button>
				</div>
			</ProductInfo>
		</ProductStyle>
	);
}

export default Product;