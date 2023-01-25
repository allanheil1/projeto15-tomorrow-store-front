import { HomePageStyle } from './style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {

    return(
        <>
            <Header/>

            <HomePageStyle>
                <h1>HomePage</h1>
            </HomePageStyle>

            <Footer/>
        </>

    )

}