import { ProductInfo, ProductStyle } from "./style";

function Product({ product }) {
	

	return (
		<ProductStyle>
			<img src={product.image} />
			<ProductInfo>
				<h1>{product.name}</h1>
				<div>
					<p>$ {product.price}</p>
					<button>Buy</button>
				</div>
			</ProductInfo>
		</ProductStyle>
	);
}

export default Product;