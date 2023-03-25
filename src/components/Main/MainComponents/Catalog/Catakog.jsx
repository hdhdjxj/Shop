import React from "react";
import SalesHitsContainer from "./SalesHits/SalesHitsContainer";
import style from './Catalog.module.css'
const Catalog = () => {
    return (
        <div className={style.catalog}>
            <SalesHitsContainer/>
        </div>
    )
}
export default Catalog