import React from "react";
import styles from './SalesHitsItem.module.css'
const SalesHitsItem = (props) => {
    let addOrder = () => {
        props.addOrderFunc()
    }
    return (
        <div className={styles.Item} onClick={addOrder}>
            <div className={styles.foto}><img src={props.Data.img} width='200px' height='200px' alt="" /></div>
            <div className={styles.heading}>{props.Data.heading }</div>
            <div className={styles.cost}>{props.Data.cost }</div>
        </div>
    )
}
export default SalesHitsItem