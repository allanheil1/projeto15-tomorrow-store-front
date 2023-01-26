import { HomePageStyle, ProductContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Product from "../../components/Product/Product";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
	const [products, setProducts] = useState([]);
	const { setVisibleHeader } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		setVisibleHeader(true);
		async function getProducts() {
			try {
				const response = await axios.get("/products");
				setProducts(response.data);
			} catch (e) {
				alert("Erro ao carregar produtos");
				navigate("/");
			}
		}
		getProducts();
		// eslint-disable-next-line
	}, []);
	return (
		<HomePageStyle>
			<h1>Products</h1>
			<ProductContainer>
				{products.map((product) => (
					<Product
						name={product.name}
						price={product.price}
						image={product.image}
						key={product._id}
					/>
				))}
			</ProductContainer>
		</HomePageStyle>
	);
}
