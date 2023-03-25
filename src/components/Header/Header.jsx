import React from "react"
import styles from './Header.module.css'
import NavBar from "./NabBar/NavBar"
import SearchElemsContainer from "./SearchElems/SearchElemsContainer"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <SearchElemsContainer/>
                <NavBar/>
            </div>
        </header>
    )
}
export default Header