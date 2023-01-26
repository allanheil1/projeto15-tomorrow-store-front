import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Logo from '../../assets/storelogo.png';
import { AuthenticationPageStyle, Message, Form } from "./style";
import { UserContext } from "../../contexts/UserContext";

export default function SignInPage() {
	const navigate = useNavigate();
	const { setToken, setUserPhoto, setVisibleHeader } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);
	const [signInData, setSignInData] = useState({
		email: '',
		password: '',
	});

	useEffect(()=>{
		setVisibleHeader(false);
		// eslint-disable-next-line
	},[]);

	function SignInRequest(e) {
		e.preventDefault();
		setIsLoading(true);
		const promise = axios.post(process.env.REACT_APP_SIGNIN_URL, signInData);
		promise.then((res) => {
			setIsLoading(false);
			setToken(res.data.token);
			setUserPhoto(res.data.user.photoURL);

			navigate("/home");
		});
		promise.catch((err) => {
			setIsLoading(false);
			const errorMsg = err.response.statusText;
			alert(`Erro: ${errorMsg}`);
		});
	}

	function OnChange(e) {
		setSignInData({ ...signInData, [e.target.name]: e.target.value });
	}

	return (
		<AuthenticationPageStyle>
			<img src={Logo} />

			<Form onSubmit={SignInRequest}>
				<input
					type="email"
					placeholder="email"
					value={signInData.email}
					name="email"
					onChange={OnChange}
					required
					disabled={isLoading}
				/>
				<input
					type="password"
					placeholder="password"
					value={signInData.password}
					name="password"
					onChange={OnChange}
					required
					disabled={isLoading}
				/>
				<button type="submit" disabled={isLoading}>
					Sign-In
				</button>
			</Form>

			<Link to={isLoading ? "" : "/sign-up"}>
				<Message>Don't have an account? Sign-Up!</Message>
			</Link>
		</AuthenticationPageStyle>
	);
}
