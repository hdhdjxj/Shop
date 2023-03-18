import React from "react";
import styles from './SalesHitsItem.module.css'
import { addOrderActionCreator } from "../../../../../../Redux/store";
const SalesHitsItem = (props) => {
    let addOrder = () => {
        const action = addOrderActionCreator(props.heading, props.cost, props.img)
        props.dispatch(action)
    }
    return (
        <div className={styles.Item} onClick={addOrder}>
            <div className={styles.foto}><img src={props.img} width='200px' height='200px' alt="" /></div>
            <div className={styles.heading}>{props.heading }</div>
            <div className={styles.cost}>{props.cost }</div>
        </div>
    )
}
export default SalesHitsItem