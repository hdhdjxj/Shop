import React from "react";
import styles from './SalesHits.module.css'
import SalesHitsItem from "./SalesHitsItem/SalesHitsItem";
const SalesHits = (props) => {
    let allPosts = props.SalesHits.SalesHitsData.map(item => { return <SalesHitsItem img={item.img} heading={item.heading } cost={item.cost } />  })
    return (
        <div className={styles.SalesHits}>
            <div className={styles.heading}>Хиты продаж</div>
            <div className={styles.list}>
                {allPosts}
            </div>
        </div>
    )
}
export default SalesHits