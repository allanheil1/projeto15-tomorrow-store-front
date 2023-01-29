import { Container } from "./style";
import { AiFillCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Success() {
    const navigate = useNavigate();

	return (
		<Container>
			<AiFillCheckCircle />
			<h1>Order placed successfully!</h1>
            <button onClick={()=>navigate('/home')}> Return to HomePage </button>
            <button onClick={()=>navigate('/orders')}> View Orders </button>
		</Container>
	);
}
