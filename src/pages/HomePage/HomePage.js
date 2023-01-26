import { HomePageStyle } from "./style";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function HomePage() {
    const { setVisibleHeader } = useContext(UserContext);
    useEffect(() => {
        setVisibleHeader(true);
        // eslint-disable-next-line
    }, []);
	return (
		<HomePageStyle>
			<h1>HomePage</h1>
		</HomePageStyle>
	);
}
