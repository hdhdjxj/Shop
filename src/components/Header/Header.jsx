import React from "react"
import styles from './Header.module.css'
import NavBar from "./NabBar/NavBar"
import SearchElems from "./SearchElems/SearchElems"
const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <SearchElems dispatch={props.store.dispatch.bind(props.store)} state={props.store.getState()} />
                <NavBar/>
            </div>
        </header>
    )
}
export default Header