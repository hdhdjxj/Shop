import React from "react";
import styles from './Main.module.css'
import Orders from "./MainComponents/Orders/Orders";
import Catalog from "./MainComponents/Catalog/Catakog";
import { Route,Routes } from "react-router-dom";
const Main = (props) => {
    return (
        <main className={styles.Main}>
            <Routes>
                <Route element={<Orders state = {props.store.getState()} dispatch={props.dispatch } store={props.store}/>} path='/Orders' />
                <Route element={<Catalog store={props.store}/>} path='/Catalog' />
            </Routes>
        </main>
    )
}
export default Main