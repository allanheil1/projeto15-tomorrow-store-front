import { OrderStyle, HeaderOrder, ItemsOrder } from './style';

export default function Order({orderId, date, paymethod, totalPrice, itemsList}){
    
    return(
        <OrderStyle>

            <HeaderOrder>
                <h1><span>Order number:</span> {orderId}</h1>
                <h2><span>Date:</span>  {date}</h2>
                <h3><span>Price:</span>  ${totalPrice.toFixed(2)}</h3>
                <h4><span>Payment method:</span>  {paymethod}</h4>
            </HeaderOrder>

            <ItemsOrder>
                <h1>Products</h1>
                {itemsList.map((item, index) => 
                    <h2 key={index}>➣{item.name}</h2>
                )}
            </ItemsOrder>

        </OrderStyle>
    )
}