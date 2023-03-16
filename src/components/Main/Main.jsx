import React from "react";
import styles from './Main.module.css'
import SalesHits from "./MainComponents/SalesHits/SalesHits";
const Main = (props) => {
    return (
        <main className={styles.Main}>
            <SalesHits SalesHits={props.state.Main.SalesHits} />
        </main>
    )
}
export default Main