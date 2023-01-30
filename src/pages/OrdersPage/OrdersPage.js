import axios from 'axios';
import { HeaderContainer, OrdersContainer, EmptyMessage, ButtonStore } from './style';
import Order from '../../components/Order/Order';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

export default function OrdersPage() {

    const { setVisibleHeader, token, checkLogin } = useContext(UserContext);
    const [ordersList, setOrdersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkLogin();
        setVisibleHeader(true);
        loadOrders();
      }, []);


    function loadOrders(){
        setIsLoading(true);
        const promise = axios.get(process.env.REACT_APP_POST_ORDER, { headers: { 'Authorization': `Bearer ${token}` }});
        promise.then((res) => {
          setOrdersList(res.data);
          setIsLoading(false);
        });
        promise.catch((err) => {
          setIsLoading(false);
          const errorMsg = err.response.statusText;
          alert(`Erro: ${errorMsg}`);
        })
    }
    if(isLoading){
        return <Loading />
    }

    if(ordersList.length === 0){
        return(

            <OrdersContainer>
                <HeaderContainer>
                    Orders List
                </HeaderContainer>
                <EmptyMessage>
                    You didn't make an order yet
                </EmptyMessage>
                <Link to='/home'>
                    <ButtonStore>Back to the store</ButtonStore>
                </Link>

            </OrdersContainer>

        )
    }

    return(

        <OrdersContainer>
            <HeaderContainer>
                Orders List
            </HeaderContainer>
            {ordersList.map((ord, index) => 
                <Order
                    key={index}
                    orderId={ord.orderId}
                    date={ord.date}
                    paymethod={ord.payMethod}
                    totalPrice={ord.totalPrice}
                    itemsList={ord.itemsList}
                />
            ).reverse()}

        </OrdersContainer>

    )

}
