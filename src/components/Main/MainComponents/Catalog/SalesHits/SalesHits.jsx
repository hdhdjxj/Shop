import React from "react";
import styles from './SalesHits.module.css'
import SalesHitsItemContainer from "./SalesHitsItem/SalesHitsItemContainer";
const SalesHits = (props) => {
    let allPosts = props.state.Main.SalesHits.SalesHitsData.map(item => {return <SalesHitsItemContainer store={props.store} img={item.img} heading={item.heading} cost={item.cost} />})
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