import React from "react";
import styles from './NavBar.module.css'
const NavBar = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>Заказы</li>
            <li className={styles.item}>Избранное</li>
            <li className={styles.item}>Корзина</li>
            <li className={styles.item}>Профиль</li>
        </ul>
    )
}
export default NavBar