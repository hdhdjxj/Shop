import React from "react";
import OrdersItem from "./OrdersItem/OrdersItem";
import styles from './Orders.module.css'
const Orders = (props) => {
    let allOrders = props.state.Main.OrdersPage.OrdersPageData.map(item => <OrdersItem delOlderFunc={props.delOlder } id={item.id} img={item.img} heading={item.heading} cost={item.cost} FirstDate={item.firstDate} SecondDate={ item.secondDate} />)
    return (
        <div className={styles.orders}>
            <div className={styles.heading}>Ваши заказы</div>
            {allOrders}
        </div>
    )
}
export default Orders