import { HomePageStyle, ProductContainer } from "./style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import Product from "../../components/Product/Product";

const MOCKDATA = [
	{
		id: 1,
		name: "Produto 1",
		price: 10,
		image: "https://picsum.photos/200/300",
	},
	{
		id: 2,
		name: "Produto 2",
		price: 20,
		image: "https://picsum.photos/200/300",
	},
	{
		id: 3,
		name: "Produto 3",
		price: 30,
		image: "https://picsum.photos/200/300",
	},
];

export default function HomePage() {
	const { setVisibleHeader } = useContext(UserContext);
	useEffect(() => {
		setVisibleHeader(true);
		// eslint-disable-next-line
	}, []);
	return (
		<HomePageStyle>
			<h1>Products</h1>
			<ProductContainer>
				{MOCKDATA.map((product) => (
					<Product
						name={product.name}
						price={product.price}
						image={product.image}
						key={product.id}
					/>
				))}
			</ProductContainer>
		</HomePageStyle>
	);
}
