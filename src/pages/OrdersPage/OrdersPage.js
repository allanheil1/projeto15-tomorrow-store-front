import axios from 'axios';
import { HeaderContainer, OrdersContainer, EmptyMessage, ButtonStore } from './style';
import Order from '../../components/Order/Order';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from 'react-router-dom';

export default function OrdersPage() {

    const { setVisibleHeader, token } = useContext(UserContext);
    const { ordersList, setOrdersList } = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setVisibleHeader(true);
        loadOrders();
      }, []);

	const OrdersExample = [
		{ 
			orderId: 0, 
			userId: 1, 
			date: '07/08/2021', 
			paymethod: 'credit',
			totalPrice: 1250,
			itemsList: [
				{name: 'Invisibility',price: 1000}, 
				{name: 'Telekinesis', price: 250}
			]
		}, 
		{ 
			orderId: 1, 
			userId: 1, 
			date: '10/11/2022', 
			paymethod: 'crypto',
			totalPrice: 3750,
			itemsList: [
				{name: 'Flying',price: 1000}, 
				{name: 'Mindreading', price: 2500}, 
				{name: 'Telekinesis', price: 250}
			]
		}, 
        { 
			orderId: 2, 
			userId: 1, 
			date: '10/09/2022', 
			paymethod: 'debit',
			totalPrice: 23750,
			itemsList: [
				{name: 'Flying',price: 1000}, 
                {name: 'Infinite Life Time', price: 20000}, 
				{name: 'Mindreading', price: 2500}, 
				{name: 'Telekinesis', price: 250}
			]
		}
	];

    function loadOrders(e){
        //e.preventDefault();
        setIsLoading(true);
        const promise = axios.get(process.env.REACT_APP_ORDERS_URL, { headers: { 'Authorization': `Bearer ${token}` }});
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

    if(OrdersExample.length === 0){
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
            {OrdersExample.map((ord, index) => 
                <Order
                    key={index}
                    orderId={ord.orderId}
                    date={ord.date}
                    paymethod={ord.paymethod}
                    totalPrice={ord.totalPrice}
                    itemsList={ord.itemsList}
                />
            ).reverse()}

        </OrdersContainer>

    )

}
