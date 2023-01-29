import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

import GlobalStyle from "./globalStyle/globalStyle";
import SignInPage from "./pages/AuthenticationPages/SignInPage";
import SignUpPage from "./pages/AuthenticationPages/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import OrderProvider from "./contexts/OrderContext";
import Checkout from "./pages/Checkout/Checkout";

export default function App() {
	const { visibleHeader, userPhoto } = useContext(UserContext);

	return (
		<>
			<OrderProvider>
				<GlobalStyle />
				{visibleHeader && <Header userPhoto={userPhoto}/>}
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/cart" element={<CartPage />} />
					<Route path="/orders" element={<OrdersPage />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				{visibleHeader && <Footer />}
			</OrderProvider>
		</>
	);
}
