import React from "react";
import SalesHits from "./SalesHits/SalesHits";
import style from './Catalog.module.css'
const Catalog = (props) => {
    return (
        <div className={style.catalog}>
            <SalesHits state={props.store.getState()} store={props.store } />
        </div>
    )
}
export default Catalog