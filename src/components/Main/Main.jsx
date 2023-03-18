import React from "react";
import styles from './Main.module.css'
import Orders from "./MainComponents/Orders/Orders";
import Catalog from "./MainComponents/Catalog/Catakog";
import { Route,Routes } from "react-router-dom";
const Main = (props) => {
    return (
        <main className={styles.Main}>
            <Routes>
                <Route element={<Orders Orders={props.state.Main.OrdersPage} dispatch={props.dispatch }/>} path='/Orders' />
                <Route element={<Catalog SalesHits={props.state.Main.SalesHits} dispatch={props.dispatch } />} Orders={props.state.Main.OrdersPage.OrdersPageData} path='/Catalog' />
            </Routes>
        </main>
    )
}
export default Main