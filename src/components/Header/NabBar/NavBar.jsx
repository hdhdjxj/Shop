import React from "react";
import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}><NavLink to='/Orders'>Заказы</NavLink></li>
            <li className={styles.item}>Избранное</li>
            <li className={styles.item}>Корзина</li>
            <li className={styles.item}>Профиль</li>
        </ul>
    )
}
export default NavBar