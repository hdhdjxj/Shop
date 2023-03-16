import React from "react";
import styles from './SearchElems.module.css'
import { uppDateSearchTextActionCreator } from "../../../Redux/store";
const SearchElems = (props) => {
    let input = React.createRef()
    const uppDateNewValue = () => {
        let value = input.current.value
        const action = uppDateSearchTextActionCreator(value)
        props.dispatch(action)
    }
    return (
        <div className={styles.SearchElems}>
            <div className={styles.catalog}>
              <button>Каталог</button>
            </div>    
            <div className={styles.input}>
                <input type="text" placeholder="Search" ref={input} onInput={uppDateNewValue} value={props.state.Header.SearchElems.inputValue} />
            </div>
        </div>
    )
}
export default SearchElems