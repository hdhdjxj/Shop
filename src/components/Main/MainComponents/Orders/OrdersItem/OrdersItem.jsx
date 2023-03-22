import React from "react";
import styles from './OrdersItem.module.css'
const OrdersItem = (props) => {
    const delOlder = () => {
        props.delOlderFunc(props.id)
    }
    return (
        <div className={styles.OrdersItem}>
            <div className={styles.about}>
                <div className={styles.foto}><img src={props.img} width='300px' height='200px' alt="" /></div>
                <div className={styles.name}>{props.heading}</div>
            </div>
            <div className={styles.date}>
                <div className={styles.delete}><button className={styles.button} onClick={delOlder}>Удалить</button></div>
                <div className={styles.cost}>{props.cost }</div>
                <div className={styles.first}>{props.FirstDate }</div>
                <div className={styles.second}>{props.SecondDate }</div>
                <div className={styles.detailed}><a>Подробнее</a></div>
            </div>
        </div>
    )
}
export default OrdersItem