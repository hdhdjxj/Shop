import React from "react";
import OrdersItemContainer from "./OrdersItem/OrdersItemContainer";
import styles from './Orders.module.css'
const Orders = (props) => {
    let allOrders = props.state.Main.OrdersPage.OrdersPageData.map(item => <OrdersItemContainer store={props.store} id={item.id} img={item.img} heading={item.heading} cost={item.cost} FirstDate={item.firstDate} SecondDate={ item.secondDate} />)
    return (
        <div className={styles.orders}>
            <div className={styles.heading}>Ваши заказы</div>
            {allOrders}
        </div>
    )
}
export default Orders