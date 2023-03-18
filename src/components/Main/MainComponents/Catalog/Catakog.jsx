import React from "react";
import SalesHits from "./SalesHits/SalesHits";
import style from './Catalog.module.css'
const Catalog = (props) => {
    return (
        <div className={style.catalog}>
            <SalesHits SalesHits={props.SalesHits} dispatch={props.dispatch} Orders={props.Orders } />
        </div>
    )
}
export default Catalog