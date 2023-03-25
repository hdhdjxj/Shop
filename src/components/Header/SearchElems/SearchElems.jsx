import React from "react";
import styles from './SearchElems.module.css'
import { NavLink } from "react-router-dom";
const SearchElems = (props) => {
    let input = React.createRef()
    const uppDateNewValue = () => {
        let value = input.current.value
        props.uppDateNewValueText(value)
    }
    return (
        <div className={styles.SearchElems}>
            <div className={styles.catalog}>
            <NavLink to='/Catalog'><button>Каталог</button></NavLink>
            </div>    
            <div className={styles.input}>
                <input type="text" placeholder="Search" ref={input} onChange={uppDateNewValue}value={props.value} />
            </div>
        </div>
    )
}
export default SearchElems