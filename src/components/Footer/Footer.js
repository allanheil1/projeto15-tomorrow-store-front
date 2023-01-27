import { Link } from "react-router-dom";
import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import {
	HiOutlineHome,
	HiOutlineShoppingCart,
	HiOutlineClipboardList,
} from "react-icons/hi";

import { FooterStyle } from "./style";
import { OrderContext } from "../../contexts/OrderContext.js";
import { Badge } from "@mui/material";

export default function Footer() {
	const { shoppingCart } = useContext(OrderContext);

	return (
		<FooterStyle>
			<Link to="/home">
				<HiOutlineHome size={40} />
			</Link>

			<Link to="/cart">
				<Badge badgeContent={shoppingCart} color="primary">
					<HiOutlineShoppingCart size={40} />
				</Badge>
			</Link>

			<Link to="/orders">
				<HiOutlineClipboardList size={40} />
			</Link>
		</FooterStyle>
	);
}
