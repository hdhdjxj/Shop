import React from "react"
import styles from './Header.module.css'
import NavBar from "./NabBar/NavBar"
import SearchElemsContainer from "./SearchElems/SearchElemsContainer"
const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <SearchElemsContainer state={props.store.getState()} dispatch={ props.store.dispatch}/>
                <NavBar/>
            </div>
        </header>
    )
}
export default Header