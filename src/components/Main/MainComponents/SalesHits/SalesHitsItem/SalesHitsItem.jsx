import React from "react";
import styles from './SalesHitsItem.module.css'

const SalesHitsItem = (props) => {
    return (
        <div className={styles.Item}>
            <div className={styles.foto}><img src={props.img} width='200px' height='200px' alt="" /></div>
            <div className={styles.heading}>{props.heading }</div>
            <div className={styles.cost}>{props.cost }</div>
        </div>
    )
}
export default SalesHitsItem