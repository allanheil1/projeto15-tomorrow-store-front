import { createContext, useState } from "react";

export const OrderContext = createContext();

function OrderProvider({ children }) {
    const [cartList, setCartList] = useState([]);
    const shoppingCart = cartList.length;
	
	return (
		<OrderContext.Provider
			value={{
                cartList,
                setCartList,
                shoppingCart,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}

export default OrderProvider;
