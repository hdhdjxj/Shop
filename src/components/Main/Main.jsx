import React from "react";
import styles from './Main.module.css'
import Catalog from "./MainComponents/Catalog/Catakog";
import { Route,Routes } from "react-router-dom";
import OrdersContainer from "./MainComponents/Orders/OrdersContainer";
const Main = () => {
    return (
        <main className={styles.Main}>
            <Routes>
                <Route element={<OrdersContainer/>} path='/Orders' />
                <Route element={<Catalog/>} path='/Catalog' />
            </Routes>
        </main>
    )
}
export default Main