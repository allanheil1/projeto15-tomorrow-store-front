import { HomePageStyle, ProductContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Product from "../../components/Product/Product";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

export default function HomePage() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const { setVisibleHeader, checkLogin } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		checkLogin();
		setVisibleHeader(true);
		async function getProducts() {
			try {
				const response = await axios.get(process.env.REACT_APP_PRODUCTS_URL);
				setProducts(response.data);
				setLoading(false);
			} catch (e) {
				alert("Erro ao carregar produtos");
				navigate("/");
			}
		}
		getProducts();
		// eslint-disable-next-line
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<HomePageStyle>
			<h1>Products</h1>
			<ProductContainer>
				{products.map((product) => (
					<Product
						product = {product}
						key={product._id}
					/>
				))}
			</ProductContainer>
		</HomePageStyle>
	);
}
