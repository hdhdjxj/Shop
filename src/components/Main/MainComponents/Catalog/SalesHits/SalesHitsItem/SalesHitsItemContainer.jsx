import React from "react";
import { addOrderActionCreator } from "../../../../../../Redux/MainReducer";
import SalesHitsItem from "./SalesHitsItem";
const SalesHitsItemContainer = (props) => {
    let addOrder = () => {
        const heading = props.heading
        const cost = props.cost
        const img = props.img
        const action = addOrderActionCreator(heading, cost, img)
        props.store.dispatch(action)
    }
    let Data = {
        heading: props.heading,
        cost: props.cost,
        img: props.img
    }
    return (
        <SalesHitsItem addOrderFunc={addOrder } Data={Data} />
    )
}
export default SalesHitsItemContainer