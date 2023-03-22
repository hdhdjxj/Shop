import React from "react";
import { delOrderActionCreator } from "../../../../../Redux/MainReducer"
import OrdersItem from "./OrdersItem";
const OrdersItemContainer = (props) => {
    const delOlder = () => {
        let action = delOrderActionCreator(props.id)
        props.store.dispatch(action)
    }
    return (
        <OrdersItem delOlderFunc={delOlder}id={props.id} img={props.img} heading={props.heading} cost={props.cost} FirstDate={props.firstDate} SecondDate={ props.secondDate} />
    )
}
export default OrdersItemContainer